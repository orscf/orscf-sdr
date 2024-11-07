using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;
using System.Collections.Generic;

namespace MedicalResearch.SubjectData.Model {

  [PrimaryIdentity(nameof(SubjectUid))]
  [PropertyGroup(nameof(SubjectUid), nameof(SubjectUid))]
  [PropertyGroup(nameof(ActualSiteUid), nameof(ActualSiteUid))]
  [HasLookup("", nameof(ActualSiteUid), "", null, "Site")]
  [PropertyGroup(nameof(EnrollingSiteUid), nameof(EnrollingSiteUid))]
  [HasLookup("", nameof(EnrollingSiteUid), "", null, "Site")]
  [PropertyGroup(nameof(StudyUid), nameof(StudyUid))]
  [HasLookup("", nameof(StudyUid), "", null, "ResearchStudy")]
  [PropertyGroup("Search", nameof(SubjectIdentifier), nameof(StatusNote))]
  public partial class Subject {

  }

  [PrimaryIdentity(nameof(SubjectSiteAssignmentUid))]
  [PropertyGroup(nameof(SubjectSiteAssignmentUid), nameof(SubjectSiteAssignmentUid))]
  [PropertyGroup(nameof(SiteUid), nameof(SiteUid))]
  [HasLookup("", nameof(SiteUid), "", null, "Site")]
  [PropertyGroup(nameof(SubjectUid), nameof(SubjectUid))]
  [HasPrincipal("", nameof(SubjectUid), "", null, nameof(Subject))]
  public partial class SubjectSiteAssignment {

  }

}