function fun(n)  
    {  
        let i, sum = 0;  
        if(n%2==0){
       // for (i = 2; i <= n; i+=2) {  
            sum += n;  
        }  
        return sum;  
    }  
    console.log(fun(1234))