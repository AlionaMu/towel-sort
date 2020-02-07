
/* You should implement your task here.
module.exports = */
/*var matrix = [[1,2,3],[4,5,6],[7,8,9]];*/
function towelSort (matrix) {
  /* var ix = matrix[x];*/
   var final="";
   var ix = 0;
 while (ix <= matrix.length) {
   if (ix % 2 == 0 || ix==0 ) {
     for (var iy = 0; iy < matrix[ix].length; iy++){
       final += matrix[ix][iy] + ", ";  
   }
     }
   else {
     
     for (var iy = matrix[ix].length-1; iy >= 0 ; iy--){  
       final += matrix[ix][iy] + ", ";
     }
   }
   ix++; 
   console.log (final);
 
 }
 return [final];
 }
 
 /*console.log (towelSort([[1,2,3],[4,5,6],[7,8,9]]));*/
 
 
 