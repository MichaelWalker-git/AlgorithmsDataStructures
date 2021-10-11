
/*
Task Description
A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1.
Your task is to write a program that will be used in a vending machine to return change.

Assume that the vending machine will always want to return the least number of coins or notes.
Devise a function getChange(M, P) where M is how much money was inserted into the machine and
 P the price of the item selected, that returns an array of integers representing the number
 of each denomination to return.

Example:
getChange(5, 0.99) // should return [1,0,0,0,0,4]

getChange(3.14, 1.99) // should return [0,1,1,0,0,1]
getChange(3, 0.01) // should return [4,0,2,1,1,2]
// 300
// 1
// 299

// 2
// 200

getChange(4, 3.14) // should return [1,0,1,1,1,0]
//400 -314 = 86
// 86 -100 =-14
// Math.floor(86 / 50) = 1
 // 86 - 50 = 36

getChange(0.45, 0.34) // should return [1,0,1,0,0,0]
 */

// M = money in dollars inserted in the machine (number)
// P = priceof the item selected (number)

const getChange = (M: number, P: number) => {
	const denom = [1,5, 10, 25, 50, 100];
	const mInCents = M * 100;
	const itemCost = P * 100;

	let changeInCents = mInCents - itemCost;
	const resultsArray = [];
	for(let i = denom.length - 1; i >=0; i--){
		const numberDividedBy = Math.floor(changeInCents / denom[i]);
		const remain = changeInCents - (denom[i] * numberDividedBy);
		resultsArray[i] = numberDividedBy;
		if(remain > -1) {
			changeInCents = remain;
		}
	}
	return resultsArray;
}
getChange(5, 0.99) // should return [1,0,0,0,0,4]
getChange(3.14, 1.99) // should return [0,1,1,0,0,1]
getChange(3, 0.01) // should return [4,0,2,1,1,2]
getChange(0.45, 0.34) // should return [1,0,1,0,0,0]
getChange(4, 3.14) // should return [1,0,1,1,1,0]
getChange(0.45, 0.34) // should return [1,0,1,0,0,0]


