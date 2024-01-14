/* const name1 = "Anna";
const name2 = "Marina";
function palCheck(name) {

let reverseName =  name.toLowerCase().split('').reverse().join('');
return name.toLowerCase()===reverseName
}
console.log("palCheck: "+palCheck(name1)); */

const name1 = "Anna";
const name2 = "Marina";
function palCheck(name) {

let reverseName =  name.toLowerCase().split('');
for (let i = 0; i < reverseName.length; i++) {
    reverseName[i]=reverseName[reverseName.length-(i+1)];
    reverseName[reverseName.length-(i+1)]=reverseName[i];    
}
return name.toLowerCase()===reverseName.join ('');
}
console.log("palCheck: "+palCheck(name1))