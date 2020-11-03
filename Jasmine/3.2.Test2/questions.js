let CreationTableauLangages =  () => {
    return tableau = ['Html', 'CSS', 'Java', 'PHP']

}

let CreationTableauNombres =  () => {
    return tableau = [0, 1, 2, 3, 4, 5,]

}

let RemplacementElement =  (langages) => {
    langages[2] = 'Javascript'
    return langages

}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python')
    return langages

}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2,-1)
    return nombres

}

let SuppressionPremierElement =  (langages) => {
    langages.shift()
    return langages

}

let SuppressionDernierElement =  (langages) => {
    langages.pop()
    return langages

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    tableau = reseaux_sociaux_chaine.split(',')
    return tableau


}

let ConversionTableauChaine =  (langages) => {
    chaine = langages.toString(',')
    return chaine

}

let TriTableau =  (reseaux_sociaux) => {
    reseaux_sociaux.sort()
    return reseaux_sociaux
    


}

let InversionTableau =  (reseaux_sociaux) =>{
    reseaux_sociaux.reverse()
    return reseaux_sociaux

}
