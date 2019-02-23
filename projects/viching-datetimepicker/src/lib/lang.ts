const week = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
const time = ['hour', 'minute', 'second'];
const button = ['reset', 'sure'];

const EN_US = {
  'daily': 'Daily', 'weekly': 'Weekly', 'monthly': 'Monthly', 'quarterly': 'Quarterly', 'yearly': 'Yearly',
  'date': 'Date', 'week': 'Week', 'month': 'Month', 'quarter': 'Quarter', 'year': 'Year',
  'jan': 'Jan', 'feb': 'Feb', 'mar': 'Mar', 'apr': 'Apr', 'may': 'May', 'jun': 'Jun',
  'jul': 'Jul', 'aug': 'Aug', 'sep': 'Sep', 'oct': 'Oct', 'nov': 'Nov', 'dec': 'Dec',
  'su': 'Su', 'mo': 'Mo', 'tu': 'Tu', 'we': 'We', 'th': 'Th', 'fr': 'Fr', 'sa': 'Sa',
  'hour': 'Hour', 'minute': 'Min', 'second': 'Sec', 'reset': 'Reset', 'sure': 'Sure',
  'w': 'W%s'
};

const ZH_CN = {
  'daily': '日', 'weekly': '周', 'monthly': '月', 'quarterly': '季度', 'yearly': '年',
  'date': '日', 'week': '周', 'month': '月', 'quarter': '季度', 'year': '年',
  'jan': '一月', 'feb': '二月', 'mar': '三月', 'apr': '四月', 'may': '五月', 'jun': '六月',
  'jul': '七月', 'aug': '八月', 'sep': '九月', 'oct': '十月', 'nov': '冬月', 'dec': '腊月',
  'su': '周日', 'mo': '周一', 'tu': '周二', 'we': '周三', 'th': '周四', 'fr': '周五', 'sa': '周六',
  'hour': '时', 'minute': '分', 'second': '秒', 'reset': '重置', 'sure': '确定',
  'w': '第%s周'
};

const LANG: any = {};
LANG['en-us'] = EN_US;
LANG['zh-cn'] = ZH_CN;

const isArray = function (it) {
  return Object.prototype.toString.call(it) === '[object Array]';
};

LANG.convert = (value: any, lang: string) => {
  lang = lang.toLowerCase();
  let cur = LANG[lang];
  if (!cur) {
    return value;
  }
  if (isArray(value)) {
    let _v = [];
    for (let i = 0; i < value.length; i++) {
      _v[i] = cur[value[i].toLowerCase()];
    }
    return _v;
  }
  return cur[value.toLowerCase()];
};

LANG.week = (value: number, lang: string) => {
  lang = lang.toLowerCase();
  let cur = LANG[lang];
  return cur['w'].replace('%s', value);
};

LANG.time_i18n = (lang: string) => {
  return LANG.convert(time, lang);
};

LANG.week_i18n = (lang: string) => {
  return LANG.convert(week, lang);
};

LANG.button_i18n = (lang: string) => {
  return LANG.convert(button, lang);
};

LANG.padZero = (num: number) => {
  return ('00' + num).slice(-2);
};

export {LANG};
