"use strict";

//     let m = +prompt("M");
//     let n = +prompt("N");

// function fac (g){
//     let M =1;
//         for(let i= 1; i<=g; i++){
//         M *= i;
//         }
//     return M;
//     }
// let C= (fac(m)+ fac(n))/fac(m+1);
// alert(C);

///////////////////////////////////////////////////////
// let result ='';
// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }
  
//   result = (a + b < 4) ? 'Мало' : 'Много';

//   let s= (a+b);
//   switch (s){
//     case 3:
//         result = 'Мало';
//         break;
//     case 4:
//         result = 'Много';
//         break;
//   }
///////////////////////////////////////////////
// for (let i = 0; i < 3; i++) {
//     alert( "номер " + i + "!" );
//   }

// let i =0;
// while (i<3){
//     alert( "номер " + i + "!" );
//     i++;
// }

// let i =0;
// do {
//     alert( "номер " + i + "!" );
//     i++;
// }while (i<3);
/////////////////////////////////////////

let q = prompt("Введи количесво блоков");
let w = prompt('Введи количество картинок', "до 11 картинок");
let w1 ="";
    for (let k= 1; k<=2; k++){
        if(w<=11){
          w1=w;
        }else{
          w = prompt('Введи количество картинок', "до 11 картинок");
          k--;
        }
    }


 let div1 = "<div>", c=1;

  for( let j=1; j<=q; j++){
        div1 += "<div>";
          for (let i = 1; i<=w1; i++){
            div1+= `<img src="images/${i}.jpg" style="border-style: solid; border-color:green ; width: 100px;">`;
          
          }
        div1 +="</div>";
        }      
 div1 +="</div>";
 id.innerHTML= div1;