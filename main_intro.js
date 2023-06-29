

//primo esercizio
// function pow(base, exponent){
//     let result = base
//     for (let i = 1; i < exponent; i++){
//         result = result * base
//     } 
//     return result
    
// }
// const topolino = pow(5,3)
































































































































































































































































































































































// console.log(topolino)






// secondo esercizio 
// definire una funzione 'correctCase' che prende in input una stringa
// e la restituisce transformando la prima lettera in maiuscolo

// 'la casa blue' => 'La casa blu'








// function correctCase(selectedString){
//     const house = selectedString[0].toUpperCase() + selectedString.substring(1);
//     return house;
// }

// const topolino = ('la casa blu');


// console.log(correctCase(topolino));







//3) definire una funzione 'min' che dati due numeri
// restituisca il minore


// function min(para1, para2) {
//     if (para1 > para2){
//         const result = para2;
//         return result
//     } else {
//         const result2 = para1
//         return result2;

//     }
//     // console.log('parametro 2', parameter2);
    
// }


// const para1 = 5

// const para2 = 6

// console.log(min(para1,para2));


// ---------------------------------------------------------

// 4) definire una funzione chiamata 'clamp' che prende come parametri 
// tre numeri: valore, massimo e minimo.
// se valore Ã¨ minore di minimo, restituisce minimo
// se valore Ã¨ maggiore di massimo, restituisce massimo
// altrimenti restituisce valore.

// function clamp(value, max, minimo) {
//     if (value < minimo){
//         result = minimo;
//     } else if (value > max){
//          result = max;
//     } else {
//         result= value;

//     }
//     return result;


    
// }


// const value = 5

// const max = 6

// const minimo = 10

// console.log(min(value,max,minimo));









// definire una funzione chessboard 

// function chessBoard(size){
    
//     let chessboardString = '';

//     for (let i=0; i< size; i++) {
//         for (let j= 0; j< size; j++) {
           
//             if (( i -j) % 2 === 0) {
//                 chessboardString = chessboardString + '■';
//             } if ( (i-j) % 2 !== 0){
//                  chessboardString = chessboardString + '□';

//             }
//         }
        
//       chessboard = chessboard + "\n";
        
//     }
        
//         return chessboardString;
// }

// console.log('chessboard', chessBoard(19));



//6) definire una funzione  'ellipse' che prende come parametro una stringa
// se la stringa è minore di 20 caratteri la ritorna non modificata 
// altrimenti la taglia a 20 caratteri e aggiunge 3 puntini.



// function ellipse(str) {
//     if (str.length <= 20) {
//       return str;
//     } else {
//       return str.slice(0, 20) + '...';
//     }
//   }


//   console.log(ellipse('Questo è un esempio di stringa.')); 
//   console.log(ellipse('Questa è una stringa corta.'));







// numero 7



// function reverseString(string) {
//     return string.split('').reverse().join('');
//   }

// var stringa = "Ciao, mondo!";
// var stringaInvertita = reverseString(stringa);
// console.log(stringaInvertita);





// ciao rosa


function stringReverse(selectedString){

    let newString = '';

    for (let i = (selectedString.length -1) ; i >= 0; i--) {
        const char = selectedString [i];
        newString = newString + char;

    }
    return newString;
}

console.log('reverse', stringReverse('la casa rosa'))

//   -------------------
  // Versione easy --------------

// let chessboard= '';

// for (let i=0; i<8; i++){
     
//     if (i % 2 === 0) {
//         chessboard = chessboard + '# # # #\n'

//     } else {
//         chessboard = chessboard + '# # # #\n'
//     }



// }

// console.log(chessboard);











// ---------------------------LEZIONE IN CLASSE-----------------------------------------------
// const minimum = firstNumber > secondNumber ? secondNumber : firstNumber;


