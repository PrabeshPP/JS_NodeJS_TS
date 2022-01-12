let container=document.getElementsByClassName("parent");
const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/name/nepal")
request.send();

request.addEventListener('load',function(){
    const [data]=JSON.parse(this.responseText);

})
