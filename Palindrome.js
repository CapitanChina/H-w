/* const name1 = "Anna";
const name2 = "Marina";
function palCheck(name) {

let reverseName =  name.toLowerCase().split('').reverse().join('');
return name.toLowerCase()===reverseName
}
console.log("palCheck: "+palCheck(name1)); */

let name1 = "А Лист - сила!";
let name2 = "Able was I ere I saw Elba";
function palCheck(name) {

let reverseName =  name.toLowerCase().replace(/[^a-zа-яё]/gi, '').split('');
for (let i = 0; i < reverseName.length; i++) {
    reverseName[i]=reverseName[reverseName.length-(i+1)];
    reverseName[reverseName.length-(i+1)]=reverseName[i];    
}
return name.toLowerCase().replace(/[^a-zа-яё]/gi, '')===reverseName.join('');
}
console.log("palCheck №1: "+palCheck(name1)); 
console.log("palCheck №2: "+palCheck(name2));




/* const name1 = "Шла cfif,! ijcc";
console.log(name1.replace(/[^a-zа-яё]/gi, '')) */