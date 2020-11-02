// https://www.interviewcake.com/question/javascript/product-of-other-numbers

/*
* @author Felipe Pulido
* @since 2020/11/02
*/

function getProductsGreedy(intArray) {
    if(intArray.length < 2)
        throw new Exception("Error");
    let ret = new Array(intArray.length).fill(1);

    let i = 1;
    for(; i < intArray.length; i++)
        ret[i] = intArray[i-1] * ret[i-1];
    
    let prd = 1;
    for(i -= 2; i >= 0; i--) {
        prd *= intArray[i+1];
        ret[i] *= prd;
    }
    return ret;
}


function getProductsBruteForce(intArray) {
    let ret = [];
    if(intArray.length < 2)
        throw new Exception("Error");
    
    for(let i = 0; i < intArray.length; i++) {
        for(let j = 0; j < intArray.length; j++) {
            if(j === i)
                continue;
            ret[i] = (ret[i] || (ret[i] === 0? 0 : 1)) * intArray[j];
        }
    }
    return ret;
}