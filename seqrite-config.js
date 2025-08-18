
let userLang = (navigator.language || (navigator).userLanguage || 'en').slice(0, 2);
window.klaroConfig = {
  "consentManagerId": "68a311e69c450e1ee5a80913",
  "uuid": "dd5ab577-5e6c-4233-9e76-f74727726d9c",
  "domain": "https://demo-shp.qhtpl.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "sdpdemocookieconsent.netlify.app/",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {},
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": true,
  "hideToggleAll": false,
  "appName": "Test website POC - tanmay",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Test website POC - tanmay",
  "companyAddress": " ",
  "services": [
    {
      "name": "_ga_0000000001",
      "title": "_ga_0000000001",
      "purposes": [
        "Others"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga_0000000001"
      ]
    },
    {
      "name": "_ga",
      "title": "_ga",
      "purposes": [
        "Analytics"
      ],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga"
      ]
    }
  ]
};
showCookie();