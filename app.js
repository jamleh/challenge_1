var matrix=[];

var createTable=function(length){
//creating table of content 
//make default value with 3;
//console.log(length)
if(!length || typeof(Number(length))!=='number' || length<3)length=3;
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
//console.log(matrix);
document.getElementById("ticTac").innerHTML=table;
return length;
}
//initial table invoked with  default value with 3;
createTable(3);

var tile="x";
function placeXO(a){
    var index=a.split(','); //1,1 ==> index[0] , index[1] == > [1,1]

   if(!matrix[index[0]][index[1]]){
    matrix[index[0]][index[1]]=tile;
       document.getElementById(a).innerHTML="<img src='./images/"+tile+".png' width='50px' height='50px' />";
            //check tiles if the user win
            var check1=check2=check3=check4=1;
            for(var i=0;i<matrix.length;i++){
                //check horizantally
                if(tile!==matrix[index[0]][i]){ check1=0;  } 
                //check vertically
                if(tile!==matrix[i][index[1]]){ check2=0;  } 
                //main diagonal
                if(tile!==matrix[i][i]){ check3=0;  } 
                //reverse diagonal or minor diagonal
                if(tile!==matrix[i][matrix.length-1-i]){ check4=0;  } 
                //console.log(index[0],i,index[1]);
             }
             if(check1 || check2 || check3 || check4){
                 alert("You won with "+matrix.length+" "+tile.toUpperCase()+"'s ");
                 for(var i=0;i<matrix.length;i++){
                     for(var j=0;j<matrix.length;j++){
                         if(!matrix[i][j])matrix[i][j]=1
                     }
                 }
                }

    if(tile==='x'){ tile='o';  }
    else tile='x';
    // console.log(matrix,length);
   }
}
// //check minor diagonal
// for(var i=0;i<3;i++){
//     console.log(i,3-i-1)
//     }
// //check diagonal
// for(var i=0;i<3;i++){
//     console.log(i,i)
//     }
