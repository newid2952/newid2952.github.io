
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
let acount = 0
let bcount = 0
function countAandB(x){
    for (let i = 0; i < input1.length; i++) {
        if (input1[i]==='a') {
            acount++
        }
        else if(input1[i]==='b'){
            bcount++
        }
        
    }

}

function toNumber(input){
    for (let i = 0; i < input.length; i++) {
        if (input[i]==='a') {
            input[i] = 1
        }
        else if(input[i]==='b'){
            input[i] = 2
        }
        else if(input[i]==='c'){
            input[i] = 3
        }
        else if(input[i]==='d'){
            input[i] = 4
        }
        else if(input[i]==='e'){
            input[i] = 5
        }
    }
}

toNumber(input1)
console.log(input1);