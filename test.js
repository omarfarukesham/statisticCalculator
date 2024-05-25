const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];

const count = {}

numbersArr.forEach((el)=>{
    if(count[el]){
        count[el] += 1
    }else{
        count[el] = 1
    }
})

console.log(Object.values(count))

console.log(Object.keys(count))