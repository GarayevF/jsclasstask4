let arr = [1, 2, 3, 4, 23, 53, 12, 78, 455, 44]

function task1(item) {
    let flag = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            console.log(`${item} tapildi, index: ${i}`);
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log(`${item} tapilmadi`);
    }
}


function task2(){
    let odd = [];
    let even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }   
    }

    console.log(`Tek ededler : ${tek}`);
    console.log(`Cut ededler : ${even}`);
}


function task3(str){
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false
        }
    }
    return true;
}

