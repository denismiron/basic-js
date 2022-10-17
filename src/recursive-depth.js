const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let i = 0;
        while (i < arr.length) {
            if (Array.isArray(arr[i])) {
                let newDepth = this.calculateDepth(arr[i]) + 1;
                depth = depth < newDepth ? newDepth : depth;
            }
            i++;
        }
        return depth;
    }
}

module.exports = {
    DepthCalculator
};