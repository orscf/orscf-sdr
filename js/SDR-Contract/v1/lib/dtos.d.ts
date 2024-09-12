import * as Models from './models';
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionRequest {
}
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'SdrEventSubscription',
 * 'SubjectConsume',
 * 'SubjectSubmission',
 * 'SubjectHL7Export'
 * 'SubjectHL7Import'
 */
export declare class GetCapabilitiesRequest {
}
/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'SdrEventSubscription',
 * 'SubjectConsume',
 * 'SubjectSubmission',
 * 'SubjectHL7Export'
 * 'SubjectHL7Import'
 */
export declare class GetCapabilitiesResponse {
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:SubjectOverview") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesRequest {
}
/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:SubjectOverview") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesResponse {
    authState: number;
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlRequest {
}
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export declare class SubscribeForChangedSubjectsRequest {
    subscriberUrl: string;
    filter?: Models.SubjectFilter;
}
/**
 * Contains results from calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
export declare class SubscribeForChangedSubjectsResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class NoticeChangedSubjectsRequest {
    eventUid: string;
    eventSignature: string;
    subscriptionUid: string;
    publisherUrl: string;
    createdRecords: Models.SubjectMetaRecord[];
    modifiedRecords: Models.SubjectMetaRecord[];
    archivedRecords: Models.SubjectMetaRecord[];
}
/**
 * Contains results from calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class NoticeChangedSubjectsResponse {
    terminateSubscription: boolean;
    fault?: string;
}
/**
 * Contains arguments for calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class ConfirmAsSubscriberRequest {
    publisherUrl: string;
    subscriptionUid: string;
}
/**
 * Contains results from calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
export declare class ConfirmAsSubscriberResponse {
    secret: string;
    fault?: string;
}
/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export declare class TerminateSubscriptionRequest {
    subscriptionUid: string;
    secret: string;
}
/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
export declare class TerminateSubscriptionResponse {
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export declare class GetSubsriptionsBySubscriberUrlRequest {
    subscriberUrl: string;
    secret: string;
}
/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
export declare class GetSubsriptionsBySubscriberUrlResponse {
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
export declare class SearchSubjectsRequest {
    sortingField?: string;
    sortDescending?: boolean;
    filter?: Models.SubjectFilter;
    includeArchivedRecords?: boolean;
    limitResults?: number;
}
/**
 * Contains results from calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
export declare class SearchSubjectsResponse {
    result: Models.SubjectMetaRecord[];
    fault?: string;
}
/**
 * Contains arguments for calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export declare class SearchChangedSubjectsRequest {
    minTimestampUtc: number;
    filter?: Models.SubjectFilter;
}
/**
 * Contains results from calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
export declare class SearchChangedSubjectsResponse {
    latestTimestampUtc: number;
    createdRecords: Models.SubjectMetaRecord[];
    modifiedRecords: Models.SubjectMetaRecord[];
    archivedRecords: Models.SubjectMetaRecord[];
    fault?: string;
}
/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForSubject'.
 */
export declare class GetCustomFieldDescriptorsForSubjectRequest {
    languagePref?: string;
}
/**
 * Contains results from calling 'GetCustomFieldDescriptorsForSubject'.
 */
export declare class GetCustomFieldDescriptorsForSubjectResponse {
    fault?: string;
    return: Models.CustomFieldDescriptor[];
}
/**
 * Contains arguments for calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
export declare class CheckSubjectExisitenceRequest {
    subjectUids: string[];
}
/**
 * Contains results from calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
export declare class CheckSubjectExisitenceResponse {
    unavailableSubjectUids: string[];
    availableSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export declare class GetSubjectFieldsRequest {
    subjectUids: string[];
}
/**
 * Contains results from calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
export declare class GetSubjectFieldsResponse {
    unavailableSubjectUids: string[];
    result: Models.SubjectFields[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
export declare class ExportSubjectsRequest {
    subjectUids: string[];
}
/**
 * Contains results from calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
export declare class ExportSubjectsResponse {
    unavailableSubjectUids: string[];
    result: Models.SubjectStructure[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ExportSubjectFhirRessourcesRequest {
    subjectUid: string;
}
/**
 * Contains results from calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ExportSubjectFhirRessourcesResponse {
    subjectFhirRessources: Models.SubjectFhirRessourceContainer[];
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ImportSubjectFhirRessourcesRequest {
    subjectFhirRessources: Models.SubjectFhirRessourceContainer[];
}
/**
 * Contains results from calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
export declare class ImportSubjectFhirRessourcesResponse {
    createdSubjectUids: string[];
    updatedSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ArchiveSubjects'.
 */
export declare class ArchiveSubjectsRequest {
    subjectUids: string[];
}
/**
 * Contains results from calling 'ArchiveSubjects'.
 */
export declare class ArchiveSubjectsResponse {
    archivedSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'UnarchiveSubjects'.
 */
export declare class UnarchiveSubjectsRequest {
    subjectUids: string[];
}
/**
 * Contains results from calling 'UnarchiveSubjects'.
 */
export declare class UnarchiveSubjectsResponse {
    unarchivedSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ApplySubjectMutations'.
 */
export declare class ApplySubjectMutationsRequest {
    mutationsBySubjecttUid: Object;
}
/**
 * Contains results from calling 'ApplySubjectMutations'.
 */
export declare class ApplySubjectMutationsResponse {
    updatedSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ApplySubjectBatchMutation'.
 */
export declare class ApplySubjectBatchMutationRequest {
    subjectUids: string[];
    mutation: Models.BatchableSubjectMutation;
}
/**
 * Contains results from calling 'ApplySubjectBatchMutation'.
 */
export declare class ApplySubjectBatchMutationResponse {
    updatedSubjectUids: string[];
    fault?: string;
}
/**
 * Contains arguments for calling 'ImportSubjects'.
 */
export declare class ImportSubjectsRequest {
    subjects: Models.SubjectStructure[];
}
/**
 * Contains results from calling 'ImportSubjects'.
 */
export declare class ImportSubjectsResponse {
    createdSubjectUids: string[];
    updatedSubjectUids: string[];
    fault?: string;
}
//# sourceMappingURL=dtos.d.ts.map