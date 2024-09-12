export declare class SubjectFilter {
    studyUid?: string;
    siteUid?: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier?: string;
    /**
     * AS DECLARED BY [HL7.ResearchSubjectStatus](https://www.hl7.org/fhir/valueset-research-subject-status.html): candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    status?: string;
    minPeriodStart?: Date;
    maxPeriodStart?: Date;
    minPeriodEnd?: Date;
    maxPeriodEnd?: Date;
    assignedArm?: string;
    actualArm?: string;
    substudyName?: string;
    /**
     * This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient!
     */
    actualSiteDefinedPatientIdentifier?: string;
    /**
     * Custom fields as defined by the Service. Call 'GetCustomFieldDescriptors' to get information about supported/required fields. Any passed values for undefined fields will be ignored.
     */
    customFields?: Object;
}
export declare class SubjectMetaRecord {
    /**
     * An [Universally Unique Identifier](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    subjectUid: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier: string;
    studyUid: string;
    actualSiteUid: string;
    /**
     * This is an internal managed field, which is related to the state of records dedicated to the database. It will be automatically set when a record is archived. A mapping during data import requires opt-in.
     */
    isArchived: boolean;
    /**
     * This is an internal managed field (UNIX-Timestamp), which is related to the state of records dedicated to the database. It will be automatically set to the current time when a record is created, updated, archived or unarchived, but cannot be updated from outside and must not be mapped during data imports.
     */
    modificationTimestampUtc: number;
}
export declare class CustomFieldDescriptor {
    technicalName: string;
    isRequired: boolean;
    displayLabel: string;
    inputDescription?: string;
    defaultValue?: string;
    presets?: string[];
    presetsOnly?: boolean;
    regularExpression?: string;
}
export declare class SubjectFields extends SubjectMetaRecord {
    enrollingSiteUid: string;
    /**
     * AS DECLARED BY [HL7.ResearchSubjectStatus](https://www.hl7.org/fhir/valueset-research-subject-status.html): candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    status: string;
    /**
     * a note (manually written text) which provides some additional information about the reason why one transitioned to the current status
     */
    statusNote?: string;
    periodStart?: Date;
    periodEnd?: Date;
    assignedArm?: string;
    actualArm?: string;
    substudyNames?: string[];
    /**
     * This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient!
     */
    actualSiteDefinedPatientIdentifier?: string;
    /**
     * Custom fields as defined by the Service. Call 'GetCustomFieldDescriptors' to get information about supported/required fields. Any passed values for undefined fields will be ignored.
     */
    customFields?: Object;
    /**
     * An [Universally Unique Identifier](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    subjectUid: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier: string;
    studyUid: string;
    actualSiteUid: string;
    /**
     * This is an internal managed field, which is related to the state of records dedicated to the database. It will be automatically set when a record is archived. A mapping during data import requires opt-in.
     */
    isArchived: boolean;
    /**
     * This is an internal managed field (UNIX-Timestamp), which is related to the state of records dedicated to the database. It will be automatically set to the current time when a record is created, updated, archived or unarchived, but cannot be updated from outside and must not be mapped during data imports.
     */
    modificationTimestampUtc: number;
}
export declare class SubjectStructure extends SubjectFields {
    enrollingSiteUid: string;
    /**
     * AS DECLARED BY [HL7.ResearchSubjectStatus](https://www.hl7.org/fhir/valueset-research-subject-status.html): candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    status: string;
    /**
     * a note (manually written text) which provides some additional information about the reason why one transitioned to the current status
     */
    statusNote?: string;
    periodStart?: Date;
    periodEnd?: Date;
    assignedArm?: string;
    actualArm?: string;
    substudyNames?: string[];
    /**
     * This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient!
     */
    actualSiteDefinedPatientIdentifier?: string;
    /**
     * Custom fields as defined by the Service. Call 'GetCustomFieldDescriptors' to get information about supported/required fields. Any passed values for undefined fields will be ignored.
     */
    customFields?: Object;
    /**
     * An [Universally Unique Identifier](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    subjectUid: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier: string;
    studyUid: string;
    actualSiteUid: string;
    /**
     * This is an internal managed field, which is related to the state of records dedicated to the database. It will be automatically set when a record is archived. A mapping during data import requires opt-in.
     */
    isArchived: boolean;
    /**
     * This is an internal managed field (UNIX-Timestamp), which is related to the state of records dedicated to the database. It will be automatically set to the current time when a record is created, updated, archived or unarchived, but cannot be updated from outside and must not be mapped during data imports.
     */
    modificationTimestampUtc: number;
}
/**
 * A structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
 */
export declare class SubjectFhirRessourceContainer extends SubjectMetaRecord {
    /**
     * a HL7 ['ResearchSubject'](https://www.hl7.org/fhir/researchsubject.html) resource in json format
     */
    researchSubjectRessource?: Object;
    /**
     * An [Universally Unique Identifier](https://de.wikipedia.org/wiki/Universally_Unique_Identifier) which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!
     */
    subjectUid: string;
    /**
     * identity of the patient which is usually a pseudonym from a corr. 'IdentiyManagementSystem' (the exact semantic is defined per study) *this field has a max length of 100
     */
    subjectIdentifier: string;
    studyUid: string;
    actualSiteUid: string;
    /**
     * This is an internal managed field, which is related to the state of records dedicated to the database. It will be automatically set when a record is archived. A mapping during data import requires opt-in.
     */
    isArchived: boolean;
    /**
     * This is an internal managed field (UNIX-Timestamp), which is related to the state of records dedicated to the database. It will be automatically set to the current time when a record is created, updated, archived or unarchived, but cannot be updated from outside and must not be mapped during data imports.
     */
    modificationTimestampUtc: number;
}
export declare class BatchableSubjectMutation {
    /**
     * AS DECLARED BY [HL7.ResearchSubjectStatus](https://www.hl7.org/fhir/valueset-research-subject-status.html): candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    status?: string;
    assignedArm?: string;
    actualArm?: string;
    periodStart?: Date;
    periodEnd?: Date;
    /**
     * Custom fields as defined by the Service. Call 'GetCustomFieldDescriptors' to get information about supported/required fields. Any passed values for undefined fields will be ignored.
     */
    customFields?: Object;
}
export declare class SubjectMutation extends BatchableSubjectMutation {
    /**
     * a note (manually written text) which provides some additional information about the reason why one transitioned to the current status
     */
    statusNote?: string;
    substudyNames?: string[];
    /**
     * This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient!
     */
    actualSiteDefinedPatientIdentifier?: string;
    /**
     * AS DECLARED BY [HL7.ResearchSubjectStatus](https://www.hl7.org/fhir/valueset-research-subject-status.html): candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
     */
    status?: string;
    assignedArm?: string;
    actualArm?: string;
    periodStart?: Date;
    periodEnd?: Date;
    /**
     * Custom fields as defined by the Service. Call 'GetCustomFieldDescriptors' to get information about supported/required fields. Any passed values for undefined fields will be ignored.
     */
    customFields?: Object;
}
//# sourceMappingURL=models.d.ts.map