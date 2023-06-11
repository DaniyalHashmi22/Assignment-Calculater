function display(Numbers){
document.getElementById("inputBox").value += Numbers;
}
function calculate(){
    var x=document.getElementById("inputBox").value;
    var y = eval(x);
document.getElementById("inputBox").value=y;

}
function clear1(){
    document.getElementById("inputBox").value="";

}

function del(){
    var inputBox =document.getElementById("inputBox");
    var inputtext =inputBox.value;
    inputBox.value = inputtext.slice(0,-1);
}
