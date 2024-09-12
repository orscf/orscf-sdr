"use strict";
/* based on ORSCF SubjectData Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportSubjectsResponse = exports.ImportSubjectsRequest = exports.ApplySubjectBatchMutationResponse = exports.ApplySubjectBatchMutationRequest = exports.ApplySubjectMutationsResponse = exports.ApplySubjectMutationsRequest = exports.UnarchiveSubjectsResponse = exports.UnarchiveSubjectsRequest = exports.ArchiveSubjectsResponse = exports.ArchiveSubjectsRequest = exports.ImportSubjectFhirRessourcesResponse = exports.ImportSubjectFhirRessourcesRequest = exports.ExportSubjectFhirRessourcesResponse = exports.ExportSubjectFhirRessourcesRequest = exports.ExportSubjectsResponse = exports.ExportSubjectsRequest = exports.GetSubjectFieldsResponse = exports.GetSubjectFieldsRequest = exports.CheckSubjectExisitenceResponse = exports.CheckSubjectExisitenceRequest = exports.GetCustomFieldDescriptorsForSubjectResponse = exports.GetCustomFieldDescriptorsForSubjectRequest = exports.SearchChangedSubjectsResponse = exports.SearchChangedSubjectsRequest = exports.SearchSubjectsResponse = exports.SearchSubjectsRequest = exports.GetSubsriptionsBySubscriberUrlResponse = exports.GetSubsriptionsBySubscriberUrlRequest = exports.TerminateSubscriptionResponse = exports.TerminateSubscriptionRequest = exports.ConfirmAsSubscriberResponse = exports.ConfirmAsSubscriberRequest = exports.NoticeChangedSubjectsResponse = exports.NoticeChangedSubjectsRequest = exports.SubscribeForChangedSubjectsResponse = exports.SubscribeForChangedSubjectsRequest = exports.GetOAuthTokenRequestUrlResponse = exports.GetOAuthTokenRequestUrlRequest = exports.GetPermittedAuthScopesResponse = exports.GetPermittedAuthScopesRequest = exports.GetCapabilitiesResponse = exports.GetCapabilitiesRequest = exports.GetApiVersionResponse = exports.GetApiVersionRequest = void 0;
var Models = require("./models");
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionRequest = /** @class */ (function () {
    function GetApiVersionRequest() {
    }
    return GetApiVersionRequest;
}());
exports.GetApiVersionRequest = GetApiVersionRequest;
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionResponse = /** @class */ (function () {
    function GetApiVersionResponse() {
        // Return-Value of 'GetApiVersion' (String)
        this.return = '';
    }
    return GetApiVersionResponse;
}());
exports.GetApiVersionResponse = GetApiVersionResponse;
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
var GetCapabilitiesRequest = /** @class */ (function () {
    function GetCapabilitiesRequest() {
    }
    return GetCapabilitiesRequest;
}());
exports.GetCapabilitiesRequest = GetCapabilitiesRequest;
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
var GetCapabilitiesResponse = /** @class */ (function () {
    function GetCapabilitiesResponse() {
        // Return-Value of 'GetCapabilities' (String[])
        this.return = [];
    }
    return GetCapabilitiesResponse;
}());
exports.GetCapabilitiesResponse = GetCapabilitiesResponse;
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
var GetPermittedAuthScopesRequest = /** @class */ (function () {
    function GetPermittedAuthScopesRequest() {
    }
    return GetPermittedAuthScopesRequest;
}());
exports.GetPermittedAuthScopesRequest = GetPermittedAuthScopesRequest;
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
var GetPermittedAuthScopesResponse = /** @class */ (function () {
    function GetPermittedAuthScopesResponse() {
        // Out-Argument of 'GetPermittedAuthScopes' (number)
        this.authState = 0;
        // Return-Value of 'GetPermittedAuthScopes' (String[])
        this.return = [];
    }
    return GetPermittedAuthScopesResponse;
}());
exports.GetPermittedAuthScopesResponse = GetPermittedAuthScopesResponse;
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlRequest = /** @class */ (function () {
    function GetOAuthTokenRequestUrlRequest() {
    }
    return GetOAuthTokenRequestUrlRequest;
}());
exports.GetOAuthTokenRequestUrlRequest = GetOAuthTokenRequestUrlRequest;
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlResponse = /** @class */ (function () {
    function GetOAuthTokenRequestUrlResponse() {
        // Return-Value of 'GetOAuthTokenRequestUrl' (String)
        this.return = '';
    }
    return GetOAuthTokenRequestUrlResponse;
}());
exports.GetOAuthTokenRequestUrlResponse = GetOAuthTokenRequestUrlResponse;
/**
 * Contains arguments for calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
var SubscribeForChangedSubjectsRequest = /** @class */ (function () {
    function SubscribeForChangedSubjectsRequest() {
        // Required Argument for 'SubscribeForChangedSubjects' (string): the root-url of the subscriber which needs to provide at least the methods '/ConfirmAsSubscriber' and '/NoticeChangedSubjects'
        this.subscriberUrl = '';
    }
    return SubscribeForChangedSubjectsRequest;
}());
exports.SubscribeForChangedSubjectsRequest = SubscribeForChangedSubjectsRequest;
/**
 * Contains results from calling 'SubscribeForChangedSubjects'.
 * Method: Creates a subscription for changes which are affecting Subjects.
 * On success, a 'SubscriptionUid' will be returned and a call will be made to the given
 * subscriberUrl + '/ConfirmAsSubscriber'. After the subscription
 * has been confirmed, the requested events will be pushed to
 * subscriberUrl + '/NoticeChangedSubjects'
 * (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
 */
