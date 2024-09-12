import * as Models from 'orscf-subjectdata-contract/models';
/**
 * Provides interoperability information for the current implementation
 */
export declare class SdrApiInfoClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion(): Promise<string>;
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'SdrEventSubscription', 'SubjectConsume', 'SubjectSubmission', 'SubjectHL7Export' 'SubjectHL7Import'
     */
    getCapabilities(): Promise<string[]>;
    /**
     * returns a list of available capabilities ("API:SubjectOverview") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes(): Promise<{
        authState: number;
        return: string[];
    }>;
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl(): Promise<string>;
}
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export declare class SdrEventSubscriptionClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Creates a subscription for changes which are affecting Subjects. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedSubjects' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
     */
    subscribeForChangedSubjects(subscriberUrl: string, filter: Models.SubjectFilter): Promise<string>;
    /**
     * Receives notifications about changes which are affecting Subjects. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    noticeChangedSubjects(eventUid: string, eventSignature: string, subscriptionUid: string, publisherUrl: string, createdRecords: Models.SubjectMetaRecord[], modifiedRecords: Models.SubjectMetaRecord[], archivedRecords: Models.SubjectMetaRecord[]): Promise<{
        terminateSubscription: boolean;
    }>;
    /**
     * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    confirmAsSubscriber(publisherUrl: string, subscriptionUid: string): Promise<{
        secret: string;
    }>;
    /**
     * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
     */
    terminateSubscription(subscriptionUid: string, secret: string): Promise<boolean>;
    /**
     * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
     */
    getSubsriptionsBySubscriberUrl(subscriberUrl: string, secret: string): Promise<string[]>;
}
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export declare class SubjectConsumeClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Searches Subjects by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of SubjectUids for the matching records.
     */
    searchSubjects(sortingField: string, sortDescending: boolean | undefined, filter: Models.SubjectFilter, includeArchivedRecords?: boolean, limitResults?: number): Promise<{
        result: Models.SubjectMetaRecord[];
    }>;
    /**
     * Searches Subjects which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
     */
    searchChangedSubjects(minTimestampUtc: number, filter: Models.SubjectFilter): Promise<{
        latestTimestampUtc: number;
        createdRecords: Models.SubjectMetaRecord[];
        modifiedRecords: Models.SubjectMetaRecord[];
        archivedRecords: Models.SubjectMetaRecord[];
    }>;
    /**
     * GetCustomFieldDescriptorsForSubject
     */
    getCustomFieldDescriptorsForSubject(languagePref?: string): Promise<Models.CustomFieldDescriptor[]>;
    /**
     * Checks the existence of 'Subjects' for a given list of subjectUids
     */
    checkSubjectExisitence(subjectUids: string[]): Promise<{
        unavailableSubjectUids: string[];
        availableSubjectUids: string[];
    }>;
    /**
     * loads the requested Subjects and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
     */
    getSubjectFields(subjectUids: string[]): Promise<{
        unavailableSubjectUids: string[];
        result: Models.SubjectFields[];
    }>;
    /**
     * exports full 'SubjectStructures'
     */
    exportSubjects(subjectUids: string[]): Promise<{
        unavailableSubjectUids: string[];
        result: Models.SubjectStructure[];
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export declare class SubjectHL7ExportClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    exportSubjectFhirRessources(subjectUid: string): Promise<{
        subjectFhirRessources: Models.SubjectFhirRessourceContainer[];
        return: boolean;
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export declare class SubjectHL7ImportClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    importSubjectFhirRessources(subjectFhirRessources: Models.SubjectFhirRessourceContainer[]): Promise<{
        createdSubjectUids: string[];
        updatedSubjectUids: string[];
    }>;
}
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
export declare class SubjectSubmissionClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * ArchiveSubjects
     */
    archiveSubjects(subjectUids: string[]): Promise<{
        archivedSubjectUids: string[];
    }>;
    /**
     * UnarchiveSubjects
     */
    unarchiveSubjects(subjectUids: string[]): Promise<{
        unarchivedSubjectUids: string[];
    }>;
    /**
     * ApplySubjectMutations
     */
    applySubjectMutations(mutationsBySubjecttUid: Object): Promise<{
        updatedSubjectUids: string[];
    }>;
    /**
     * ApplySubjectBatchMutation
     */
    applySubjectBatchMutation(subjectUids: string[], mutation: Models.BatchableSubjectMutation): Promise<{
        updatedSubjectUids: string[];
    }>;
    /**
     * ImportSubjects
     */
    importSubjects(subjects: Models.SubjectStructure[]): Promise<{
        createdSubjectUids: string[];
        updatedSubjectUids: string[];
    }>;
}
export declare class SdrConnector {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    private sdrApiInfoClient;
    private sdrEventSubscriptionClient;
    private subjectConsumeClient;
    private subjectHL7ExportClient;
    private subjectHL7ImportClient;
    private subjectSubmissionClient;
    private axiosHttpApi?;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getRootUrl;
    /**
     * Provides interoperability information for the current implementation
     */
    get sdrApiInfo(): SdrApiInfoClient;
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get sdrEventSubscription(): SdrEventSubscriptionClient;
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectConsume(): SubjectConsumeClient;
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectHL7Export(): SubjectHL7ExportClient;
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectHL7Import(): SubjectHL7ImportClient;
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectSubmission(): SubjectSubmissionClient;
}
//# sourceMappingURL=connector.d.ts.map