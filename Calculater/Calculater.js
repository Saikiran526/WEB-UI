const display=document.getElementById('display');
const buttons=Array.from(document.getElementsByTagName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText === "Error")
            display.innerText="";
        if(e.target.innerText === "C")
            display.innerText=" ";
        else if(e.target.innerText === "="){
            try{
                display.innerText=eval(display.innerText);
            }catch{
                display.innerText="Error";
            }
        }
        else{
            display.innerText=display.innerText+e.target.innerText;
        }
    });
});


// if(e.target.innerText === 'C')
//     display.innerText='';
// else if(e.target.innerText === '=' )
//     try{
//         display.innerText=eval(display.innerText);
//     }catch{
//         display.innerText='Error';
//     }
// else
// display=display+e.target.innerText;