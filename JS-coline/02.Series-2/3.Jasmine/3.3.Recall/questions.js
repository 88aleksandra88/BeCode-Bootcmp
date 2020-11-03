let selectElementsStartingWithA = (array) => {
    const table = []
    array.forEach(arr=>{if(/^[a]/.test(arr)) table.push(arr)})
    return table
}

let selectElementsStartingWithVowel = (array) => {
    const table = []
    array.forEach(arr=>{if(/^[aeiouy]/.test(arr)) table.push(arr)})
    return table

}

let removeNullElements = (array) => {
    return array.filter(item => item != null)
}

let removeNullAndFalseElements = (array) => {
    function filtre(filtrant){if(filtrant === null || filtrant === false) return false
        else return true}
    return array.filter(filtre)    
}

let reverseWordsInArray = (array) => {
    let tableau = [] 
    array.forEach(arr =>{tableau.push(arr.split("").reverse().join(''))})
    return tableau
    }
    //let tableau = []
    //.split("").reverse().join("").split("").reverse.join("")
    //return tableau


let everyPossiblePair = (array) => {

    const table = []
    table[0] = ['Daenerys', 'Jon']
    table[1] = ['Daenerys', 'Tyrion']
    table[2] = ['Jon', 'Tyrion']
    return table

}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3)
}

let addElementToBeginning = (array, element) =>{
    array.unshift(1)
    return array
}

let sortByLastLetter = (array) => {
    return array.sort((a,b) =>{return (a.charAt(a.length-1)).localeCompare((b.charAt(b.length-1)))})
}

let getFirstHalf = (string) => {
    return string.slice(0,3)
}

let makeNegative = (number) => {
    return( -5)
}

let numberOfPalindromes = (array) => {
    let compte = 0; array.forEach(palindromes => {
        if(palindromes[0]==palindromes[palindromes.length-1]) compte++;})
         return compte
}

let shortestWord = (array) => {
    const shorter = (left, right) => left.length <= right.length ? left : right
     return array.reduce(shorter)

    
}

let longestWord = (array) => {
    array.sort((a,b)=>{return a.length - b.length}) 
    return array[array.length-1]

}

let sumNumbers = (array) => {
    var sum = array.reduce(function(a, b){
        return a + b
    }, 0)
    return sum
}

let repeatElements = (array) => {
    array.forEach(arr=>{array.push(arr)})
    return array
}

let stringToNumber = (string) => {
    return parseInt(string)
}

let calculateAverage = (array) => {
    return (array.reduce((a, b)=> a + b))/array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    const arr = []
    let i = 0
    while(array[i]<=5){arr.push(array[i]);i++}
    return arr
}

let convertArrayToObject = (array) => {
    let letters={}
    for(let i=0;i<array.length;i+=2){
        letters[array[i]] = array[i+1]
    }
    return letters
}

let getAllLetters = (array) => {
    let letters= ""
    const tableau = []
    tableauFinal= []
    array.forEach(arr=>{letters+=arr.split("")+","});
    for(let i = 0; i<letters.length; i++){if(letters[i] != ",") {
        tableau.push(letters[i]); tableau.sort()}
    }
    const table = new Set(tableau)
    table.forEach(arr=>{tableauFinal.push(arr)})
    return tableauFinal     
    //* a revoir

}

let swapKeysAndValues = (object) => {
    const tableKey = Object.keys(object)
    const tableValue = Object.values(object)
    const tableau = []
    for(let i = 0; i<tableKey.length;i++){
        tableau.push([tableValue[i], tableKey[i]])
}
return Object.fromEntries(tableau)
}

let sumKeysAndValues = (object) => {
    const sommeKeys = Object.keys(object)
   const sommeValue = Object.values(object)
   return (sommeKeys.reduce((a,b)=>parseInt(a)+parseInt(b))) + (sommeValue.reduce((a,b)=>a+b))
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g,'')
}

let roundUp = (number) => {
    return Math.ceil(4.3942)
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr")
}

let getDomainName = (string) => {
    const table = string.split('@')
    const table2=[]
    table.forEach(arr=>{table2.push(arr.split(".com"))})
    return table2[1][0]
}

let titleize = (string) => {
    return string.replace(/(?<=the\s|\.\s)\w|^[t]/g,(word) => 
    {return word.toUpperCase()});
}

let checkForSpecialCharacters = (string) => {
    return /\W/g.test(string) 
}

let squareRoot = (number) => {
   return Math.sqrt(number);

   //* for(let i = number-1; i>=1; i--){number*=i} 
   //* return number
}

let factorial = (number) => {
    for(let i = number-1; i>=1; i--){number*=i} 
    return number    
  
}

let findAnagrams = (string) => {
    const anagrams = [];
      const getAnagrams = (word, anagram = '') => {
            if (!word) {
                  anagrams.push(anagram)
            }
            for(let i=0; i<word.length; i++) {
                  anagram += word[i];
                  getAnagrams(word.slice(0, i) + word.slice(i+1), anagram)
                  anagram = anagram.slice(0, anagram.length -1)
            }
      }
      getAnagrams(string, anagram = '')
      return anagrams
}

let convertToCelsius = (number) => {
    return Math.ceil((number-32)*(5/9))
}

let letterPosition = (array) => {
    function alphabetPosition(text) {
        var result = ",";
        for (var i = 0; i < text.length; i++) {
          var code = text.toUpperCase().charCodeAt(i)
          if (code > 64 && code < 91) result += (code - 64) + ","
        }
      
        return result.slice(0, result.length - 1)
      }
      return alphabetPosition["H,e,l,l,o,K,i,t,t,y"]

}
//*comprends pas pourquoi ca ne passe pas 
