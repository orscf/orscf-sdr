"use strict";
/* based on ORSCF SubjectData Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdrConnector = exports.SubjectSubmissionClient = exports.SubjectHL7ImportClient = exports.SubjectHL7ExportClient = exports.SubjectConsumeClient = exports.SdrEventSubscriptionClient = exports.SdrApiInfoClient = void 0;
const axios_1 = require("axios");
/**
 * Provides interoperability information for the current implementation
 */
class SdrApiInfoClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'sdrApiInfo/';
        }
        else {
            return rootUrl + '/sdrApiInfo/';
        }
    }
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getApiVersion';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'SdrEventSubscription', 'SubjectConsume', 'SubjectSubmission', 'SubjectHL7Export' 'SubjectHL7Import'
     */
    getCapabilities() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getCapabilities';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of available capabilities ("API:SubjectOverview") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getPermittedAuthScopes';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { authState: responseWrapper.authState, return: responseWrapper.return };
        });
    }
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getOAuthTokenRequestUrl';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.SdrApiInfoClient = SdrApiInfoClient;
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
class SdrEventSubscriptionClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'sdrEventSubscription/';
        }
        else {
            return rootUrl + '/sdrEventSubscription/';
        }
    }
    /**
     * Creates a subscription for changes which are affecting Subjects. On success, a 'SubscriptionUid' will be returned and a call will be made to the given subscriberUrl + '/ConfirmAsSubscriber'. After the subscription has been confirmed, the requested events will be pushed to subscriberUrl + '/NoticeChangedSubjects' (NOTICE: the receiving methods also are documented here, because this service itself can act as subscriber)
     */
    subscribeForChangedSubjects(subscriberUrl, filter) {
        let requestWrapper = {
            subscriberUrl: subscriberUrl,
            filter: filter
        };
        let url = this.getEndpointUrl() + 'subscribeForChangedSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Receives notifications about changes which are affecting Subjects. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    noticeChangedSubjects(eventUid, eventSignature, subscriptionUid, publisherUrl, createdRecords, modifiedRecords, archivedRecords) {
        let requestWrapper = {
            eventUid: eventUid,
            eventSignature: eventSignature,
            subscriptionUid: subscriptionUid,
            publisherUrl: publisherUrl,
            createdRecords: createdRecords,
            modifiedRecords: modifiedRecords,
            archivedRecords: archivedRecords,
        };
        let url = this.getEndpointUrl() + 'noticeChangedSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { terminateSubscription: responseWrapper.terminateSubscription };
        });
    }
    /**
     * Confirms a Subscription. IMPORTANT: this method is dedicated to the usecase, when this service itself acts as a subscriber! So this can be called by an foreign service during the setup of a subscription, which was previously requested from here. The opposite case: any client subscribing to events from here, must provide its own http endpoint that has such a method!
     */
    confirmAsSubscriber(publisherUrl, subscriptionUid) {
        let requestWrapper = {
            publisherUrl: publisherUrl,
            subscriptionUid: subscriptionUid,
        };
        let url = this.getEndpointUrl() + 'confirmAsSubscriber';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { secret: responseWrapper.secret };
        });
    }
    /**
     * Terminates a subscription (on publisher side) and returns a boolean, which indicates success.
     */
    terminateSubscription(subscriptionUid, secret) {
        let requestWrapper = {
            subscriptionUid: subscriptionUid,
            secret: secret
        };
        let url = this.getEndpointUrl() + 'terminateSubscription';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Returns an array of subscriptionUid's. This method helps subscribers to evaluate whether current subscriptions are still active.
     */
    getSubsriptionsBySubscriberUrl(subscriberUrl, secret) {
        let requestWrapper = {
            subscriberUrl: subscriberUrl,
            secret: secret
        };
        let url = this.getEndpointUrl() + 'getSubsriptionsBySubscriberUrl';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.SdrEventSubscriptionClient = SdrEventSubscriptionClient;
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
class SubjectConsumeClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'subjectConsume/';
        }
        else {
            return rootUrl + '/subjectConsume/';
        }
    }
    /**
     * Searches Subjects by a given 'filter' (if provided), sorts the results by the given 'sortingField' (if provided) and returns an array of SubjectUids for the matching records.
     */
    searchSubjects(sortingField, sortDescending = false, filter, includeArchivedRecords = false, limitResults = 0) {
        let requestWrapper = {
            sortingField: sortingField,
            sortDescending: sortDescending,
            filter: filter,
            includeArchivedRecords: includeArchivedRecords,
            limitResults: limitResults,
        };
        let url = this.getEndpointUrl() + 'searchSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { result: responseWrapper.result };
        });
    }
    /**
     * Searches Subjects which have been modified after(or at) the given 'minTimestampUtc', matching to the given 'filter' (if provided). The result is sorted descenting by the timestamp of the modification (latest first) and will include archived records.
     */
    searchChangedSubjects(minTimestampUtc, filter) {
        let requestWrapper = {
            minTimestampUtc: minTimestampUtc,
            filter: filter,
        };
        let url = this.getEndpointUrl() + 'searchChangedSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { latestTimestampUtc: responseWrapper.latestTimestampUtc, createdRecords: responseWrapper.createdRecords, modifiedRecords: responseWrapper.modifiedRecords, archivedRecords: responseWrapper.archivedRecords };
        });
    }
    /**
     * GetCustomFieldDescriptorsForSubject
     */
    getCustomFieldDescriptorsForSubject(languagePref = 'EN') {
        let requestWrapper = {
            languagePref: languagePref
        };
        let url = this.getEndpointUrl() + 'getCustomFieldDescriptorsForSubject';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * Checks the existence of 'Subjects' for a given list of subjectUids
     */
    checkSubjectExisitence(subjectUids) {
        let requestWrapper = {
            subjectUids: subjectUids,
        };
        let url = this.getEndpointUrl() + 'checkSubjectExisitence';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableSubjectUids: responseWrapper.unavailableSubjectUids, availableSubjectUids: responseWrapper.availableSubjectUids };
        });
    }
    /**
     * loads the requested Subjects and returns lightweight json objects (without childs), which are optimized to be displayed as table (the most common UI use case). This models containig a combination of: essential fieds from the record, calculated fields (numbers of child records), custom fields (choosen by the service)
     */
    getSubjectFields(subjectUids) {
        let requestWrapper = {
            subjectUids: subjectUids,
        };
        let url = this.getEndpointUrl() + 'getSubjectFields';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableSubjectUids: responseWrapper.unavailableSubjectUids, result: responseWrapper.result };
        });
    }
    /**
     * exports full 'SubjectStructures'
     */
    exportSubjects(subjectUids) {
        let requestWrapper = {
            subjectUids: subjectUids,
        };
        let url = this.getEndpointUrl() + 'exportSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unavailableSubjectUids: responseWrapper.unavailableSubjectUids, result: responseWrapper.result };
        });
    }
}
exports.SubjectConsumeClient = SubjectConsumeClient;
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
class SubjectHL7ExportClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'subjectHL7Export/';
        }
        else {
            return rootUrl + '/subjectHL7Export/';
        }
    }
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    exportSubjectFhirRessources(subjectUid) {
        let requestWrapper = {
            subjectUid: subjectUid,
        };
        let url = this.getEndpointUrl() + 'exportSubjectFhirRessources';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { subjectFhirRessources: responseWrapper.subjectFhirRessources, return: responseWrapper.return };
        });
    }
}
exports.SubjectHL7ExportClient = SubjectHL7ExportClient;
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
class SubjectHL7ImportClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'subjectHL7Import/';
        }
        else {
            return rootUrl + '/subjectHL7Import/';
        }
    }
    /**
     * Exports a structure containing HL7/FHIR-Ressources (JSON only) and the essential fields which are required to qualify a ORSCF record.
     */
    importSubjectFhirRessources(subjectFhirRessources) {
        let requestWrapper = {
            subjectFhirRessources: subjectFhirRessources,
        };
        let url = this.getEndpointUrl() + 'importSubjectFhirRessources';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { createdSubjectUids: responseWrapper.createdSubjectUids, updatedSubjectUids: responseWrapper.updatedSubjectUids };
        });
    }
}
exports.SubjectHL7ImportClient = SubjectHL7ImportClient;
/**
 * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
 */
class SubjectSubmissionClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'subjectSubmission/';
        }
        else {
            return rootUrl + '/subjectSubmission/';
        }
    }
    /**
     * ArchiveSubjects
     */
    archiveSubjects(subjectUids) {
        let requestWrapper = {
            subjectUids: subjectUids,
        };
        let url = this.getEndpointUrl() + 'archiveSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { archivedSubjectUids: responseWrapper.archivedSubjectUids };
        });
    }
    /**
     * UnarchiveSubjects
     */
    unarchiveSubjects(subjectUids) {
        let requestWrapper = {
            subjectUids: subjectUids,
        };
        let url = this.getEndpointUrl() + 'unarchiveSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { unarchivedSubjectUids: responseWrapper.unarchivedSubjectUids };
        });
    }
    /**
     * ApplySubjectMutations
     */
    applySubjectMutations(mutationsBySubjecttUid) {
        let requestWrapper = {
            mutationsBySubjecttUid: mutationsBySubjecttUid,
        };
        let url = this.getEndpointUrl() + 'applySubjectMutations';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { updatedSubjectUids: responseWrapper.updatedSubjectUids };
        });
    }
    /**
     * ApplySubjectBatchMutation
     */
    applySubjectBatchMutation(subjectUids, mutation) {
        let requestWrapper = {
            subjectUids: subjectUids,
            mutation: mutation,
        };
        let url = this.getEndpointUrl() + 'applySubjectBatchMutation';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { updatedSubjectUids: responseWrapper.updatedSubjectUids };
        });
    }
    /**
     * ImportSubjects
     */
    importSubjects(subjects) {
        let requestWrapper = {
            subjects: subjects,
        };
        let url = this.getEndpointUrl() + 'importSubjects';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { createdSubjectUids: responseWrapper.createdSubjectUids, updatedSubjectUids: responseWrapper.updatedSubjectUids };
        });
    }
}
exports.SubjectSubmissionClient = SubjectSubmissionClient;
class SdrConnector {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
        if (this.httpPostMethod == null) {
            this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
            this.httpPostMethod = (url, requestObject, apiToken) => {
                if (!this.axiosHttpApi) {
                    this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
                }
                return this.axiosHttpApi.post(url, requestObject, {
                    headers: {
                        Authorization: apiToken
                    }
                });
            };
        }
        this.sdrApiInfoClient = new SdrApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.sdrEventSubscriptionClient = new SdrEventSubscriptionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.subjectConsumeClient = new SubjectConsumeClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.subjectHL7ExportClient = new SubjectHL7ExportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.subjectHL7ImportClient = new SubjectHL7ImportClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.subjectSubmissionClient = new SubjectSubmissionClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    }
    getRootUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl;
        }
        else {
            return rootUrl + '/';
        }
    }
    /**
     * Provides interoperability information for the current implementation
     */
    get sdrApiInfo() { return this.sdrApiInfoClient; }
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get sdrEventSubscription() { return this.sdrEventSubscriptionClient; }
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectConsume() { return this.subjectConsumeClient; }
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectHL7Export() { return this.subjectHL7ExportClient; }
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectHL7Import() { return this.subjectHL7ImportClient; }
    /**
     * Provides an workflow-level API for interating with a 'SubjectDataRepository' (VDR)
     */
    get subjectSubmission() { return this.subjectSubmissionClient; }
}
exports.SdrConnector = SdrConnector;
//# sourceMappingURL=connector.js.map