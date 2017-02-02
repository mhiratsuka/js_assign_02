const array2 = [1, 'dog' , 'one']

function myArr1(array) {
    console.log("index: value")
    for (var i = 0; i < array.length; i+= 1) {
        console.log(` ${i} : ${array[i]}` )
    }
}
myArr1(array2)