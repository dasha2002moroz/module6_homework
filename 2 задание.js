function isPrime(n) {
  if (n <= 1 || n > 1000) return "данные неверны";
 
  for (let i = 2; i <= n / 2; i++)
    if (n % i === 0) return "не простое число";

  return "простое число";
}
console.log(isPrime(2000));
console.log(isPrime(197));
console.log(isPrime(54));