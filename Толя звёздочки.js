// 1. 

// let i=1;
// let result=1
// while(i<11){
//     result=result*2
//     i++
// }
// console.log(result)



//или



// let a = 2
// console.log(a**10) 


//2.


//  const stepen = function(num){

//     return(2**num)
// }
// console.log(stepen(10))
 


// или




// const step = function(chislo){ 
    
//     return Math.pow (2,chislo)

// }
// console.log(step(10))



//3. 



// let a = ':)'
// let b = ''
// for(let i=1;i<=2;i++){
// b+=a
// console.log(b)
// }




//4.


// let i=1
// function printSmile(stroka, numberOfRows){
//     while(i<=numberOfRows){
//     i++
//           console.log(stroka.repeat(i))
//     }
// }
// printSmile('*_*', 6)




// //5.
// function isPalindrom(word){
//     return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
// }
    
// console.log(`${isPalindrom('LepsSpel')? 'It is a palindrom' : 'It is not a palindrom'}`)
    






//6.


// function getWordStructure(word){
//       const vowels = 'aeiou'.split('')
//       const consonants = 'bcdfghklmnpqrstvwxyz'.split('')
//       let numberOfVowels = 0;
//       let numberOfConsonants = 0;
//   for(char of word.toLowerCase()){
//       if(vowels.includes(char)) numberOfVowels++;
//       if(consonants.includes(char)) numberOfConsonants++;
//   }
//   console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных букв`)
// }

// getWordStructure('case')
// getWordStructure('catterpillar')