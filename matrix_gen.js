function matrixGen(numRows, numColumn) {
  var arrySort = new Array(numRows);
  var allNum = numRows * numColumn;
  var arryAll = new Array(allNum);

  for (var a = 0; a < allNum; a++) {
    arryAll[a] = Math.round(Math.random() * 100);
  }
  arryAll.sort(compare);
  for (var i = 0; i < numRows; i++) {
    arrySort[i] = new Array(numColumn);
    for (var j = 0; j < numColumn; j++) {
      arrySort[i][j] = arryAll[(i * numRows) + j];
    }
  }
  var compare = function(a, b) {
    if (a < b) {
      return -1;
    } if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  for (var k = 0; k < arrySort.length; k++) {
    arrySort[k].sort(compare);
  }
  return arrySort;
}
var finished = matrixGen(5, 5);
console.log(finished);

