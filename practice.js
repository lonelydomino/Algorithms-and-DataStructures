

const nemo = ["nemo"]
const everyone = ["dory", "nemo", "gill","marlin"]
const largeArray = new Array(1000).fill('nemo')

function findNemo(array) {
    let t0 = performance.now()
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log("nemo found!")
        }
    }
    let t1 = performance.now()
    console.log("call to find nemo took " + (t1 - t0) + " milliseconds")
}
findNemo(largeArray)


//O(n) - Linear Time
const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box))
}

//O(1) - Constant Time

const compressFirstBox = (boxes) => {
    console.log(boxes[0])
}

//O(2)
const compressFirstBox = (boxes) => {
    console.log(boxes[0])
    console.log(boxes[1])

}

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;//O(1)
    a = 50 + 3;//O(1)
  
    for (let i = 0; i < input.length; i++) {//O(n)
      anotherFunction();//O(n)
      let stranger = true;//O(n)
      a++;//O(n)
    }
    return a;//O(1)
  }

  // 3 + n + n + n + n
  // O (3+4n)