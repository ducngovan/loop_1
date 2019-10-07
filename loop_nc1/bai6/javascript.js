
let c;
let d=0;
for(let i=1; i<=210; i++){
    c= i%7;
    if(c==0){
        d +=i;
    }
    continue;
}alert(d);



// var a= prompt("nhap a")
// while ( a ==0 ) {
//     if  (a%5==0){
//         alert('0 la so dau tien chia het cho 5');
//         break;
//     }
// }