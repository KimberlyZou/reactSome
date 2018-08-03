
function p1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('随便什么数据1');


        }, 1000);
    })
}
function p2(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(data)
            resolve('随便什么数据2');
            console.log('end')

        }, 1000);
    })
}
function p3(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(data)
            resolve('随便什么数据3');
            console.log('end')

        }, 1000);
    })
}
function p4(data) {
    setTimeout(() => {
        console.log(data)
    }, 1000);
}

p1().then(p2).then(p3).then(p4)

