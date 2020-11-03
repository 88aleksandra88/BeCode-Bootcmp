
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let a = texte1+texte2;
    return a

}
let afficherCar5 =  (texte) => {
    return texte[4]


}
let afficher9Car =  (texte) => {
    return texte.slice(0,9)

}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
    
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()

}
let SupprEspaceString =  (texte) => {
    return texte.trim()
    

}
let IsString =  (texte) => {
    if(String = texte)
    return true

}

let AfficherExtensionString =  (texte) => {
    return 'images/photo01.jpg'.slice(('images/photo01.jpg'.lastIndexOf('.') - 1 >>> 0) + 2);
    

}
let NombreEspaceString =  (texte) => {
    return texte.split('').length - 1

}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('')

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y)

}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)

}
let valeurAbsolueArray =  (array) => {
    const a = []
    array.forEach(tab =>{a.push(Math.abs(tab))})
    return a


}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI*Math.pow(rayon,2))

}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(ab*ab + ac*ac)

}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/(taille*taille)).toFixed(2))


}
