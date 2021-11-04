

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