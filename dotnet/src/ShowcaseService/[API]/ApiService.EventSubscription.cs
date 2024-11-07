//using MedicalResearch.SubjectData.Model;
//using Newtonsoft.Json;
//using System;
//using System.Data.AccessControl;
//using System.Data.Fuse;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Net;
//using System.Security.Cryptography;
//using System.Text;

//namespace MedicalResearch.SubjectData {

//  public partial class ApiService : ISdrEventSubscriptionService {

//    #region " Publisher Role "

//    private SubscriptionManager _SubscriptionManager;

//    public Guid SubscribeForChangedSubjects(string subscriberUrl, ExpressionTree filter = null) {
//      return _SubscriptionManager.CreateSubscription<SubjectChangedSubscription>(subscriberUrl, (s) => {
//        s.Filter = filter;
//        s.SetService(this);
//      });
//    }

//    public Guid[] GetSubsriptionsBySubscriberUrl(string subscriberUrl, string secret) {
//      return _SubscriptionManager.GetSubsriptionsBySubscriberUrl(subscriberUrl, secret);
//    }

//    public bool TerminateSubscription(Guid subscriptionUid, string secret) {
//      return _SubscriptionManager.TerminateSubscription(subscriptionUid, secret);
//    }

//    #endregion 

//    #region " Subscriber Role "

//    public void ConfirmAsSubscriber(string publisherUrl, Guid subscriptionUid, out string secret) {
//      secret = "DUMMY";
//    }

//    public void NoticeChangedSubjects(
//      Guid eventUid, string eventSignature, Guid subscriptionUid, string publisherUrl,
//      EntityRef[] createdRecords, EntityRef[] modifiedRecords, EntityRef[] archivedRecords,
//      out bool terminateSubscription) {

//      terminateSubscription = false;
//    }

//    #endregion

//  }

//  internal partial class NoticeChangedSubjectsEvent : SubscriptionEvent {

//    public EntityRef[] createdRecords { get; set; } = null;
//    public EntityRef[] modifiedRecords { get; set; } = null;
//    public EntityRef[] archivedRecords { get; set; } = null;

//  }

//  internal partial class SubjectChangedSubscription : Subscription {

//    public SubjectChangedSubscription() {
//    }

//    private ApiService _Service;
//    internal void SetService(ApiService service) {
//      _Service = service;
//    }

//    public ExpressionTree Filter { get; set; } = null;

//    public override string GetFullNotificationUrl() {
//      return this.SubscriberRootUrl + "/NoticeChangedSubjects";
//    }

//    protected override void Evaluate(SubscriptionManager subscriptionManager) {
//      long latestTimestamp = 0;

//      EntityRef[] createdRecords;
//      EntityRef[] modifiedRecords;
//      EntityRef[] archivedRecords;

//      //_Service.SearchChangedSubjects(
//      //  this.CurrentTimestamp,
//      //  out latestTimestamp,
//      //  out createdRecords,
//      //  out modifiedRecords,
//      //  out archivedRecords,
//      //  this.Filter
//      //);

//      if(createdRecords.Any() || modifiedRecords.Any() || archivedRecords.Any()) {

//        bool terminate;

//        bool delivered = subscriptionManager.SendEvent<NoticeChangedSubjectsEvent>(
//          this, out terminate, (evt) => {
//            evt.createdRecords = createdRecords;
//            evt.modifiedRecords = modifiedRecords;
//            evt.archivedRecords = archivedRecords;
//          }
//        );

//      }

//      this.CurrentTimestamp = latestTimestamp;

//    }

//  }

//}
