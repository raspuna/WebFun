var likesText = " like(s)";
var count = [9, 12, 9];
var feedAuthor = {
    "neil-m" : 0,
    "nichole-k" : 1,
    "jim-r" : 2
}

function addLikes(idName){
    // get sibling 
    console.log(idName);

    sibling = document.getElementById(idName);
    console.log(sibling.innerText);
    console.log(count[feedAuthor[idName]]);

    // counter add by sibling id 
    count[feedAuthor[idName]] += 1;

    // update innerText
    sibling.innerText = count[feedAuthor[idName]] + likesText;
    return 0; 
}