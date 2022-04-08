var num = prompt("Enter your number : ")
for (let i =1 ; i <= num ;i++){
    cnt = 0 ; 
    for(let j = 2 ; j <=2 ; j++){
        if(i%j==0){
            cnt++;
            break;
        }
    }
    if(cnt == 0 && i !=1){
        document.write(i + " ");
    }
}