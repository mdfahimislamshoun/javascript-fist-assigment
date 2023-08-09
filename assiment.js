/*problem 1*/
function cubeNumber(number) {
    if (typeof number !== "number") {
        return "inputs should be an number.";
    } else {
        return number ** 3;
    }
}
const input = 9;
const input2 = 4;
const output = cubeNumber(input);
const output2 = cubeNumber(input2);
console.log(output, output2);

/*problem 2*/

function matchFinder(friend1, friend2) {
    if (typeof friend1 !== "string" || typeof friend2 !== "string") {
        return "Both inputs should be strings.";
    } else if (friend1.includes(friend2)) {
        return "true";
    } else {
        return "false";
    }
}
const friends = matchFinder("John Doe", "ohn");
console.log(friends);


/*problem 3*/
function sortMaker(arr) {

    let [element1 ,element2] =arr;
    for(let item of arr){
        if(typeof item !== "number"){
            return "Please give me a valid number.";
        }
        if(element1 <0 || element2 <0){
            return "Invalid Input";
        }
        else if(element1 < element2){
            return [ element1 ,element2] =[element2,element1];
        }else if(element1 >element2){
            return [element1,element2];
        }
        if(element1 ===element2){
            return "equal";
        }   
    }
}

const array1 = [44,74];
const outputArray = sortMaker(array1);
console.log(outputArray);


/*problem 4*/
function findAddress(obj) {
    const { street, house,society} =obj;
    if(street || house || society){
        const nameOfStreet =street ||"_";
        const nameOfHouse =house ||"_";
        const nameOfSociety =society ||"_";
        return `${nameOfStreet},${nameOfHouse},${nameOfSociety}`;
    }
    return [street,house,society];
}
const address1 ={
  
    society: "Earth Perfect."
}
const result1 = findAddress(address1);
console.log(result1);
const address2 ={
  
    house: "15A",
    society: "Earth Perfect."
}
const result2 = findAddress(address2);
console.log(result2);

/*problem 5*/
function canPay(changeArray,totalDue) {
    if(!Array.isArray(changeArray) || typeof totalDue !== "number"){
        return "both input shoud be an number";
    }
    let sum =0;
    for( let i =0; i <changeArray.length;i++){
        const index =i;
        const element =changeArray[i];
        sum =sum + element;
    }if(sum >= totalDue){
        return "true";
    }else{
        return "fleas";
    }
}

const taka = [ 5, 6, 5];
const price = 15;
const getsum = canPay(taka,price);
console.log(getsum);


