const SMALL_RESOLUTION_WIDTH = 1280;
const TABLET_MIN_WIDTH = 768;
const MOBILE_WIDTH = 960;
const ONLY_MOBILE_WIDTH = 960;
const GTM_ID = '';

const DOMAIN = '';
const GLOBAL_META = ``;
const GLOBAL_TITLE = ``;

const ORG_SCHEMA = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: '',
  description: GLOBAL_META,
  url: `https://${DOMAIN}`,
  logo: `https://${DOMAIN}/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Business Bay',
    addressLocality: 'Singapore',
    addressRegion: 'Singapore',
  },
  sameAs: [],
});

export {
  DOMAIN,
  GTM_ID,
  TABLET_MIN_WIDTH,
  SMALL_RESOLUTION_WIDTH,
  MOBILE_WIDTH,
  ONLY_MOBILE_WIDTH,
  ORG_SCHEMA,
  GLOBAL_META,
  GLOBAL_TITLE,
};
