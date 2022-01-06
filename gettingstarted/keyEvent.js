
function selectElement(value){
    const evnt=document.getElementById('result');
    const input=document.getElementById('field');
    if(value=="red"){
        evnt.innerHTML=`you choosed a ${value} colors as your favourite color`;
        evnt.style.color='red';
    }else if(value=='blue'){
        evnt.innerHTML=`you choosed a ${value} colors as your favourite color`;
        evnt.style.color='blue';
    }else{
        evnt.innerHTML=`you choosed a ${value} colors as your favourite color`;
        evnt.style.color='purple';
    }
  
  
    
}