var SubscribeForChangedSubjectsResponse = /** @class */ (function () {
    function SubscribeForChangedSubjectsResponse() {
        // Return-Value of 'SubscribeForChangedSubjects' (Guid)
        this.return = '';
    }
    return SubscribeForChangedSubjectsResponse;
}());
exports.SubscribeForChangedSubjectsResponse = SubscribeForChangedSubjectsResponse;
/**
 * Contains arguments for calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var NoticeChangedSubjectsRequest = /** @class */ (function () {
    function NoticeChangedSubjectsRequest() {
        // Required Argument for 'NoticeChangedSubjects' (string): a UUID which identifies the current event message
        this.eventUid = '';
        // Required Argument for 'NoticeChangedSubjects' (string): a SHA256 Hash of SubscriptionSecret + EventUid (in lower string representation, without '-' characters!) Sample: SHA256('ThEs3Cr3T'+'c997dfb1c445fea84afe995307713b59') = 'a320ef5b0f563e8dcb16d759961739977afc98b90628d9dc3be519fb20701490'
        this.eventSignature = '';
        // Required Argument for 'NoticeChangedSubjects' (string): a UUID which identifies the subscription for which this event is published
        this.subscriptionUid = '';
        // Required Argument for 'NoticeChangedSubjects' (string): root-URL of the VDR-Service which is publishing this event
        this.publisherUrl = '';
        // Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per changed record
        this.createdRecords = [];
        // Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per modified record
        this.modifiedRecords = [];
        // Required Argument for 'NoticeChangedSubjects' (Models.SubjectMetaRecord[]): an array, which contains one element per archived record
        this.archivedRecords = [];
    }
    return NoticeChangedSubjectsRequest;
}());
exports.NoticeChangedSubjectsRequest = NoticeChangedSubjectsRequest;
/**
 * Contains results from calling 'NoticeChangedSubjects'.
 * Method: Receives notifications about changes which are affecting Subjects.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var NoticeChangedSubjectsResponse = /** @class */ (function () {
    function NoticeChangedSubjectsResponse() {
        // Out-Argument of 'NoticeChangedSubjects' (boolean): an array, which contains one element per changed record
        this.terminateSubscription = false;
    }
    return NoticeChangedSubjectsResponse;
}());
exports.NoticeChangedSubjectsResponse = NoticeChangedSubjectsResponse;
/**
 * Contains arguments for calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var ConfirmAsSubscriberRequest = /** @class */ (function () {
    function ConfirmAsSubscriberRequest() {
        // Required Argument for 'ConfirmAsSubscriber' (string): root-URL of the VDR-Service on which the subscription was requested
        this.publisherUrl = '';
        // Required Argument for 'ConfirmAsSubscriber' (string): the Uid of the subscription which should be confirmed
        this.subscriptionUid = '';
    }
    return ConfirmAsSubscriberRequest;
}());
exports.ConfirmAsSubscriberRequest = ConfirmAsSubscriberRequest;
/**
 * Contains results from calling 'ConfirmAsSubscriber'.
 * Method: Confirms a Subscription.
 * IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber!
 * So this can be called by an foreign service during the setup of a subscription, which was previously
 * requested from here.
 * The opposite case: any client subscribing to events from here,
 * must provide its own http endpoint that has such a method!
 */
