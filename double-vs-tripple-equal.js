const first = 2;
const second = "2";

// 1 == true will show  equal but 1 === true  will show false.
// 0 == false will show equal but === will show false.
// 1 == '1' will show true but with === will show false.
// == is only check values
//=== it checks values and data type

if(first === second){
    console.log('condition is true');
}
else{
    console.log("condition is false");
}