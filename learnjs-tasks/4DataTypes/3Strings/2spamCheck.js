function checkSpam(str , checkWord){
    let newString = str.toLowerCase()
      return  newString.includes(checkWord)
}

console.log(checkSpam('buy ViAgRA now', 'viagra'))