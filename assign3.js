const array3 = [1, 2, 3]

function myArr2(num){
    for (var i = 0; i < num.length ; i+=1){
        num.splice(i, 1, [num.length+i] )
        //console.log(num[i])
    }
    console.log(num[i])
}

myArr2(array3)