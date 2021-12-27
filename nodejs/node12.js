function random(){
   let x=0;

// while loop
    while(x<10){
        console.log(x);
        x+=1;
    }

// for loop
x=10;
for(i=0;i<=x;i++){
    if(i%2==0){
    console.log("Even number"+i);
    }
}
// do loop
 x=0;
do {
    console.log(x);
    x++;
} while (x<10);
}



random();