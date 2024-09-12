using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;
using System.Linq.Expressions;
using MedicalResearch.SubjectData.Model;

namespace MedicalResearch.SubjectData.Persistence {

/// <summary> entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see> </summary>
public class SubjectEntity {

  /// <summary> An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more! </summary>
  [Required]
  public Guid SubjectUid { get; set; } = Guid.NewGuid();

  [Required]
  public Guid ActualSiteUid { get; set; }

  [FixedAfterCreation, Required]
  public Guid EnrollingSiteUid { get; set; }

  /// <summary> *this field is optional </summary>
  public Nullable<DateTime> PeriodStart { get; set; }

  /// <summary> *this field is optional </summary>
  public Nullable<DateTime> PeriodEnd { get; set; }

  /// <summary> *this field is optional (use null as value) </summary>
  public String StatusNote { get; set; }

  /// <summary> *this field is optional (use null as value) </summary>
  public String SubjectIdentifier { get; set; }

  /// <summary> AS DECLARED BY <see href="https://www.hl7.org/fhir/valueset-research-subject-status.html">HL7.ResearchSubjectStatus</see>:
  /// candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn </summary>
  [Required]
  public String Status { get; set; }

  [Required]
  public Guid StudyUid { get; set; }

  [Required]
  public Int64 ModificationTimestampUtc { get; set; }

  [Required]
  public Boolean IsArchived { get; set; }

  [Required]
  public String AssignedArm { get; set; }

  [Required]
  public String ActualArm { get; set; }

  [Required]
  public String SubstudyNames { get; set; }

  [Referer]
  public virtual ObservableCollection<SubjectSiteAssignmentEntity> SiteAssignments { get; set; } = new ObservableCollection<SubjectSiteAssignmentEntity>();

}

public class SubjectSiteAssignmentEntity {

  /// <summary> An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more! </summary>
  [Required]
  public Guid SubjectSiteAssignmentUid { get; set; } = Guid.NewGuid();

  [Required]
  public DateTime ValidFrom { get; set; }

  /// <summary> <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Site </summary>
  [Required]
  public Guid SiteUid { get; set; }

  /// <summary> <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Subject </summary>
  [Required]
  public Guid SubjectUid { get; set; }

  /// <summary> This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient! *this field is optional (use null as value) </summary>
  public String SiteDefinedPatientIdentifier { get; set; }

  /// <summary> *this field is optional </summary>
  public Nullable<Guid> ByInvolvedPersonUid { get; set; }

  [Lookup]
  public virtual SubjectEntity Subject { get; set; }

}

}