
function reverseSentense(str){
    let newSentense = ''
    for(let i = str.length -1; i >= 0; i--){
        if(str[i] === " " || newSentense > 0){
console.log('empty')
        }

        newSentense += str[i]
    }
    return newSentense;
}


const getResult = reverseSentense('i am a boy')

console.log(getResult)