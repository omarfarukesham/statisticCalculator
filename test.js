// function filterFun(names){
//     let filterArray = []
//     for(let i = 0; i < names.length; i++){
//         let name = names[i]
//         if(filterArray.indexOf(name) == -1){
//             filterArray.push(name)
//         }
//     }
//     return filterArray;
// }

function duplicateRemoved(names){
    const newArray = []
    for(let i = 0; i < names.length; i++){
        let name =  names[i]
        let isDuplicate = false;
        for(let j = 0; j < newArray.length; j++){
            if(newArray[j] === name){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            newArray.push(name)
        }
    }

    return newArray;
}

const names = ['ram', 'ram', 'rani', 'rain', 'nur']
const numbers = [1,22,2,33,3,44,4,44,4,5,5,6,6,7]

const getResult = duplicateRemoved(names)
console.log(getResult)