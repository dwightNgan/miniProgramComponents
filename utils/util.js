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
    let str='';
    Object.keys(obj).map((item, index) => {
        str+=item+':'+obj[item]+';'
    });
    return str
};

module.exports = {
    formatTime,
    objToCssStr
};
