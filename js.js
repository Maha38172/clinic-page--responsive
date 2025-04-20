"use strict";

"use strict";

let result=document.querySelector(".result");

let input=document.querySelector(".input");

let buttons=document.querySelectorAll("button");

let num1="";

let num2="";

let operatoer="";



buttons.forEach(button=>{

    button.addEventListener("click",function(){

        let datakey=button.dataset.key;

       

        

        if(datakey==="+"||datakey==="*"||datakey==="/"||datakey==="-"||datakey==="%"){

            operatoer=datakey;

            input.value+=datakey;

        }else if(datakey==="AC"){

            input.value='';

         }else if(datakey==="CC"){

            input.value=input.value.slice(0,-1);

         } else{

            input.value+=datakey;

            num1?num2+=datakey:num1+=datakey

        }

    })

})



result.addEventListener("click",function(){

    let finalresult = 0;

    if(operatoer==="+"){

        finalresult=parseFloat(num1)+parseFloat(num2);

    }else if(operatoer==="-"){

        finalresult=parseFloat(num1)-parseFloat(num2);

    }else if(operatoer==="/"){

        finalresult=parseFloat(num1)/parseFloat(num2);

    }else if(operatoer==="*"){

        finalresult=parseFloat(num1)*parseFloat(num2);

    }else if(operatoer==="%"){

        finalresult=parseFloat(num1)/100 * parseFloat(num2);

        num1="";

        num2="";

    };

    input.value=finalresult;


})
