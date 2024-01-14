/* const name1 = "Anna";
const name2 = "Marina";
function palCheck(name) {

let reverseName =  name.toLowerCase().split('').reverse().join('');
return name.toLowerCase()===reverseName
}
console.log("palCheck: "+palCheck(name1)); */

const name1 = "А луна канула";
const name2 = "Marina";
function palCheck(name) {

let reverseName =  name.toLowerCase().split(' ').join('').split('');
for (let i = 0; i < reverseName.length; i++) {
    reverseName[i]=reverseName[reverseName.length-(i+1)];
    reverseName[reverseName.length-(i+1)]=reverseName[i];    
}
return name.toLowerCase().split(' ').join('')===reverseName.join('');
/* return console.log(reverseName.join('')); */
}
console.log("palCheck: "+palCheck(name1)); 




/* const name1 = "Шла cfif ijcc";
console.log(name1.split(' ').join ('').split('')) */