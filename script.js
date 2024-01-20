let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
const copyIcon=document.querySelector("#copyIcon");

sliderValue.innerHTML=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.innerHTML=inputSlider.value;  
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
    copyIcon.innerText="content_copy";
    copyIcon.title="";
});

let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSymbols="!~@#$%^&*_-=+></{}[]|?";


function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars+=lowercase.checked?lowerChars:"";  //
    allChars+=uppercase.checked?upperChars:"";  // all these checked functions
    allChars+=numbers.checked?allNumbers:"";   // 
    allChars+=symbols.checked?allSymbols:"";  //

    if(allChars=="" || allChars.length==0){
        return genPassword;
    }
    
     for(let i=1;i<=inputSlider.value;i++){
    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length)); //charAt function
     }
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!=""){
        navigator.clipboard.writeText(passBox.value); //this function also to write
         copyIcon.innerText="check";
         copyIcon.title="Password Copied";
    }

});