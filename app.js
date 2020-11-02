var matrix=[];
var length=3;
var table="<table border='1'><tbody>";
for(var i=0;i<length;i++){
    var arr=[];
    table+="<tr>";
    for(var j=0;j<length;j++){
        table+="<td id='"+i+","+j+"' width='50px' height='50px' onClick='placeXO(this.id)'></td>";
          arr[j]=null;      
    }
    matrix[i]=arr;
    table+="</tr>";
}
table+="</tbody></table>";
console.log(matrix);
document.getElementById("ticTac").innerHTML=table;
var tile="x";
function placeXO(a){

    document.getElementById(a).innerHTML="<img src='./images/"+tile+".png' width='50px' height='50px' />";
    if(tile==='x')tile='o';
    else tile='x';
}
//check minor diagonal
for(var i=0;i<3;i++){
    console.log(i,3-i-1)
    }
//check diagonal
for(var i=0;i<3;i++){
    console.log(i,i)
    }
