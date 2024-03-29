/**
 *
 * A precedence rule is given as "P>E",
 * which means that letter "P" is followed directly by the letter "E".
 * Write a function, given an array of precedence rules,
 * that finds the word represented by the given rules.

 Note: Each represented word contains a set of unique characters,
 i.e. the word does not contain duplicate letters.
 */
function findHead(
	mapOfValues: Map<string, string>,
	valueKey: Set<string>) : string {
	let headValueString = "";
	mapOfValues.forEach((val, key) => {
		if(!valueKey.has(key)){
			headValueString += key;
			headValueString += val;
		}
	})
	return headValueString;
}

const findWord = (arrayKey: Array<string>) => {
	const valueSet: Set<string> = new Set();
	const spellingMap: Map<string, string> = new Map();
	let resultString: string = "";

	for (let i = 0; i < arrayKey.length ; i++) {
		let [frontPair, backPair] = arrayKey[i].split(">");
		spellingMap.set(frontPair, backPair);
		valueSet.add(backPair);
	}

	resultString += findHead(spellingMap, valueSet);

	while(spellingMap.size > 1){
		let lastLetter = resultString.substring(resultString.length -1);
		if(spellingMap.has(lastLetter)){
			resultString += spellingMap.get(lastLetter);
			spellingMap.delete(lastLetter);
		}
	}
	console.log(resultString, "!")
	return resultString;
}

findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN

findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL

findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND
