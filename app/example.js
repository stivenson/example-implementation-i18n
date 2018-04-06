
const I18n = require('i18n-js'); // ### or import I18n from 'i18n-js';
const LocaleES = require('./i18n/es.json');
const LocaleEN = require('./i18n/en.json');
const LocaleEN_US = require('./i18n/en-us.json');
const LocaleES_MX = require('./i18n/es-mx.json');
const LocaleES_CO = require('./i18n/es-co.json');
const LocaleES_CL = require('./i18n/es-cl.json');
const LocaleES_PE = require('./i18n/es-pe.json');

I18n.fallbacks = true;
I18n.defaultLocale = 'es';
I18n.locale = I18n.currentLocale()
// +'-us'; optional use 
I18n.translations["es"] = LocaleES;
I18n.translations["en"] = LocaleEN;
I18n.translations["en-us"] = LocaleEN_US; // optional use
I18n.translations["es-mx"] = LocaleES_MX; // optional use
I18n.translations["es-co"] = LocaleES_CO; // optional use
I18n.translations["es-pe"] = LocaleES_PE; // optional use
I18n.translations["es-cl"] = LocaleES_CL; // optional use

console.log('1. current location');
console.log(I18n.currentLocale());

console.log('2. Amount in current location');
console.log(I18n.toCurrency(3400099.23, {precision: 3}));

console.log('3. Label in current location (translation)');
const aText = 'professional';
console.log(I18n.t(aText));
