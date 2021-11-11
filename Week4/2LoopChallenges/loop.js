// #1
console.log("print odd")
for(var i = 0; i <= 20; i++) {
    if(i % 2 == 1){
        console.log(i)
    }
}

// #2 
console.log("print Multiples of 3")
/*
for(var j = 99; j >= 1; j-=3) {
    console.log(j)
}*/
for(var j = 100; j > 0; j--) {
    if(j % 3 == 0) {
        console.log(j)
    }
}

// #3 sequence
console.log("sequence")
for (var k = 4; k >= -3.5; k -= 1.5){
    console.log(k);
}

// #4 Sigma
console.log("Sigma")
var sum = 0;
for (var l = 1; l <= 100; l++){
    sum += l;
}
console.log(sum);

// #5 Factorial
console.log("Factorial")
var product = 1;
var m = 1;
while(m < 12) {
    m++;
    product *= m;
}
console.log(product);
