# SubjectStore
Provides CRUD access to stored Subjects (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Subject](#Subject)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [Subject](#Subject)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [Subject](#Subject)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Subject](#Subject)|**IN**-Param (required): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>|
**return value:** [Subject](#Subject)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Subject](#Subject)|**IN**-Param (required): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>|
**return value:** [Subject](#Subject)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[Subject](#Subject)|**IN**-Param (required): entity, which relates to <see href="https://www.hl7.org/fhir/researchsubject.html">HL7.ResearchSubject</see>|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# SubjectSiteAssignmentStore
Provides CRUD access to stored SubjectSiteAssignments (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectSiteAssignment](#SubjectSiteAssignment)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectSiteAssignment](#SubjectSiteAssignment)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [SubjectSiteAssignment](#SubjectSiteAssignment)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectSiteAssignment](#SubjectSiteAssignment)|**IN**-Param (required)|
**return value:** [SubjectSiteAssignment](#SubjectSiteAssignment)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectSiteAssignment](#SubjectSiteAssignment)|**IN**-Param (required)|
**return value:** [SubjectSiteAssignment](#SubjectSiteAssignment)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectSiteAssignment](#SubjectSiteAssignment)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean



# Models:



## Subject
entity, which relates to [HL7.ResearchSubject](https://www.hl7.org/fhir/researchsubject.html)
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|SubjectUid|Guid|(required): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!|
|ActualSiteUid|Guid|(required)|
|EnrollingSiteUid|Guid|(required)|
|PeriodStart|DateTime|(optional): *this field is optional|
|PeriodEnd|DateTime|(optional): *this field is optional|
|StatusNote|String|(optional): *this field is optional (use null as value)|
|SubjectIdentifier|String|(optional): *this field is optional (use null as value)|
|Status|String|(required): AS DECLARED BY <see href="https://www.hl7.org/fhir/valueset-research-subject-status.html">HL7.ResearchSubjectStatus</see>: candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn|
|StudyUid|Guid|(required)|
|ModificationTimestampUtc|Int64|(required)|
|IsArchived|Boolean|(required)|
|AssignedArm|String|(required)|
|ActualArm|String|(required)|
|SubstudyNames|String|(required)|



## SubjectSiteAssignment
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|SubjectSiteAssignmentUid|Guid|(required): An <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> which can be generated by any origin system and is used to address this ORSCF conform data record in decentralized environments. Note that this Identity must not be changed any more!|
|ValidFrom|DateTime|(required)|
|SiteUid|Guid|(required): <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Site|
|SubjectUid|Guid|(required): <see href="https://de.wikipedia.org/wiki/Universally_Unique_Identifier">Universally Unique Identifier</see> of the target Subject|
|SiteDefinedPatientIdentifier|String|(optional): This can be the ID ('surrogate-key') of the Partient record within a site specific patient management system. This MUST NOT be any natural key or plain readable name which exposes the identity of the patient! *this field is optional (use null as value)|
|ByInvolvedPersonUid|Guid|(optional): *this field is optional|



## ExpressionTree
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|MatchAll|Boolean|(optional): true: AND-Relation | false: OR-Relation|
|Negate|Boolean|(optional): Negates the result|
|Predicates|*List*<[FieldPredicate](#FieldPredicate)>|(optional): Can contain ATOMIC predicates (FieldName~Value). NOTE: If there is more than one predicate with the same FieldName in combination with MatchAll=true, then this will lead to an subordinated OR-Expression dedicated to this field.|
|SubTree|*List*<[ExpressionTree](#ExpressionTree)>|(optional)|



## FieldPredicate
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|FieldName|String|(optional)|
|Operator|String|(optional): Wellknown operators like '==' '!=' (see 'FieldOperators'-Contants).|
|Value|Object|(optional): The value to match! (NOTE: in th special case of using the 'in' operator, the given 'value' to match must NOT be scalar! Instead it must be an ARRAY. A match is given if a field equals to at least one value within that array.)|



## RepositoryCapabilities
(from 'FUSE-fx.RepositoryContract')
An property bag which holds information about the implemented/supported
capabilities of an IRepository.
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|CanReadContent|Boolean|(optional): Indicates, that this repository offers access to load entities(classes) or some their entity fields (if this is false, then only EntityRefs are accessable)|
|CanUpdateContent|Boolean|(optional)|
|CanAddNewEntities|Boolean|(optional)|
|CanDeleteEntities|Boolean|(optional)|
|SupportsMassupdate|Boolean|(optional)|
|SupportsKeyUpdate|Boolean|(optional)|
|SupportsStringBasedSearchExpressions|Boolean|(optional)|
|RequiresExternalKeys|Boolean|(optional): Indicates, that entities can only be added to this repository, if ther key fields are pre-initialized by the caller. If false, then the persistence-technology behind the repository implementation will auto-generate a new key by its own.|

