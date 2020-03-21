module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length;) {
        let pair = bracketsConfig[i].join('');
        if (str.includes(pair)) {
            str = str.replace(pair, '');
            i = 0;
        } else {
            i++;
        }
    }
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
};