var ConfirmAsSubscriberResponse = /** @class */ (function () {
    function ConfirmAsSubscriberResponse() {
        // Out-Argument of 'ConfirmAsSubscriber' (string): A secret which is generated by the subscriber and used to provide additional security. It will be required for the 'TerminateSubscription' method and it is used to generate SHA256 hashes for signing the delivered event messages. The secret should: have a minimum length of 32 characters. A null or empty string has the semantics that the subscriber refuses to confirm and cancels the subscription setup.
        this.secret = '';
    }
    return ConfirmAsSubscriberResponse;
}());
exports.ConfirmAsSubscriberResponse = ConfirmAsSubscriberResponse;
/**
 * Contains arguments for calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
var TerminateSubscriptionRequest = /** @class */ (function () {
    function TerminateSubscriptionRequest() {
        // Required Argument for 'TerminateSubscription' (string): the Uid of the subscription which should be terminated
        this.subscriptionUid = '';
        // Required Argument for 'TerminateSubscription' (string): the (same) secret, which was given by the subscriber during the subscription setup
        this.secret = '';
    }
    return TerminateSubscriptionRequest;
}());
exports.TerminateSubscriptionRequest = TerminateSubscriptionRequest;
/**
 * Contains results from calling 'TerminateSubscription'.
 * Method: Terminates a subscription (on publisher side) and returns a boolean,
 * which indicates success.
 */
var TerminateSubscriptionResponse = /** @class */ (function () {
    function TerminateSubscriptionResponse() {
        // Return-Value of 'TerminateSubscription' (Boolean)
        this.return = false;
    }
    return TerminateSubscriptionResponse;
}());
exports.TerminateSubscriptionResponse = TerminateSubscriptionResponse;
/**
 * Contains arguments for calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
var GetSubsriptionsBySubscriberUrlRequest = /** @class */ (function () {
    function GetSubsriptionsBySubscriberUrlRequest() {
        // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string)
        this.subscriberUrl = '';
        // Required Argument for 'GetSubsriptionsBySubscriberUrl' (string): the (same) secret, which was given by the subscriber during the subscription setup
        this.secret = '';
    }
    return GetSubsriptionsBySubscriberUrlRequest;
}());
exports.GetSubsriptionsBySubscriberUrlRequest = GetSubsriptionsBySubscriberUrlRequest;
/**
 * Contains results from calling 'GetSubsriptionsBySubscriberUrl'.
 * Method: Returns an array of subscriptionUid's.
 * This method helps subscribers to evaluate whether current subscriptions are still active.
 */
var GetSubsriptionsBySubscriberUrlResponse = /** @class */ (function () {
    function GetSubsriptionsBySubscriberUrlResponse() {
        // Return-Value of 'GetSubsriptionsBySubscriberUrl' (Guid[])
        this.return = [];
    }
    return GetSubsriptionsBySubscriberUrlResponse;
}());
exports.GetSubsriptionsBySubscriberUrlResponse = GetSubsriptionsBySubscriberUrlResponse;
/**
 * Contains arguments for calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
var SearchSubjectsRequest = /** @class */ (function () {
    function SearchSubjectsRequest() {
    }
    return SearchSubjectsRequest;
}());
exports.SearchSubjectsRequest = SearchSubjectsRequest;
/**
 * Contains results from calling 'SearchSubjects'.
 * Method: Searches Subjects by a given 'filter' (if provided),
 * sorts the results by the given 'sortingField' (if provided) and
 * returns an array of SubjectUids for the matching records.
 */
