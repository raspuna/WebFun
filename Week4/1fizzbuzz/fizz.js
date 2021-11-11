
for(var i = 1; i <= 100; i++) {
    var fizzbuz = ""
    if (i % 3 == 0) {
        fizzbuz += "Fizz";
    }
    if (i % 5 == 0) {
        fizzbuz += "Buzz";
    }
    if(!fizzbuz) {
        fizzbuz = i;
    }
    console.log(fizzbuz);
}


