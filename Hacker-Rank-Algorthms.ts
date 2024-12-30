//problem 1 from the algorithms with javascript

--------------------------------------------------------------
--------------------------------------------------------------

// full problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}


//  below part is the solution and writen by be
function solveMefirst(a: number, b: number): number {

   if (1 <= a && b <= 1000){
    return a + b;
   }
    throw new Error('values must be within 1 to 1000')
   
}





function main() {
    const  a = parseInt(readLine());
    const  b = parseInt(readLine());
    
    
    const sum = solveMefirst(a, b)
    console.log(sum)
}



--------------------------------------------------------------
--------------------------------------------------------------
