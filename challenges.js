// CHALLENGE 1 PART 2
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// // test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins  ) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else {
//        console.log(`No team wins`)
//     }
    
// }

// checkWinner(scoreDolphins, scoreKoalas);


// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);


// challlenge 4 == PAART 1

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // with ternary 
// console.log(`Your bill ${bill}`);
// console.log(`Your Tip ${tip}`);
// console.log(`Your bill ${bill + tip}`);


// // with if else
// if (bill >= 50 && bill <= 300) {
//   console.log(`Your Tip is ${bill * 0.15} `);
//   console.log(`Your bill is ${bill} and your Tip is ${tip} 
//         `);
//   console.log(`Total bill is ${tip + bill}`);
// } else if (bill < 50 || bill > 300) {
//   console.log(`Your bill is ${bill} and your Tip is ${tip} 
//         `);
//   console.log(`Total bill is ${tip + bill}`);
// }


// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`Your bill is ${bill} and your Tip is ${tip} and the total is ${bill + tip}`)





// ----------------------------------------------------
// ------------------------ARRAYS----------------------
// ----------------------------------------------------

// CHALLENGE #2 PART 2

/**
 * Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
 * 
 **/

// One way to do this  
// const tip =  function calcTip(bill) {
//     return bill >= 50 && bill <= 300? bill * 0.15 :
//     bill * 0.2;
// }
// // console.log(tip(100))

// const bills = [125, 555, 44];

// const tips = bills.map(bill => tip(bill));
// const totals = bills.map((bill, i) => bill + tips[i]);

// console.log(tips)
// console.log(totals)



// Another Way to do this without map   

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300? bill * 0.15 :
//     bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]),
// calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1],
// bills[2] + tips[2],
// ]

// console.log(totals)
// console.log(tips)


// ----------------------------------------------------
// ---------------------ARRAYS ENDED-------------------
// ----------------------------------------------------


// ----------------------------------------------------
// -----------------------OBJECT-----------------------
// ----------------------------------------------------





const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Doe',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
}
// we need to invoke it in order to run those functions
mark.calcBMI()
john.calcBMI()

// after invoking you'll be able to get the results
console.log(mark.bmi, john.bmi)

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi})
        is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi})
        is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}



// ----------------------------------------------------
// --------------------OBJECT ENDED--------------------
// ----------------------------------------------------


// ----------------------------------------------------
// --------------------Loops---------------------------
// ----------------------------------------------------