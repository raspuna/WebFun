requestNum = 2;
connectionNum = 418;

function editProfile(element){
    userName = document.getElementById("user-id");
    if (userName.innerText == "Jane Doe") {
        userName.innerText = "James Doe";
    } else {
        userName.innerText = "Jane Doe";
    }
    return 0;
}

function acceptRequest(element){
    requestNum -= 1;
    connectionNum += 1;
    requestText = document.getElementById("request-number");
    requestText.innerText = requestNum;
    connectionText = document.getElementById("connection-number");
    connectionText.innerText = connectionNum;
    console.log(element);
    console.log(element.parentElement.parentElement)
    element.parentElement.parentElement.remove();
    return 0; 
}

function rejectRequest(element){
    requestNum -= 1;
    requestText = document.getElementById("request-number");
    requestText.innerText = requestNum;
    element.parentElement.parentElement.remove();
    return 0;
}