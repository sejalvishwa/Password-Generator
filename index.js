const btn = document.getElementById("btnPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const Upcase = document.getElementById("uppercase");
const lowCase = document.getElementById("lowercase");
const numCase = document.getElementById("number");
const SymCase = document.getElementById("symbol");
const CopyBtn = document.getElementById("copyBtn");
rangeVal.innerText= slider.value;

slider.addEventListener('input' , (e) => {
    rangeVal.innerText= e.target.value;
})

btn.addEventListener('click' , () => {
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolsStr= '!@#$%^&*(){}?/<>,.-=`~';

    let finalStr = '';

    if(Upcase.checked){
       finalStr+= capitalLetter;
    }
    if(lowCase.checked){
       finalStr+= smallLetter;
    }
    if(numCase.checked){
       finalStr+= numberStr;
    }
    if(SymCase.checked){
       finalStr+= symbolsStr;
    }

    if(finalStr == ''){
        alert("Please select atleast one field")
    }
  
    let latestPass = '';    


    for(let i = 0 ; i < slider.value ; i++){
        let randNum = Math.floor(Math.random() * finalStr.length)
        // latestPass += finalStr[randNum];
        latestPass += finalStr.charAt(randNum);
        
    }
   newPass.innerText = `${latestPass}`;
})

CopyBtn.addEventListener('click' , () => {
    window.navigator.clipboard.writeText(newPass.innerText)
    
})