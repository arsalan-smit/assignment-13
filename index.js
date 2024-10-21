var checkk= +prompt("enter the number 1 to 6");
var g=Math.floor(Math.random()*6+1);
while(checkk !== g){
    alert("wrong num!");
    checkk= +prompt("enter the number 1 to 6")
}
document.write("<h1>Congratulation</h1>")