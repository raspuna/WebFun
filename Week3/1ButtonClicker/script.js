function loginButton(element) {
    if (element.innerText == "Login"){
        element.innerText = "LogOut";
    } else {
        element.innerText ="Login";
    }
    return 0;
}
function addDefinition(element) {
    element.remove();
    return 0;
} 
function likeButton(element) {
    alert('Ninja was liked');
    return 0;
}