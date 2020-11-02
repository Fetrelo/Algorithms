/*
* @author Felipe Pulido
* @since 2020/10/31
* Problem URL: https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

// Second approach
function compareTriplets(a, b) {
    let results = [0,0];
    for(let i = 0; i < a.length; i++) {
        results[0] += a[i] > b[i] ? 1 : 0;
        results[1] += a[i] < b[i] ? 1 : 0;
    }
    return results;
}

// Second first approach
function compareTriplets(a, b) {
    let results = [0,0];
    for(let i = 0; i < a.length; i++) {
        let pos = a[i] > b[i] ? 0 : 1;
        if(a[i] != b[i])
            results[pos]++;
    }
    return results;
}