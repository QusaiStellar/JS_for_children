function areArraySame(a, b) {
   if (a.length !== b.length) {
      return false;
   } else {
      for (i = 0; i < a.length; i++) {
         if (a[i] === b[i]) {
            return true;
         } else {
            return false;
         }
      }
   }
}

firstArray = [1, 2, 3];
secondArray = [4, 5, 6];
thirdArray = [1, 2, 3];
thourArray = [1, 2, 3, 4];

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(thourArray);

console.log(areArraySame(firstArray, thirdArray));
