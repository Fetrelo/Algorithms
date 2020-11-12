/*
* @author Felipe Pulido
* @since 2020/11/07
* Problem URL: https://leetcode.com/problems/palindrome-number/
*/

var isPalindrome = function(x) {
    if(x < 0)
        return false;
    const m = x;
    let n = 0;
    while(x > 0) {
        n = n*10+(x%10);
        x = parseInt(x / 10);
    }
    return m == n;
};