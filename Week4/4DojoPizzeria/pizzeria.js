function pizzaOven(crust, sauce, cheeses, toppings) {
    var newPizza = {};
    newPizza.crustType = crust;
    newPizza.sauceType = sauce;
    newPizza.cheeses = cheeses;
    newPizza.toppings = toppings;

    return newPizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms","olives","onions"]);

var hawaiian = pizzaOven("hand tossed", "marinara", ["mozzarella", "provolone"], 
                            ["pineapple", "smoked bacon", "sliced ham","red peppers"]
                        )
var philly = pizzaOven("crunchy thin crust", "garlic sauce", ["provolone", "american"], 
                            ["slices of steak", "onions","green peppers", "mushrooms"]
                        )


var menuOfPizza = [pizza1, pizza2, hawaiian, philly];

function randomPizza(){
    max = menuOfPizza.length;
    var idx = Math.floor(Math.random() * (max));
    console.log("You ordered : ");
    console.log(menuOfPizza[idx]);
    return menuOfPizza[idx];
}


randomPizza();