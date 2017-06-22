/**
 * @fileOverview chinese2number.js
 *      转换中文数字到数字.
 */

let chineseNumber = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
let chinesePower = ["零", "十", "百", "千", "万", "十万", "百万", "千万", "亿", "十亿", "百亿", "千亿", "万亿", "十万亿", "百万亿", "千万亿"];

// console.log(chinesePower[6 - 6 % 4]);
// console.log(chinesePower[7 - 7 % 4]);
// console.log(chinesePower[8 - 8 % 4]);
// console.log(chinesePower[13 - 13 % 4]);

// return;

function chinese2number_single(str) {

    let v, p;

    v = chineseNumber.indexOf(str);
    p = chinesePower.indexOf(str);

    if (v == -1 && p == -1) {
        return Number.NaN;
    }

    return v !== -1 ? v : Math.pow(10, p);
}

/**
 * 2个长度的, 变化较多, 十x,或n百,n千等.
 * @param {string} str 待转换字符串
 * @return {number} 结果数字
 */
function chinese2number_len(str) {

    let max = 0,
        p = 0;

    let lastPower = (chinesePower.indexOf(str[str.length - 2]) - 1);
    if (lastPower > 0) {
        str += chinesePower[lastPower];
        // console.log(str);
    }

    // 变化补齐
    let charts = str.split('').reverse().map((n, index) => {

        let value = chinese2number_single(n);

        let basePowerStr = '';
        p = chinesePower.indexOf(n);
        if (p != -1) {

            max = Math.max(p, max++);

            // 以万为基础的基础权位.
            basePowerStr = max < 4 ? "" : chinesePower[max - max % 4];
            value = chinese2number_single(basePowerStr == n ? n : n + basePowerStr) || value;
            // console.log(n, max, basePowerStr, value);
        }

        return value;
    });

    // console.log(charts);

    let len = charts.length;
    p = 1;

    return charts.reduce((current, value, index, arr) => {

        if (index == len - 1 && value >= 10) {
            return current + 1 * value * p;
        } else if (value >= 10) {
            p = value;
            return current;
        } else {
            let op = p;
            p = 1;
            return current + value * op;
        }

    }, 0);
}


function chinese2Number(str) {
    let len = str.length;
    switch (len) {
        case 1:
            return chinese2number_single(str);
        case 2:
        default:
            return chinese2number_len(str);
    }
}

module.exports = chinese2Number;
