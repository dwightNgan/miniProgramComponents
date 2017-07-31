function formatTime(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

let objToCssStr = (obj) => {
    let str = '';
    Object.keys(obj).map((item, index) => {
        str += item + ':' + obj[item] + ';'
    });
    return str
};

let cssStrToObj = (str) => {
    let arr = str.split(';'),
        obj = {};
    arr.map((item, index) => {
        let keys = item.split(':');
        obj[keys[0]] = keys[1];
    });
    return obj
};

let addStyle = (styleStr, obj) => {
    if (typeof styleStr != 'string') styleStr = '';
    return styleStr + objToCssStr(obj);
};

let changeStyle = (styleStr, obj) => {
    if (typeof styleStr != 'string') {
        // console.log('styleStr输入的不是字符串');
        styleStr="";
    }
    let arr = styleStr==''? []:styleStr.split(';');
    Object.keys(obj).map((key) => {
        let added=false;
        arr.map((item) => {
            if (item.search(key) == 0) {
                let index=arr.indexOf(item);
                arr.splice(index, 1, key + ':' + obj[key]);
                console.log(item,arr);
                added=true
            }
        });
        if(!added) arr.push(key + ':' + obj[key]);
    });
    return arr.join(';')

};

module.exports = {
    formatTime,
    objToCssStr,
    cssStrToObj,
    addStyle,
    changeStyle
};
