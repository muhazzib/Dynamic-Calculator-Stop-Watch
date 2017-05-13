var display=document.getElementById("display")
var firstvalue,secondvalue,oper,equal;
function number(x){
 x = x.toString()
 if(oper==undefined){
     if(firstvalue==undefined){
         firstvalue=x;
     }
     else{
         firstvalue+=x;
     }
     display.innerHTML=firstvalue;
 }
 else{
if(secondvalue==undefined){
    secondvalue=x;
}
else{
    secondvalue +=x;
}
display.innerHTML=secondvalue;
    }
}

function operator(y){
    oper=y;
    display.innerHTML=oper;
}

function equal(){
    firstvalue=parseInt(firstvalue);
    secondvalue=parseInt(secondvalue);
    if(oper=='+'){
        equal=firstvalue+secondvalue;
                display.innerHTML=equal;
    }
    else if(oper=='-'){
        equal=firstvalue-secondvalue;
                display.innerHTML=equal;
    }
    else if(oper=='/'){
        equal=firstvalue/secondvalue;
                display.innerHTML=equal;
    }
   else if(oper=='*'){
        equal=firstvalue*secondvalue;
                display.innerHTML=equal;
    }
        else{
        display.innerHTML="Enter value first";
    }
}







var display2=document.getElementById("display2");
var min=0;
var sec=0;
var hour=0;

function stopwatch(){
    sec++;
    if(sec>=60){
        min++;
        sec=0
    }
    if(min>=60){
            hour++;
            min=0;
        }
    display2.innerHTML=(hour>9 ? +hour:"0"+hour)+":"+(min>9 ? +min:"0"+min)+":"+(sec>9 ? +sec:"0"+sec);
}
setInterval(stopwatch,1000);




