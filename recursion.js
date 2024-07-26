function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    
    return result;
}

function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let prev = fibs(n - 1);
    let result = [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
    
    return result;
}

console.log(fibs(2));
console.log(fibsRec(2));
console.log(fibs(6));
console.log(fibsRec(6));
console.log(fibs(10));
console.log(fibsRec(10));