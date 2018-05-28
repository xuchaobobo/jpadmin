export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

function toaddZero(n){
  if(n>10){
    return n
  }else{
    return '0'+n
  }
};

export function getWeek() {
    let todayDate = new Date();
    let date = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getYear();
    let hour = toaddZero(todayDate.getHours());
    let minutes = toaddZero(todayDate.getMinutes());
    var dateweek = "";
    if (navigator.appName == "Netscape") {
      dateweek =
        dateweek + (1900 + year) + "-" + month + "-" + date + "\n ";
    }
    if (navigator.appVersion.indexOf("MSIE") != -1) {
      dateweek = dateweek + year + "-" + month + "-" + date + "\n ";
    }
    switch (todayDate.getDay()) {
      case 0:
        dateweek += "星期日";
        break;
      case 1:
        dateweek += "星期一";
        break;
      case 2:
        dateweek += "星期二";
        break;
      case 3:
        dateweek += "星期三";
        break;
      case 4:
        dateweek += "星期四";
        break;
      case 5:
        dateweek += "星期五";
        break;
      case 6:
        dateweek += "星期六";
        break;
    }
    dateweek +=" "+hour;
    dateweek +=":"+minutes;
    return dateweek;
  }