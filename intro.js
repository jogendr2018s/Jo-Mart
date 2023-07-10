const a='WELCOME TO JOMART ENJOY SHOPPING'
var innerhtml=''
var i=0;
var b = setInterval(()=>{
    if (i< a.length){
        innerhtml += a[i];
        document.querySelector('.p').innerHTML=innerhtml;
        i++;
    }else{
        clearInterval(b); 
    }
},200)