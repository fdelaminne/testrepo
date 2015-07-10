#!/usr/bin/env node

var fs = require('fs');
var outfile = "hw_1_2.txt";

var primes[];
max=100;
primes.push("2");
primesList="2,";
for (i=2; i<=max; i++)
{	// prime 
	isPrime = true; // until proved otherwise
	for (j=2;j<i;j++)
	{	if (i%j ==0)
		{	isPrime = false;
			break;
		}
	}
	if (isPrime)
	{	primes.push(i);
		console.log(i +",");
		primesList=primesList+i+",";
	}
}

fs.writeFileSync(outfile, primesList);  
console.log("Final prime list "+primesList);