(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var a=e(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var i,o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function u(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=a.match(o);if(!s)return null;var c,u=s[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d),c=t.valueCallback?t.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(u.length)}}}const d={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(t,e,n,a){return s[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(i.matchPattern);if(!r)return null;var o=r[0],s=n.match(i.parsePattern);if(!s)return null;var c=i.valueCallback?i.valueCallback(s[0]):s[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(o.length)}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(n,a){t(2,arguments);var r=e(n).getTime(),i=l(a);return new Date(r+i)}function h(e,n){t(2,arguments);var a=l(n);return m(e,-a)}function f(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const g=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return f("yy"===e?a%100:a,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},v=function(t,e){return f(t.getUTCDate(),e.length)},y=function(t,e){return f(t.getUTCHours()%12||12,e.length)},p=function(t,e){return f(t.getUTCHours(),e.length)},b=function(t,e){return f(t.getUTCMinutes(),e.length)},T=function(t,e){return f(t.getUTCSeconds(),e.length)},M=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return f(Math.floor(a*Math.pow(10,n-3)),e.length)};var E=864e5;function D(n){t(1,arguments);var a=1,r=e(n),i=r.getUTCDay(),o=(i<a?7:0)+i-a;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function k(n){t(1,arguments);var a=e(n),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=D(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=D(s);return a.getTime()>=o.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}function C(e){t(1,arguments);var n=k(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=D(a);return r}var S=6048e5;function I(n,a){t(1,arguments);var r=a||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:l(o),c=null==r.weekStartsOn?s:l(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=e(n),d=u.getUTCDay(),m=(d<c?7:0)+d-c;return u.setUTCDate(u.getUTCDate()-m),u.setUTCHours(0,0,0,0),u}function L(n,a){t(1,arguments);var r=e(n,a),i=r.getUTCFullYear(),o=a||{},s=o.locale,c=s&&s.options&&s.options.firstWeekContainsDate,u=null==c?1:l(c),d=null==o.firstWeekContainsDate?u:l(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(i+1,0,d),m.setUTCHours(0,0,0,0);var h=I(m,a),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var g=I(f,a);return r.getTime()>=h.getTime()?i+1:r.getTime()>=g.getTime()?i:i-1}function P(e,n){t(1,arguments);var a=n||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:l(i),s=null==a.firstWeekContainsDate?o:l(a.firstWeekContainsDate),c=L(e,n),u=new Date(0);u.setUTCFullYear(c,0,s),u.setUTCHours(0,0,0,0);var d=I(u,n);return d}var x=6048e5;function B(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+f(i,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):F(t,e)}function F(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+f(Math.floor(r/60),2)+n+f(r%60,2)}const N={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return g(t,e)},Y:function(t,e,n,a){var r=L(t,a),i=r>0?r:1-r;return"YY"===e?f(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):f(i,e.length)},R:function(t,e){return f(k(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return f(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return f(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return f(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,i){var o=function(n,a){t(1,arguments);var r=e(n),i=I(r,a).getTime()-P(r,a).getTime();return Math.round(i/x)+1}(n,i);return"wo"===a?r.ordinalNumber(o,{unit:"week"}):f(o,a.length)},I:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=D(a).getTime()-C(a).getTime();return Math.round(r/S)+1}(n);return"Io"===a?r.ordinalNumber(i,{unit:"week"}):f(i,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var i=a.getTime(),o=r-i;return Math.floor(o/E)+1}(n);return"Do"===a?r.ordinalNumber(i,{unit:"dayOfYear"}):f(i,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return f(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return f(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):f(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return M(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return U(r);case"XXXX":case"XX":return F(r);case"XXXXX":case"XXX":default:return F(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(r);case"xxxx":case"xx":return F(r);case"xxxxx":case"xxx":default:return F(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");case"OOOO":default:return"GMT"+F(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");case"zzzz":default:return"GMT"+F(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return f(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return f((a._originalDate||t).getTime(),e.length)}};function O(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function j(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const W={p:j,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return O(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",O(r,e)).replace("{{time}}",j(i,e))}};var Y=6e4;function z(t){return t.getTime()%Y}function q(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var a=n>0?(Y+z(e))%Y:z(e);return n*Y+a}var H=["D","DD"],A=["YY","YYYY"];function X(t){return-1!==H.indexOf(t)}function Q(t){return-1!==A.indexOf(t)}function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,V=/''/g,$=/[a-zA-Z]/;function K(a,r,i){t(2,arguments);var o=String(r),s=i||{},c=s.locale||d,u=c.options&&c.options.firstWeekContainsDate,m=null==u?1:l(u),f=null==s.firstWeekContainsDate?m:l(s.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=c.options&&c.options.weekStartsOn,w=null==g?0:l(g),v=null==s.weekStartsOn?w:l(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var y=e(a);if(!n(y))throw new RangeError("Invalid time value");var p=q(y),b=h(y,p),T={firstWeekContainsDate:f,weekStartsOn:v,locale:c,_originalDate:y},M=o.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,W[e])(t,c.formatLong,T):t})).join("").match(G).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return Z(t);var n=N[e];if(n)return!s.useAdditionalWeekYearTokens&&Q(t)&&R(t,r,a),!s.useAdditionalDayOfYearTokens&&X(t)&&R(t,r,a),n(b,t,c.localize,T);if(e.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return M}function Z(t){return t.match(_)[1].replace(V,"'")}const tt={allListItems:void 0,getStorage:function(){let t;if(null===localStorage.getItem("toDoList"))t=[];else{t=JSON.parse(localStorage.getItem("toDoList"));for(let e=0;e<t.length;e+=1){const n=new Date(t[e].dueDate);t[e].dueDate=n}}this.allListItems=t},setStorage:function(){localStorage.setItem("toDoList",JSON.stringify(this.allListItems))}},et=function(t){return"complete"===t.completionStatus?t.completionStatus="incomplete":"incomplete"===t.completionStatus&&(t.completionStatus="complete"),tt.setStorage(),location.reload(),!1},nt=function(t){for(let e=0;e<tt.allListItems.length;e+=1)tt.allListItems[e].id===t.id&&tt.allListItems.splice(e,1);return tt.setStorage(),location.reload(),!1},at=function(){const t=document.getElementById("editItemModal");return{loadModal:function(e){t.style.display="block",document.getElementById("closeEditModal").addEventListener("click",(()=>{t.style.display="none"})),window.onclick=function(e){e.target===t&&(t.style.display="none")},document.getElementById("updateButton").addEventListener("click",(()=>{!function(e){const n=document.getElementById("editItemForm").elements.namedItem("taskName").value,a=document.getElementById("editItemForm").elements.namedItem("taskDescription").value,r=document.getElementById("editItemForm").elements.namedItem("dueDate").value,i=new Date(r.getTime()+6e4*r.getTimezoneOffset()),o=document.getElementById("editItemForm").elements.namedItem("project").value,s=document.getElementById("editItemForm").elements.namedItem("importance").value;for(let t=0;t<tt.allListItems.length;t+=1)tt.allListItems[t].id===e.id&&(tt.allListItems[t].title=n,tt.allListItems[t].description=a,tt.allListItems[t].dueDate=i,tt.allListItems[t].project=o,tt.allListItems[t].priority=s);t.style.display="none",tt.setStorage(),location.reload()}(e)})),document.getElementById("taskNameEdit").value=e.title,document.getElementById("taskDescriptionEdit").value=e.description;const n=document.getElementById("dueDateEdit"),a=K(new Date(e.dueDate),"yyyy-MM-dd");n.value=a,document.getElementById("projectEdit").value=e.project,document.getElementById("importanceEdit").value=e.priority}}}(),rt=function(){const n=t=>K(t,"yyyy-MM-dd"),a=function(t,e,n){return""===e?t:t.filter((function(t){return t[n]===e}))};return{completionFilter:"incomplete",sidebarProject:"",sidebarTime:"",filterArrayFunction:function(r){const i=function(a,r){const i=new Date,o=function(n,a){t(2,arguments);var r=e(n),i=l(a);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}(new Date,1),s=function(n,a){t(1,arguments);var r=a||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:l(o),c=null==r.weekStartsOn?s:l(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=e(n),d=u.getDay(),m=6+(d<c?-7:0)-(d-c);return u.setDate(u.getDate()+m),u.setHours(23,59,59,999),u}(i);if("today"===r){const t=function(t){return n(t.dueDate)===n(i)};return a.filter(t)}if("tomorrow"===r){const t=function(t){return n(t.dueDate)===n(o)};return a.filter(t)}if("week"===r){const n=function(n){return n.dueDate>=function(n){t(1,arguments);var a=e(n);return a.setHours(0,0,0,0),a}(i)&&n.dueDate<=s};return a.filter(n)}return a}(r,this.sidebarTime),o=a(i,this.sidebarProject,"project");return a(o,this.completionFilter,"completionStatus")},setStorage:function(){localStorage.setItem("completionFilter",this.completionFilter),localStorage.setItem("sidebarProject",this.sidebarProject),localStorage.setItem("sidebarTime",this.sidebarTime)},getStorage:function(){null==localStorage.getItem("completionFilter")?this.completionFilter="incomplete":this.completionFilter=localStorage.getItem("completionFilter"),null==localStorage.getItem("sidebarProject")?this.sidebarProject="":this.sidebarProject=localStorage.getItem("sidebarProject"),null==localStorage.getItem("sidebarTime")?this.sidebarTime="":this.sidebarTime=localStorage.getItem("sidebarTime")}}}(),it=function(){!function(t){const e=document.getElementById("taskList");e.innerHTML="";for(let n=0;n<t.length;n+=1){const a=document.createElement("tr");a.setAttribute("id",t[n].id),a.classList.add(t[n].completionStatus);const r=document.createElement("td");r.classList.add("taskRow","taskButton");const i=document.createElement("button");i.classList.add(t[n].priority),i.addEventListener("click",(()=>{et(t[n])})),r.appendChild(i),a.appendChild(r);const o=document.createElement("td");o.classList.add("taskRow","taskName"),o.innerHTML=t[n].title,a.appendChild(o);const s=document.createElement("td");s.classList.add("taskRow","taskDate"),s.innerHTML=K(t[n].dueDate,"MMM dd");const c=K(new Date,"yyyy-MM-dd"),u=K(t[n].dueDate,"yyyy-MM-dd");u>c?s.classList.add("future"):u===c?s.classList.add("comingSoon"):u<c&&s.classList.add("overdue"),a.appendChild(s);const d=document.createElement("td");d.classList.add("taskRow","taskProject"),d.innerHTML=t[n].project,a.appendChild(d);const l=document.createElement("td");l.addEventListener("click",(()=>{at.loadModal(t[n])})),l.classList.add("taskRow","taskButton","edit","icon"),l.innerHTML='<svg viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>',a.appendChild(l);const m=document.createElement("td");m.classList.add("taskRow","taskButton","delete","icon"),m.innerHTML='<svg height="15px" class="trash icon" viewBox="-40 0 427 427.00131" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>',a.appendChild(m),m.addEventListener("click",(()=>{nt(t[n])})),e.appendChild(a)}}(rt.filterArrayFunction(tt.allListItems))},ot={sidebarFilterOnLoad(){rt.getStorage(),it(),document.getElementById("")},sidebarFilterClear(){rt.sidebarProject="",rt.sidebarTime="",rt.setStorage(),it()},sidebarFilterTime(t){rt.sidebarProject="",rt.sidebarTime=t,rt.setStorage(),it()},sidebarFilterProject(t){rt.sidebarProject=t,rt.sidebarTime="",rt.setStorage(),it()},completionFilter(t){rt.completionFilter=t,rt.setStorage(),it()}},st=function(){const t=document.getElementsByClassName("sidebarItem");for(let e=0;e<t.length;e+=1)t[e].classList.remove("active")},ct=function(){const t=document.getElementsByClassName("filterOption");for(let e=0;e<t.length;e+=1)t[e].classList.remove("active")},ut={updateDom(){!function(){const t=document.getElementsByClassName("sidebarTime");for(let e=0;e<t.length;e+=1)t[e].addEventListener("click",(()=>{ot.sidebarFilterTime(t[e].getAttribute("data-value")),st(),t[e].classList.add("active")}))}(),function(){const t=document.getElementById("allTasks");t.addEventListener("click",(()=>{ot.sidebarFilterClear(),st(),t.classList.add("active")}))}(),function(){const t=document.getElementsByClassName("filterOption");for(let e=0;e<t.length;e+=1)t[e].addEventListener("click",(()=>{ot.completionFilter(t[e].getAttribute("data-value")),ct(),t[e].classList.add("active")}))}(),function(t){const e=t.map((t=>t.project)),n=e.filter(((t,n)=>e.indexOf(t)===n)),a=document.getElementById("projectList");a.innerHTML="";for(let t=0;t<n.length;t+=1){const e=document.createElement("li");e.classList.add("sidebarItem"),e.setAttribute("data-value",n[t]),e.innerText=n[t],a.appendChild(e),e.addEventListener("click",(function(){ot.sidebarFilterProject(n[t]),st(),this.classList.add("active")}))}}(tt.allListItems),ot.sidebarFilterOnLoad(),""===rt.completionFilter?document.getElementById("all").classList.add("active"):document.getElementById("subheaderRank").querySelectorAll(`[data-value=${rt.completionFilter}]`)[0].classList.add("active"),""===rt.sidebarProject&&""===rt.sidebarTime?document.getElementById("allTasks").classList.add("active"):""===rt.sidebarTime?document.getElementById("projectList").querySelectorAll('[data-value="Dog Stuff"]')[0].classList.add("active"):""===rt.sidebarProject&&document.getElementById("timeList").querySelectorAll(`[data-value=${rt.sidebarTime}]`)[0].classList.add("active")}},dt=function(){const t=function(){document.getElementById("addNewListItemButton").addEventListener("click",(()=>{document.getElementById("newItemForm").checkValidity()?(!function(){const t=document.getElementById("newItemForm").elements.namedItem("taskName").value,e=document.getElementById("newItemForm").elements.namedItem("taskDescription").value,n=document.getElementById("newItemForm").elements.namedItem("dueDate").value,a=document.getElementById("newItemForm").elements.namedItem("project").value,r=document.getElementById("newItemForm").elements.namedItem("importance").value;!function(t,e,n,a,r,i){const o=((t,e,n,a,r,i)=>{const o=t.length+1,s=new Date(a);return{id:o,title:e,description:n,dueDate:new Date(s.getTime()+6e4*s.getTimezoneOffset()),priority:r,project:i,completionStatus:"incomplete"}})(t,e,n,a,r,i);t.push(o)}(tt.allListItems,t,e,n,r,a)}(),tt.setStorage(),document.getElementById("addNewItemModal").style.display="none",location.reload()):alert("Form not complete")}))};return{updateButtons:function(){!function(){const t=document.getElementById("addNewItemButton"),e=document.getElementById("addNewItemModal"),n=document.getElementById("closeAddNewModal");t.addEventListener("click",(()=>{e.style.display="block"})),n.addEventListener("click",(()=>{e.style.display="none"})),window.onclick=function(t){t.target===e&&(e.style.display="none")}}(),t()}}}();tt.getStorage(),ut.updateDom(),dt.updateButtons()})();