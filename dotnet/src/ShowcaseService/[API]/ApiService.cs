using System;
using System.Security;
using System.Data.AccessControl;
using System.Linq;
using MedicalResearch.SubjectData.StoreAccess;

namespace MedicalResearch.SubjectData {

  public partial class ApiService : ISdrApiInfoService {

    private static Version _Version = Version.Parse(ApiVersion.SemanticVersion);
    private string _OAuthTokenRequestUrl = "";

    public ApiService(string oAuthTokenRequestUrl, string publicServiceUrl, string subscriptionStorageDirectory) {
      _OAuthTokenRequestUrl = oAuthTokenRequestUrl;
      //_SubscriptionManager = new SubscriptionManager(publicServiceUrl, subscriptionStorageDirectory);
    }

    public string GetApiVersion() {
      return _Version.ToString(3);
    }

    public string[] GetCapabilities() {
      return new string[] {
        SdrCapabilities.SdrStoreAccess
      };
    }

    public string GetOAuthTokenRequestUrl() {
      return _OAuthTokenRequestUrl;
    }

    public string[] GetPermittedAuthScopes(out int authState) {
      //var mac = AccessControlContext.Current;

      //string[] scopes = mac.EffectivePermissions.Select(p => "API:" + p).Union(mac.ExportClearences()).ToArray();
      //authState = mac.AuthStateCode;

      //return scopes;

      authState = 0;
      return new string[] { };
    }

  }

}
