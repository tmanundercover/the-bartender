// need other events?
// https://developers.google.com/gtagjs/reference/event
import {
  initializeAnalytics,
  logEvent,
  setUserId,
  setUserProperties,
} from 'firebase/analytics';
import FirebaseClient from './FirebaseClient';
import {v4 as uuidv4} from 'uuid'

// const FirebaseClient.analytics = initializeAnalytics(FirebaseClient.app, {
//   config: {
//     send_page_view: false,
//   },
// });


const analyticsPageView = (pathname: string, search: string, title: string) => {
  if (FirebaseClient.analytics) {
    logEvent(FirebaseClient.analytics, 'page_view', {
      page_path: pathname + search,
      page_title: title,
    });
  } else {
    // console.error('This better be an automated test');
  }
};

const utils = {
  logEventWithData: (eventName: string, data: any) => {
    // console.log("Logging GA event", eventName, data)
    logEvent(FirebaseClient.analytics, eventName, data);
  },
};

const ctaClick = (location: string, ctaText: string, userId?: string, ) => {
  console.log(" Bout to analytic", location, ctaText, userId)
  utils.logEventWithData('cta_click', {
    userId:userId??uuidv4(),
    location,
    ctaText
  });
}

const setAppUserId = (userId: string) => {
  setUserId(FirebaseClient.analytics, userId);
  setUserProperties(FirebaseClient.analytics, { isBlackCardValid: false });
};

// const blackCardFail = (userId: string) => {
//   utils.logEventWithData('black_card_fail', {
//     userId,
//   });
//
//   setUserProperties(FirebaseClient.analytics, { isBlackCardValid: false });
// };

// enum SocialMediaEnum {
//   TWITTER = 'twitter',
//   FACEBOOK = 'facebook',
//   INSTAGRAM = 'instagram',
// }
// const instagramLinkClicked = (id: string, questionId: string) => {
//   utils.logEventWithData('social_link_clicked', {
//     userId: id,
//     questionId,
//     social: SocialMediaEnum.INSTAGRAM,
//   });
// };

const reportVital = (vitalName: string, vitalMetric: string) => {
  utils.logEventWithData('web_vital_report', {
    name: vitalName,
    metric: vitalMetric,
  });
};

const amenityTooltipShown = (serviceName:string, amenityName: string, analyticsId:string) =>{
  utils.logEventWithData('amenityTooltipShown', {
    analyticsId,
    serviceName,
    amenityName
  });
}

export default {
  analyticsPageView,
  ctaClick,
  reportVital,
  setAppUserId,
  amenityTooltipShown
};
