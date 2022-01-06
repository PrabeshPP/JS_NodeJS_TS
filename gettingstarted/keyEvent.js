
function selectElement(){
    const evnt=document.getElementById('result');
    const input=document.getElementById('field');
    const Colors=document.getElementById('colors');
   

  if(Colors.value=='red'){
      evnt.innerHTML=`${input.value} choosed ${Colors.value}`;
      evnt.style.color='red';
  }else if(Colors.value=='blue'){
    evnt.innerHTML=`${input.value} choosed ${Colors.value}`;
    evnt.style.color='blue';
  }else {
    evnt.innerHTML=`${input.value} choosed ${Colors.value}`;
    evnt.style.color='purple';
  }
  
  
    
}