//
// LHL - wordSearch
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m02w5/activities/419?journey_step=34&workbook=8
// pair programming exercise w. Matt Davis 2022-08-09
 
const wordSearch = (letters, word) => {
    // error check if empty inputs
    if (!letters || !word) {
      return false;
    }
  
    // check horizontals
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
      // if backwards l includes(word) return true
      if (reverseString(l).includes(word)) {
        return true;
      }
    }
    
    // transpose to check vertical
    let newletters = transpose(letters);
    const newhorizontalJoin = newletters.map(ls => ls.join(''));
    for (l of newhorizontalJoin) {
      if (l.includes(word)) return true;
      if (reverseString(l).includes(word)) {
        return true;
      }
    }
  
    // still no matches, so return false
    return false;
  }; 

const reverseString = function (str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join("");
    return newString;
};


const transpose = function (matrix) {
    if (!matrix || matrix.length === 0) {
        return (['empty input']);
    }

    const rows = matrix.length, cols = matrix[0].length;
    const outputArray = [];

    for (let y = 0; y < cols; y++) {  // loop for each required row
        outputArray[y] = Array(rows); // build empty row  -->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
    }

    for (let y = 0; y < rows; y++) { // populate the empty array -- work on a row
        for (let x = 0; x < cols; x++) { // work on each column in the current row
            outputArray[x][y] = matrix[y][x];
        }
    }
    return outputArray;
};


// SAMPLE ARRAY:

/*
const matrix = [
  ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],  //8 x 8
  ['Y', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['L', 'F', 'B', 'F', 'Q', 'U', 'A', 'L'],
  ['P', 'M', 'J', 'B', 'E', 'V', 'R', 'G'],
  ['Y', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
]


/* const matrix = [
    ['A', 'B', 'C'],
    ['D', 'P', 'F'],
    ['G', 'H', 'P'],
] 
const searchWord = 'BOBBY'
const diagonalData = function (matrix, searchWord) {
    let diagonalJoin = [];
    let gridLetter = '';
    let wordSplit = searchWord.split("");
    let rL = matrix[0].length; // row length
    let cH = matrix.length; // col height
    let maxLength = Math.max(rL, cH)
    let temp;
    for (let i = 0; i <= 2 * (maxLength - 1); i++) {
        temp = [];
        for (let j = (cH - 1); j >= 0; --j) {
            let x  = i - (y- j );
            if ( x >= 0 && x < rL){
                temp.push(matrix[j][x]);
                console.log(j, x);
            }

        }
        if(temp.length > 0) {
        diagonalJoin.push(temp)
        }
    }
    return diagonalJoin; */
    // loop through grid height

    // loop through grid width / row length
    // gridLetter = matrix[w][y];
    // end loop thru grid width

    // end loop thru grid height


// };

console.log(diagonalData(matrix, searchWord));
//   module.exports = wordSearch