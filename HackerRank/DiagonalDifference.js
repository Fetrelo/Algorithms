/*
* @author Felipe Pulido
* @since 2020/11/01
* Problem URL: https://www.hackerrank.com/challenges/diagonal-differences/problem
*/

function diagonalDifference(arr) {
    let a = 0;
    let b = 0;
    for(let i = 0; i < arr.length; i++) {
        a += arr[i][i];
        b += arr[i][arr.length-1-i];
    }
    return Math.abs(a - b);
}