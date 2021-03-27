// Your code here
function mapToNegativize(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(-array[i])
    }
    return newArray
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(2*array[i])
    }
    return newArray
}

function mapToSquare(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] * array[i])
    }
    return newArray
}

function reduceToTotal(array, start=0){
    let memo = start
    for(let i = 0; i < array.length; i++){
        memo += array[i]
    }
    return memo
} 
// jfc i do not understand what is wrong with this implementation, or how it substantively differs from the one below. 

// ahhhhhhhhh oh ahhhhh
// I left out 'let' on line 32

// function reduceToTotal(src, startingPoint=0) {
//     let total = startingPoint
//     for (let i = 0; i < src.length; i++ ) {
//       total = total + src[i]
//     }
//     return total
//   }

  function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!!array[i] === false){
            return false
        }
    }
    return true
  }

  function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!!array[i] === true){
            return true
        }
    }
    return false
  }