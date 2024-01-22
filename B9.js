function sumZero(array) {
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==0){
                console.log(array[i],array[j]);
                break;
            }
        }
    }
}
sumZero([-1, 0, 1, 2]);