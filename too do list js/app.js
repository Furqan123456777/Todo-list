var list =  document.getElementById("list");

function add(){

    var inp = document.getElementById("inp");
      var li = document.createElement("li");
      var litext = document.createTextNode(inp.value);
      li.setAttribute("class","li")
      
      li.appendChild(litext);


      var delbtn = document.createElement("button");
      var deltext = document.createTextNode("delete");
      delbtn.setAttribute("class","btn");
      delbtn.setAttribute("onclick","delbutton(this)")
      delbtn.appendChild(deltext);



      var editbtn = document.createElement("button");
      var edittext = document.createTextNode("Edit");
      editbtn.appendChild(edittext);
      editbtn.setAttribute("onclick","editbutton(this)");
      editbtn.setAttribute("class","btn1");

      
      li.appendChild(delbtn)
      li.appendChild(editbtn)
    


      list.appendChild(li)

      inp.value ="";

      
       
      
    }

    function editbutton(e){
        var val = e.parentNode.firstChild.nodeValue;
        var editValue = prompt("Enter edit value",val)
         
        e.parentNode.firstChild.nodeValue = editValue
    }
   
    function delbutton(e){
        e.parentNode.remove()

    }

    function delall(){
        list.innerHTML ="";
    }




    