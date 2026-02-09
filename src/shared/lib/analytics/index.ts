export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
    console.log(`[GA4 Event] ${eventName}`, eventParams);
  } else {
    console.log(`[GA4 Event - Mock] ${eventName}`, eventParams);
  }
}

export const GA_EVENTS = {
  QUOTE_STEP1_COMPLETED: "quote_step1_completed",
  QUOTE_STEP2_PHOTO_UPLOAD_STARTED: "quote_step2_photo_upload_started",
  QUOTE_STEP3_COMPLETED: "quote_step3_completed",
  QUOTE_SUBMITTED: "quote_submitted",
} as const;
