const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let separator = options.separator || '+';
    let repeatTimes = options.repeatTimes || 1;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
    let newStr = String(str);
    let newAddition = String(addition);
    let newAdd;
    let res = str;
    let lastIndexOfSep = 0;
    if (addition !== undefined) {
        newAdd = newAddition.repeat(additionRepeatTimes);
        newAdd = newAdd.replaceAll(newAddition, `${newAddition}${additionSeparator}`);
        lastIndexOfSep = newAdd.lastIndexOf(additionSeparator);
        newAdd = newAdd.slice(0, lastIndexOfSep);
        res = `${str}${newAdd}`;
    }
    newStr = newStr.repeat(repeatTimes);
    let result = newStr.replaceAll(str, res).replaceAll(res, `${res}${separator}`);

    let index = result.lastIndexOf(separator);
    return result.slice(0, index);
}
module.exports = {
    repeater
};