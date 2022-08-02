var list1=[];
    var list2=[];
    var list3=[];
    var list4=[];
     var list5=[];
    let n=1;
    let x=0;

    function AddRow(){
 var addRow=document.getElementById("show")
 var newRow=addRow.insertRow(n);
 
 list1[x]=document.getElementById("fname").value;
 list2[x]=document.getElementById("email").value;
 list3[x]=document.getElementById("phone").value;
 list4[x]=document.getElementById("course").value;
 
 var cell1=newRow.insertCell(0)
 var cell2=newRow.insertCell(1)
 var cell3=newRow.insertCell(2)
 var cell4=newRow.insertCell(3)
 var cell5=newRow.insertCell(4)
// var cell3=newRow.insertCell(3)

 cell1.innerHTML=list1[x];
 cell2.innerHTML=list2[x];
 cell3.innerHTML=list3[x];
 cell4.innerHTML=list4[x];
 cell5.innerHTML= '<input type="submit" name="remove" id="remove" value="Remove" onclick="removed()">';
//  cell4.innerHTML= '<button onclick="removed()" id="remove" value="remove">remove</button>';


 n++
 x++

    }
    let buttons=document.getElementById("remove");
    // //     let div=document.getElementById("one");
        buttons.addEventListener("click",removed);

        function removed(){

            document.getElementById("show").deleteRow(x)
        }