var SearchSubjectsResponse = /** @class */ (function () {
    function SearchSubjectsResponse() {
        // Out-Argument of 'SearchSubjects' (Models.SubjectMetaRecord[])
        this.result = [];
    }
    return SearchSubjectsResponse;
}());
exports.SearchSubjectsResponse = SearchSubjectsResponse;
/**
 * Contains arguments for calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
var SearchChangedSubjectsRequest = /** @class */ (function () {
    function SearchChangedSubjectsRequest() {
        // Required Argument for 'SearchChangedSubjects' (number): start of the timespan to search (as UNIX-Timestamp)
        this.minTimestampUtc = 0;
    }
    return SearchChangedSubjectsRequest;
}());
exports.SearchChangedSubjectsRequest = SearchChangedSubjectsRequest;
/**
 * Contains results from calling 'SearchChangedSubjects'.
 * Method: Searches Subjects which have been modified after(or at) the given 'minTimestampUtc',
 * matching to the given 'filter' (if provided).
 * The result is sorted descenting by the timestamp of the modification (latest first) and will
 * include archived records.
 */
var SearchChangedSubjectsResponse = /** @class */ (function () {
    function SearchChangedSubjectsResponse() {
        // Out-Argument of 'SearchChangedSubjects' (number): the exact timestamp of the search (as UNIX-Timestamp)
        this.latestTimestampUtc = 0;
        // Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[])
        this.createdRecords = [];
        // Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[])
        this.modifiedRecords = [];
        // Out-Argument of 'SearchChangedSubjects' (Models.SubjectMetaRecord[])
        this.archivedRecords = [];
    }
    return SearchChangedSubjectsResponse;
}());
exports.SearchChangedSubjectsResponse = SearchChangedSubjectsResponse;
/**
 * Contains arguments for calling 'GetCustomFieldDescriptorsForSubject'.
 */
var GetCustomFieldDescriptorsForSubjectRequest = /** @class */ (function () {
    function GetCustomFieldDescriptorsForSubjectRequest() {
    }
    return GetCustomFieldDescriptorsForSubjectRequest;
}());
exports.GetCustomFieldDescriptorsForSubjectRequest = GetCustomFieldDescriptorsForSubjectRequest;
/**
 * Contains results from calling 'GetCustomFieldDescriptorsForSubject'.
 */
var GetCustomFieldDescriptorsForSubjectResponse = /** @class */ (function () {
    function GetCustomFieldDescriptorsForSubjectResponse() {
        // Return-Value of 'GetCustomFieldDescriptorsForSubject' (CustomFieldDescriptor[])
        this.return = [];
    }
    return GetCustomFieldDescriptorsForSubjectResponse;
}());
exports.GetCustomFieldDescriptorsForSubjectResponse = GetCustomFieldDescriptorsForSubjectResponse;
/**
 * Contains arguments for calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
var CheckSubjectExisitenceRequest = /** @class */ (function () {
    function CheckSubjectExisitenceRequest() {
        // Required Argument for 'CheckSubjectExisitence' (string[])
        this.subjectUids = [];
    }
    return CheckSubjectExisitenceRequest;
}());
exports.CheckSubjectExisitenceRequest = CheckSubjectExisitenceRequest;
/**
 * Contains results from calling 'CheckSubjectExisitence'.
 * Method: Checks the existence of 'Subjects' for a given list of subjectUids
 */
var CheckSubjectExisitenceResponse = /** @class */ (function () {
    function CheckSubjectExisitenceResponse() {
        // Out-Argument of 'CheckSubjectExisitence' (string[])
        this.unavailableSubjectUids = [];
        // Out-Argument of 'CheckSubjectExisitence' (string[])
        this.availableSubjectUids = [];
    }
    return CheckSubjectExisitenceResponse;
}());
exports.CheckSubjectExisitenceResponse = CheckSubjectExisitenceResponse;
/**
 * Contains arguments for calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
var GetSubjectFieldsRequest = /** @class */ (function () {
    function GetSubjectFieldsRequest() {
        // Required Argument for 'GetSubjectFields' (string[])
        this.subjectUids = [];
    }
    return GetSubjectFieldsRequest;
}());
exports.GetSubjectFieldsRequest = GetSubjectFieldsRequest;
/**
 * Contains results from calling 'GetSubjectFields'.
 * Method: loads the requested Subjects and returns lightweight json objects (without childs),
 * which are optimized to be displayed as table (the most common UI use case).
 * This models containig a combination of:
 * essential fieds from the record,
 * calculated fields (numbers of child records),
 * custom fields (choosen by the service)
 */
