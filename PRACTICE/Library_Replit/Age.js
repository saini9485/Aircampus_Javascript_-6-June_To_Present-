let year = parseInt(process.argv[2])
let date = parseInt(process.argv[3])
let month = parseInt(process.argv[4])
let countyear =0
let countdate =0
let countmonth =0
for(let i= year;i<2022;i++){
count++
}
// console.log(count)
for(let j=date;j<=30;j++){
    countdate++
}
// console.log(countdate)
for(let a= month;a<=12;a++){
    countmonth ++
// console.log(countmonth)
}
console.log(`Your age is ${count} years ${countmonth} months and ${countdate} days  `)