// opdracht A

const addTheWordCool = function(array){ 
     const niceWords = ["nice", "awesome", "tof"];
     niceWords.push("cool");
     console.log(niceWords)
 }

 console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// resultaat: ["nice", "awesome", "tof", "cool"]

// opdracht B

const amountOfElementsInArray = function(array){
    let fruits = ['appels', 'peren', 'citroenen'];
    return fruits.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
//3

// opdracht C

const selectBelgiumFromBenelux = function(array){
    let benelux = ["Belgie", "Nederland", "Luxemburg"];
    return benelux[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));  
// resultaat: "Belgie" 

// opdracht D

const lastElementInArray = function(array) {
    const animals = ["Haas", "Cavia", "Kip", "Schildpad"];
    return animals[3]
}

 console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

//opdracht E

 const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
 const impeachTrumpSlice = function(array) {
     return presidents.slice(1)
    
 }
 const impeachTrumpSplice = function(array) {
       return presidents.splice(1)
 }

 console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
 console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

 // opdracht F
 const stringsTogether = function(array){
     let myStrings = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
     return myStrings.join(" ");
 } 

 console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
 //resultaat: "Winc Academy is leuk ;-}"

 // opdracht G

const combineArrays = function(){
    let array1 = [1,2,3];
    let array2 = [4,5,6];
    return array1.concat(array2)
}
console.log(combineArrays([1,2,3], [4,5,6])) 
// resultaat: [1,2,3,4,5,6]