var GetSubjectFieldsResponse = /** @class */ (function () {
    function GetSubjectFieldsResponse() {
        // Out-Argument of 'GetSubjectFields' (string[])
        this.unavailableSubjectUids = [];
        // Out-Argument of 'GetSubjectFields' (Models.SubjectFields[])
        this.result = [];
    }
    return GetSubjectFieldsResponse;
}());
exports.GetSubjectFieldsResponse = GetSubjectFieldsResponse;
/**
 * Contains arguments for calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
var ExportSubjectsRequest = /** @class */ (function () {
    function ExportSubjectsRequest() {
        // Required Argument for 'ExportSubjects' (string[])
        this.subjectUids = [];
    }
    return ExportSubjectsRequest;
}());
exports.ExportSubjectsRequest = ExportSubjectsRequest;
/**
 * Contains results from calling 'ExportSubjects'.
 * Method: exports full 'SubjectStructures'
 */
var ExportSubjectsResponse = /** @class */ (function () {
    function ExportSubjectsResponse() {
        // Out-Argument of 'ExportSubjects' (string[])
        this.unavailableSubjectUids = [];
        // Out-Argument of 'ExportSubjects' (Models.SubjectStructure[])
        this.result = [];
    }
    return ExportSubjectsResponse;
}());
exports.ExportSubjectsResponse = ExportSubjectsResponse;
/**
 * Contains arguments for calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ExportSubjectFhirRessourcesRequest = /** @class */ (function () {
    function ExportSubjectFhirRessourcesRequest() {
        // Required Argument for 'ExportSubjectFhirRessources' (string)
        this.subjectUid = '';
    }
    return ExportSubjectFhirRessourcesRequest;
}());
exports.ExportSubjectFhirRessourcesRequest = ExportSubjectFhirRessourcesRequest;
/**
 * Contains results from calling 'ExportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ExportSubjectFhirRessourcesResponse = /** @class */ (function () {
    function ExportSubjectFhirRessourcesResponse() {
        // Out-Argument of 'ExportSubjectFhirRessources' (Models.SubjectFhirRessourceContainer[])
        this.subjectFhirRessources = [];
        // Return-Value of 'ExportSubjectFhirRessources' (Boolean)
        this.return = false;
    }
    return ExportSubjectFhirRessourcesResponse;
}());
exports.ExportSubjectFhirRessourcesResponse = ExportSubjectFhirRessourcesResponse;
/**
 * Contains arguments for calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ImportSubjectFhirRessourcesRequest = /** @class */ (function () {
    function ImportSubjectFhirRessourcesRequest() {
        // Required Argument for 'ImportSubjectFhirRessources' (Models.SubjectFhirRessourceContainer[]): A structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
        this.subjectFhirRessources = [];
    }
    return ImportSubjectFhirRessourcesRequest;
}());
exports.ImportSubjectFhirRessourcesRequest = ImportSubjectFhirRessourcesRequest;
/**
 * Contains results from calling 'ImportSubjectFhirRessources'.
 * Method: Exports a structure containing HL7/FHIR-Ressources (JSON only) and
 * the essential fields which are required to qualify a ORSCF record.
 */
var ImportSubjectFhirRessourcesResponse = /** @class */ (function () {
    function ImportSubjectFhirRessourcesResponse() {
        // Out-Argument of 'ImportSubjectFhirRessources' (string[])
        this.createdSubjectUids = [];
        // Out-Argument of 'ImportSubjectFhirRessources' (string[])
        this.updatedSubjectUids = [];
    }
    return ImportSubjectFhirRessourcesResponse;
}());
exports.ImportSubjectFhirRessourcesResponse = ImportSubjectFhirRessourcesResponse;
/**
 * Contains arguments for calling 'ArchiveSubjects'.
 */
var ArchiveSubjectsRequest = /** @class */ (function () {
    function ArchiveSubjectsRequest() {
        // Required Argument for 'ArchiveSubjects' (string[])
        this.subjectUids = [];
    }
    return ArchiveSubjectsRequest;
}());
exports.ArchiveSubjectsRequest = ArchiveSubjectsRequest;
/**
 * Contains results from calling 'ArchiveSubjects'.
 */
