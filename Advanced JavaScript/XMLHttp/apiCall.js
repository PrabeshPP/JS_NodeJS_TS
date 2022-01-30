let container=document.getElementsByClassName("parent");
const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/name/united")
request.send();

request.addEventListener('loadz',function(){
    this.reponseText;

})
