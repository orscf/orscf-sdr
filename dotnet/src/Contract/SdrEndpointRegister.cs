using System;

namespace MedicalResearch.SubjectData {

  /// <summary>
  /// Provides convenience for bulk-registering controllers for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class SdrEndpointRegister {

    /// <summary></summary>
    /// <param name="contractType"></param>
    /// <param name="preferredRoute"> WITHOUT the version-prefix and WITHOUT leading or trailing slash!</param>
    public delegate void GetContractsPerEndpointCallback(Type contractType, string preferredRoute);

    public static void GetContractsPerEndpoint(GetContractsPerEndpointCallback callback) {

      callback.Invoke(typeof(StoreAccess.ISubjectStore), "store/Subject");
      callback.Invoke(typeof(StoreAccess.ISubjectSiteAssignmentStore), "store/SubjectSiteAssignment");

    }

  }

}
