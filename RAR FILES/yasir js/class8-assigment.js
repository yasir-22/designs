function generateFields()
{   
     var totalStd= document.getElementById("totalStudents").value;
     var parentDiv= document.getElementById("Fields");
     var button=document.createElement("input");
     button.type= "submit";
     button.className="btn";
     button.value="Get RESULT";
     button.style= "margin-top:5px";

     for (var i = 0; i < totalStd; i++)

     { 
         var label= document.createElement("label");
         var labelP= document.createElement("label");

         var input= document.createElement("input");
         var inputP= document.createElement("input");

         var lineBreak=document.createElement("br");


         label.innerHTML="STUDENT NAME" + (i+1) + ":" ;
         labelP.innerHTML="STUDENT PERCENTAGE:";

         input.type="text";
         inputP.type="number";
         input.name="stdNames";
         inputP.name="stdPercent";

         inputP.style="  style=  color:maroon margin-right:5px; margin-bottom:5px;";


         parentDiv.append(label);
         parentDiv.append(input);
         parentDiv.append(labelP);
         parentDiv.append(inputP);
         parentDiv.append(lineBreak);
     }
     parentDiv.append(button);
     button.onclick=function(button)
        {
           getResult();
        }

    }
    
 function getResult()
 {
     var txtNames = document.getElementsByName("stdNames");
     var txtPercent = document.getElementsByName("stdPercent");
     var res = document.getElementById("result");

    res.innerHTML += "<tr><th> Students Name </th><th> Students Percentage</th></tr>";


    for (var i= 0;  i< txtNames.length;  i++)
        {
         res.innerHTML += "<tr><td>" + txtNames[i].value +"</td><td>" +txtPercent[i].value + "</td></tr>";
      

        }
   
    }