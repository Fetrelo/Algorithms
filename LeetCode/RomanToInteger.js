/*
* @author Felipe Pulido
* @since 2020/11/07
* Problem URL: https://leetcode.com/problems/roman-to-integer/
*/

var romanToInt = function(s) {
    const val = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        let curr = val[s[i]];
        let next = val[s[i+1]];
        if(next && curr < next) {
            sum -= curr;
        } else {
            sum += curr;
        }
    }
    return sum;
};