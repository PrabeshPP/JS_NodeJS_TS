var oddCells = function(m, n, indices) {
    let arr=Array(m).fill().map(()=>Array(n));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            arr[i][j]=0;
        }
    }
    for(let i=0;i<indices.length;i++){
        
        let row=indices[i][0];
        let col=indices[i][1];
       
        
        for(let j=0;j<n;j++){
            
            arr[row][j]+=1;
            
        }
        for(let k=0;k<m;k++){
            arr[k][col]+=1;
        }
        
    }
    console.log(arr);
    
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i][j])%2!=0){
                count++;
                
            }
        }
    }

    

    return count;
    
    
};

let counter=oddCells(2,3,[[0,1],[1,1]]);

console.log(counter);
