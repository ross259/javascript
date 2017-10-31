var timesTwo = (num)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (num>0){
                resolve(num * 2)
            }else{
                reject("Number must be greater than 0.")
            }
        }, 1000);
    })
}

// timesTwo(1)
// .then((result)=>{
//     console.log(result)
//     timesTwo(result)
//     .then((result)=>{
//         console.log(result)
//         timesTwo(result)
//         .then((result)=>{
//             console.log(result)
//             timesTwo(result)
//         })
//     })
// })

// timesTwo(2)
// .then((result)=>{
//     return new Promise((resolve, reject)=>{
//         console.log(result)
//         resolve(timesTwo(result))
//     })
// })
// .then((result)=>{
//     return new Promise((resolve, reject)=>{
//         console.log(result)
//         resolve(timesTwo(result))
//     })
// })
// .then((result)=>{
//     return new Promise((resolve, reject)=>{
//         console.log(result)
//         resolve(timesTwo(result))
//     })
// })
// .then((result)=>{
//     console.log(result)
// })

timesTwo(2)
.then((result)=>{
    console.log(result)
    return timesTwo(result)
})
.then((result)=>{
    console.log(result)
    return timesTwo(result-6)
})
.then((result)=>{
    console.log(result)
    return timesTwo(result)
})
.then((result)=>{
    console.log(result)
    return timesTwo(result)
})
.then((result)=>{
    console.log(result)
    return timesTwo(result)
})
.catch((err)=>{
    console.log(err)
})