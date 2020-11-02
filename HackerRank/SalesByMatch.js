/*
* @author Felipe Pulido
* @since 2020/11/01
* Problem URL: https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    for(n--; n >= 0; n--)
        socks[ar[n]] = (socks[ar[n]] || 0)+1;

    for(let p in socks)
        pairs += parseInt(Math.floor(socks[p]/2));

    return pairs;
}