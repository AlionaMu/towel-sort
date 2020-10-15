module.exports = function towelSort(matrix) {
  let input = matrix;//[...matrix];
  let res = [];
  if (!matrix || matrix.length == 0) {
    return [];
  }
  else {
    let x = 0;
 while (x < input.length) {
   if ( x == 0 || x % 2 == 0){
    let next = input[x];
    res.push(...next);
    x++;
 }
 else {
  let next = input[x].reverse();
  res.push(...next);
  x++;
 }
 } 
 let final = res.flat();
 
 return final;
}
}
 
 