using System;

namespace MedicalResearch.SubjectData {

  /// <summary>
  /// Provides convenience for bulk-registering factories for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class SdrShowcaseEndpointFactory {

    public delegate void GetFactoryMethodsPerEndpointCallback(Type contractType, Func<object> endpointFactory);

    public static void GetFactoryMethodsPerEndpoint(GetFactoryMethodsPerEndpointCallback callback) {

      callback.Invoke(typeof(StoreAccess.ISubjectStore), () => new StoreAccess.SubjectStore());
      callback.Invoke(typeof(StoreAccess.ISubjectSiteAssignmentStore), () => new StoreAccess.SubjectSiteAssignmentStore());

    }

  }

}