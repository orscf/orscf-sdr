using MedicalResearch.SubjectData.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;

namespace MedicalResearch.SubjectData.StoreAccess {

  /// <summary> Provides CRUD access to stored Subjects (based on schema version '0.1.0') </summary>
  public partial interface ISubjectStore : System.Data.Fuse.IRepository<Subject, Guid> {
  }

  /// <summary> Provides CRUD access to stored SubjectSiteAssignments (based on schema version '0.1.0') </summary>
  public partial interface ISubjectSiteAssignmentStore : System.Data.Fuse.IRepository<SubjectSiteAssignment, Guid> {
  }

}
