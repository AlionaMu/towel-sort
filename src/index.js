module.exports = function towelSort(matrix) {
  const stack = [...matrix];
  const res = [];
  if (matrix.length == 0 || matrix == undefined) {
    return [];
  }
  else {
    var x = 0;
 while (x < stack.length) {
   if ( x==0 || x%2==0){
    const next = stack[x];
    res.push(...next);
    x++;
 }
 else {
  const next = stack[x].reverse();
  res.push(...next);
  x++;
 }
 } 
 var final = res.flat();
 
 return final;
}
}
 
 