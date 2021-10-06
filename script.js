let input=document.getElementById("input");
let operator=document.querySelectorAll(".operator");
let btnall=document.querySelectorAll(".num");
let result=document.getElementById("ans");
let reset=document.getElementById("clr");
let calculatestr=" ";
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',()=>{
       calculatestr=calculatestr + operator[i].innerHTML;
       input.value=calculatestr;
    })
}
for(let j=0;j<btnall.length;j++){

    btnall[j].addEventListener('click',()=>{
       calculatestr=calculatestr + btnall[j].innerHTML;
       input.value=calculatestr;
    })
}
for(let i=0;i<calculatestr.length;i++){
    let back=document.getElementById("back").addEventListener('click',()=>{
        let length=calculatestr.length;
        --length;
        input.value=calculatestr.substring(0,length);
        calculatestr=input.value;
    })
}
clr.addEventListener('click',()=>{
    calculatestr=" ";
    input.value=calculatestr;
})
ans.addEventListener('click',()=>{
   var an=eval(calculatestr);
   input.value=an;
})