using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using MedicalResearch.SubjectData.Persistence.EF;
using MedicalResearch.SubjectData;
using System;
using Microsoft.AspNetCore.Mvc.Formatters;
using System.Threading.Tasks;
using MedicalResearch.SubjectData.Persistence;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Configuration;
using System.IO;
using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.OpenApi.Writers;
using MedicalResearch.SubjectData.Model;
using Security.AccessTokenHandling;
using MedicalResearch.SubjectData.StoreAccess;
using System.Web.UJMW;

namespace MedicalResearch.SubjectData.WebAPI {

  public class Startup {

    public Startup(IConfiguration configuration) {
      _Configuration = configuration;
      SubjectDataDbContext.ConnectionString = configuration.GetValue<String>("SqlConnectionString");
    }

    private static IConfiguration _Configuration = null;
    public static IConfiguration Configuration { get { return _Configuration; } }

    const string _ApiTitle = "ORSCF SubjectData";
    Version _ApiVersion = null;

    public void ConfigureServices(IServiceCollection services) {

      services.AddLogging();

      _ApiVersion = Version.Parse(ApiVersion.SemanticVersion);

      //StudyManagementDbContext.Migrate();

      string outDir = AppDomain.CurrentDomain.BaseDirectory;

      //services.AddSingleton<ISubjects, SubjectStore>();
      //services.AddSingleton<ISubjectSiteAssignments, SubjectSiteAssignmentStore>();

      var apiService = new ApiService(
        _Configuration.GetValue<string>("OAuthTokenRequestUrl"),
        _Configuration.GetValue<string>("PublicServiceUrl"),
        _Configuration.GetValue<string>("SubscriptionStorageDirectory")
      );
      services.AddSingleton<ISdrApiInfoService>(apiService);
      //services.AddSingleton<ISdrEventSubscriptionService>(apiService);
      //services.AddSingleton<ISubjectConsumeService>(apiService);
      //services.AddSingleton<ISubjectSubmissionService>(apiService);

      SdrShowcaseEndpointFactory.GetFactoryMethodsPerEndpoint((contractType, factory) => {
        services.AddSingleton(contractType, (s) => factory());
      });

      services.AddDynamicUjmwControllers(
        (r) => {

          SdrEndpointRegister.GetContractsPerEndpoint((contractType, subroute) => {
            r.AddControllerFor(contractType, "sdr/v2/" + subroute);
          });

          r.AddControllerFor<ISdrApiInfoService>("sdr/v2/SdrApiInfo");
          //c.AddControllerFor<ISdrEventSubscriptionService>("sdr/v2/SdrEventSubscription");
          //c.AddControllerFor<ISubjectConsumeService>("sdr/v2/SubjectConsume");
          //c.AddControllerFor<ISubjectSubmissionService>("sdr/v2/SubjectSubmission");

        }
      );

      services.AddSwaggerGen(c => {
        
        c.EnableAnnotations(true, true);

        c.IncludeXmlComments(outDir + "Hl7.Fhir.R4.xml", true);
        c.IncludeXmlComments(outDir + "ORSCF.SubjectData.Contract.xml", true);
        c.IncludeXmlComments(outDir + "ORSCF.SubjectData.Service.xml", true);
        c.IncludeXmlComments(outDir + "ORSCF.SubjectData.Service.WebAPI.xml", true);

        #region bearer

        //https://www.thecodebuzz.com/jwt-authorization-token-swagger-open-api-asp-net-core-3-0/
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme {
          Name = "Authorization",
          Type = SecuritySchemeType.ApiKey,
          Scheme = "Bearer",
          BearerFormat = "JWT",
          In = ParameterLocation.Header,
          Description = "JWT Authorization header using the Bearer scheme."
        });

        c.AddSecurityRequirement(new OpenApiSecurityRequirement
          {
              {
                    new OpenApiSecurityScheme
                      {
                          Reference = new OpenApiReference
                          {
                              Type = ReferenceType.SecurityScheme,
                              Id = "Bearer"
                          }
                      },
                      new string[] {}

              }
          });

        #endregion

        c.UseInlineDefinitionsForEnums();

        //c.SwaggerDoc(
        //  "StoreAccessV1",
        //  new OpenApiInfo {
        //    Title = _ApiTitle + "-StoreAccess",
        //    Version = _ApiVersion.ToString(3),
        //    Description = "NOTE: This is not intended be a 'RESTful' api, as it is NOT located on the persistence layer and is therefore NOT focused on doing CRUD operations! This HTTP-based API uses a 'call-based' approach to known BL operations. IN-, OUT- and return-arguments are transmitted using request-/response- wrappers (see [UJMW](https://github.com/KornSW/UnifiedJsonMessageWrapper)), which are very lightweight and are a compromise for broad support and adaptability in REST-inspired technologies as well as soap-inspired technologies!",
        //    Contact = new OpenApiContact {
        //      Name = "Open Research Study Communication Format",
        //      Email = "info@orscf.org",
        //      Url = new Uri("https://orscf.org")
        //    }
        //  }
        //);

        c.SwaggerDoc(
          "ApiV" + _ApiVersion.ToString(1),
          new OpenApiInfo {
            Title = _ApiTitle + "-API",
            Version = _ApiVersion.ToString(3),
            Description = "NOTE: This is not intended be a 'RESTful' api, as it is NOT located on the persistence layer and is therefore NOT focused on doing CRUD operations! This HTTP-based API uses a 'call-based' approach to known BL operations. IN-, OUT- and return-arguments are transmitted using request-/response- wrappers (see [UJMW](https://github.com/KornSW/UnifiedJsonMessageWrapper)), which are very lightweight and are a compromise for broad support and adaptability in REST-inspired technologies as well as soap-inspired technologies!",
            Contact = new OpenApiContact {
              Name = "Open Research Study Communication Format",
              Email = "info@orscf.org",
              Url = new Uri("https://orscf.org")
            },
          }
        );

      });

    }
    
    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerfactory) {

      var logFileFullName = _Configuration.GetValue<string>("LogFileName");
      var logDir = Path.GetFullPath(Path.GetDirectoryName(logFileFullName));
      Directory.CreateDirectory(logDir);
      loggerfactory.AddFile(logFileFullName);

      //required for the www-root
      app.UseStaticFiles();

      if (!_Configuration.GetValue<bool>("ProdMode")) {
        app.UseDeveloperExceptionPage();
      }

      //string validateTokensVia = _Configuration.GetValue<string>("ValidateTokensVia");
      //if (validateTokensVia.StartsWith("http")) {
      //  DefaultAccessTokenValidator.Instance = new ValidationServiceConnector(
      //    validateTokensVia,
      //    _Configuration.GetValue<string>("ValidationServiceConnectorToken")
      //  ).AccessTokenValidator;
      //}
      //else {
      //  DefaultAccessTokenValidator.Instance = new RulesetBasedAccessTokenValidator(validateTokensVia);
      //}

      if (_Configuration.GetValue<bool>("EnableSwaggerUi")) {
        var baseUrl = _Configuration.GetValue<string>("BaseUrl");

        app.UseSwagger(o => {
          //warning: needs subfolder! jsons cant be within same dir as swaggerui (below)
          o.RouteTemplate = "docs/schema/{documentName}.swagger.{json|yaml}";
          //o.SerializeAsV2 = true;
        });

        app.UseSwaggerUI(c => {

          c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.List);
          c.DefaultModelExpandDepth(2);
          c.DefaultModelsExpandDepth(2);
          //c.ConfigObject.DefaultModelExpandDepth = 2;

          c.DocumentTitle = _ApiTitle + " - OpenAPI Definition(s)";

          //represents the sorting in SwaggerUI combo-box
          c.SwaggerEndpoint($"schema/ApiV{_ApiVersion.ToString(1)}.swagger.json", $"{_ApiTitle}-API v{_ApiVersion.ToString(3)}");

          c.RoutePrefix = "docs";

          //requires MVC app.UseStaticFiles();
          c.InjectStylesheet(baseUrl + "swagger-ui/custom.css");

        });

      }

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints => {
        endpoints.MapControllers();
      });

    }
  }

}
