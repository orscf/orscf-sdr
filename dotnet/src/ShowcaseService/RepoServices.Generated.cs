using MedicalResearch.SubjectData.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;
using System.Data.Fuse.Ef.InstanceManagement;

namespace MedicalResearch.SubjectData.StoreAccess {

  /// <summary> Provides CRUD access to stored Subjects (based on schema version '0.1.0') </summary>
  public class SubjectStore : ModelVsEntityRepository<Subject, MedicalResearch.SubjectData.Persistence.SubjectEntity, Guid>, ISubjectStore {

    private static EfRepository<MedicalResearch.SubjectData.Persistence.SubjectEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.SubjectData.Persistence.EF.SubjectDataDbContext();
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.SubjectData.Persistence.EF.SubjectDataDbContext
      >();
      return new EfRepository<
        MedicalResearch.SubjectData.Persistence.SubjectEntity, Guid
      >(dbContextInstanceProvider);
    }

    public SubjectStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<Subject, MedicalResearch.SubjectData.Persistence.SubjectEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectSiteAssignments (based on schema version '0.1.0') </summary>
  public class SubjectSiteAssignmentStore : ModelVsEntityRepository<SubjectSiteAssignment, MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity, Guid>, ISubjectSiteAssignmentStore {

    private static EfRepository<MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.SubjectData.Persistence.EF.SubjectDataDbContext();
      return new EfRepository<MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity, Guid>(context);
    }

    public SubjectSiteAssignmentStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectSiteAssignment, MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity>()
    ) {
    }

  }

}
