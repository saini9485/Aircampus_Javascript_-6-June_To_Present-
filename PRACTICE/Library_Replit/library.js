//find the fine of library 
//1. 0---5days ->RS 0/days
//2. 6---10days ->RS 3/days
//3. 11---15days ->RS 4/days
//4. >15days ->RS 5/days
function CalculateCharge(days,fine){
    if(days<=5){
        fine = days*0;
    }else if (days<=6 && days>=10){
        fine = (days-5)*5
    }else if(days<=11 && days >=15){
        fine =(days-10)*4+(5*3)
    }else if(days>15){
        fine =(days-15)*5+(5*3)+(5*4)
    }
    return fine;
}
console.log(CalculateCharge(10))