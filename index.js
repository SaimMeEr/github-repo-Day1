const number = [1,3,5,4,2,7,8]
for(let i=0;i<=number.length;i++){
    if(number[i]%2===0){
        console.log(number[i],"is a prime number")
    }
};
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
