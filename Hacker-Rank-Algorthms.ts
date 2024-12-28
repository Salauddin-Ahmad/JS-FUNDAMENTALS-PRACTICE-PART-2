//problem 1 from the algorithms with javascript

--------------------------------------------------------------
--------------------------------------------------------------


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
