export const GTMPageView = (url: URL) => {
  interface PageEventProps {
    event: string;
    page: URL;
  }

  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url,
  };

  try {
    //@ts-ignore
    window && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
  } catch {}
};

export const gtmRegistered = (category: string) => {
  interface EventProps {
    event: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
  }

  const evnt: EventProps = {
    event: 'registered',
    eventAction: 'click',
    eventCategory: category,
    eventLabel: 'registered',
  };

  try {
    //@ts-ignore
    window && window.dataLayer && window.dataLayer.push(evnt);
    return evnt;
  } catch {}
};

export const gtmBooked = (category: string) => {
  interface EventProps {
    event: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
  }

  const evnt: EventProps = {
    event: 'trial_booked',
    eventAction: 'click',
    eventCategory: category,
    eventLabel: 'trial_booked',
  };

  try {
    //@ts-ignore
    window && window.dataLayer && window.dataLayer.push(evnt);
    return evnt;
  } catch {}
};

export const gtmDone = (category: string) => {
  interface EventProps {
    event: string;
    eventCategory: string;
    eventAction: string;
    eventLabel: string;
  }

  const evnt: EventProps = {
    event: 'done',
    eventAction: 'click',
    eventCategory: category,
    eventLabel: 'done',
  };

  try {
    //@ts-ignore
    window && window.dataLayer && window.dataLayer.push(evnt);
    return evnt;
  } catch {}
};
