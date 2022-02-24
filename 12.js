var myloh1 = [];
var myloh2 = [];
for (let myloh = 3; myloh < 10000; myloh *= 3) {
   myloh1.push(myloh);
}

let myloh = 3;
while (myloh < 10000) {
   myloh2.push(myloh);
   myloh *= 3;
}

console.log(myloh1);
console.log(myloh2);