var ArchiveSubjectsResponse = /** @class */ (function () {
    function ArchiveSubjectsResponse() {
        // Out-Argument of 'ArchiveSubjects' (string[]): also including the Uids of already archived records
        this.archivedSubjectUids = [];
    }
    return ArchiveSubjectsResponse;
}());
exports.ArchiveSubjectsResponse = ArchiveSubjectsResponse;
/**
 * Contains arguments for calling 'UnarchiveSubjects'.
 */
var UnarchiveSubjectsRequest = /** @class */ (function () {
    function UnarchiveSubjectsRequest() {
        // Required Argument for 'UnarchiveSubjects' (string[])
        this.subjectUids = [];
    }
    return UnarchiveSubjectsRequest;
}());
exports.UnarchiveSubjectsRequest = UnarchiveSubjectsRequest;
/**
 * Contains results from calling 'UnarchiveSubjects'.
 */
var UnarchiveSubjectsResponse = /** @class */ (function () {
    function UnarchiveSubjectsResponse() {
        // Out-Argument of 'UnarchiveSubjects' (string[])
        this.unarchivedSubjectUids = [];
    }
    return UnarchiveSubjectsResponse;
}());
exports.UnarchiveSubjectsResponse = UnarchiveSubjectsResponse;
/**
 * Contains arguments for calling 'ApplySubjectMutations'.
 */
var ApplySubjectMutationsRequest = /** @class */ (function () {
    function ApplySubjectMutationsRequest() {
        // Required Argument for 'ApplySubjectMutations' (Object)
        this.mutationsBySubjecttUid = new Object();
    }
    return ApplySubjectMutationsRequest;
}());
exports.ApplySubjectMutationsRequest = ApplySubjectMutationsRequest;
/**
 * Contains results from calling 'ApplySubjectMutations'.
 */
var ApplySubjectMutationsResponse = /** @class */ (function () {
    function ApplySubjectMutationsResponse() {
        // Out-Argument of 'ApplySubjectMutations' (string[])
        this.updatedSubjectUids = [];
    }
    return ApplySubjectMutationsResponse;
}());
exports.ApplySubjectMutationsResponse = ApplySubjectMutationsResponse;
/**
 * Contains arguments for calling 'ApplySubjectBatchMutation'.
 */
var ApplySubjectBatchMutationRequest = /** @class */ (function () {
    function ApplySubjectBatchMutationRequest() {
        // Required Argument for 'ApplySubjectBatchMutation' (string[])
        this.subjectUids = [];
        // Required Argument for 'ApplySubjectBatchMutation' (Models.BatchableSubjectMutation)
        this.mutation = new Models.BatchableSubjectMutation();
    }
    return ApplySubjectBatchMutationRequest;
}());
exports.ApplySubjectBatchMutationRequest = ApplySubjectBatchMutationRequest;
/**
 * Contains results from calling 'ApplySubjectBatchMutation'.
 */
var ApplySubjectBatchMutationResponse = /** @class */ (function () {
    function ApplySubjectBatchMutationResponse() {
        // Out-Argument of 'ApplySubjectBatchMutation' (string[])
        this.updatedSubjectUids = [];
    }
    return ApplySubjectBatchMutationResponse;
}());
exports.ApplySubjectBatchMutationResponse = ApplySubjectBatchMutationResponse;
/**
 * Contains arguments for calling 'ImportSubjects'.
 */
var ImportSubjectsRequest = /** @class */ (function () {
    function ImportSubjectsRequest() {
        // Required Argument for 'ImportSubjects' (Models.SubjectStructure[])
        this.subjects = [];
    }
    return ImportSubjectsRequest;
}());
exports.ImportSubjectsRequest = ImportSubjectsRequest;
/**
 * Contains results from calling 'ImportSubjects'.
 */
var ImportSubjectsResponse = /** @class */ (function () {
    function ImportSubjectsResponse() {
        // Out-Argument of 'ImportSubjects' (string[])
        this.createdSubjectUids = [];
        // Out-Argument of 'ImportSubjects' (string[])
        this.updatedSubjectUids = [];
    }
    return ImportSubjectsResponse;
}());
exports.ImportSubjectsResponse = ImportSubjectsResponse;
//# sourceMappingURL=dtos.js.map