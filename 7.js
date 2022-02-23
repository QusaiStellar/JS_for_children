function remainder(n, m) {
   if (n > m) {
      return n % m;
   }
   else {
      return m % n;
   }
   // Divide the larger argument by the smaller argument and return the remainder

}

console.log(remainder(5, 5));
