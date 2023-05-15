var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var progress = document.getElementById('progress')

var next1 = document.getElementById('next1').addEventListener("click",()=>{
    form1.style.left = "-540px";
    form2.style.left = "0px"; 
    progress.style.width = "260px";
})
var next2 = document.getElementById('next2').addEventListener("click", ()=>{
    form2.style.left = "-450px";
    form3.style.left = "0px";
    progress.style.width = "400px";
});
var back1 = document.getElementById('back1').addEventListener('click', ()=>{
    form1.style.left = "0px";
    form2.style.left = "450px";  
    progress.style.width = "130px";
});
var back2 = document.getElementById('back2').addEventListener('click', ()=>{
    form2.style.left = "0px";
    form3.style.left = "450px";  
    progress.style.width = "240px";
});