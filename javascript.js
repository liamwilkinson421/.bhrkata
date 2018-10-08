var json = {"items":[
    {  
      type:'pdf',
      name:'Employee Handbook',
      added:'2017-01-06'
   },
   {  
      type:'pdf',
      name:'Public Holiday policy',
      added:'2016-12-06'
   },
   {  
      type:'folder',
      name:'Expenses',
      files:[  
         {  
            type:'doc',
            name:'Expenses claim form',
            added:'2017-05-02'
         },
         {  
            type:'doc',
            name:'Fuel allowances',
            added:'2017-05-03'
         }
      ]
   },
   {  
      type:'csv',
      name:'Cost centres',
      added:'2016-08-12'
   },
   {  
      type:'folder',
      name:'Misc',
      files:[  
         {  
            type:'doc',
            name:'Christmas party',
            added:'2017-12-01'
         },
         {  
            type:'mov',
            name:'Welcome to the company!',
            added:'2015-04-24'

         }
 
      ]
   }
]
           }


var loc = document.title
    

    var items = json.items;
    

    for( var i = 0; i < items.length; i++) {
        
        var firstcolumn = document.createElement("tr");
        var secondcolumn = document.createElement("tr");
        var thirdcolumn = document.createElement("tr");


        if (items[i].files === undefined){
            console.log("not a folder")
            
        } else {
            for (var count = 0; count < items[i].files.length; count++) {
                if (loc === "misc" & items[i].name === "Misc"){
               
                    
                        var folderdetails = items[i].files[count]
                        var foldertype = items[i].files[count].type
                        var foldername = items[i].files[count].name
                        var folderadded = items[i].files[count].added
                    

                            if (foldertype === "folder"){
                    var folder = document.createElement("a");
                    folder.innerHTML = foldername;
                    folder.href = foldername+".html";
                    firstcolumn.appendChild(folder);
               
                }
                else {
                    var notfolder = document.createElement("tr");
                    notfolder.innerHTML = foldername;
                    firstcolumn.appendChild(notfolder);      
              
                }


                var type = document.createElement("tr");
                type.innerHTML = foldertype;
                secondcolumn.appendChild(type);

                var date = document.createElement("tr");
                if (folderadded == undefined) {
                    var none = "&nbsp"
                    date.innerHTML = none;
                }
                else {
                    date.innerHTML = folderadded;
                }
                thirdcolumn.appendChild(date);
                }
                if (loc === "expenses" & items[i].name === "Expenses"){
               
                    
                            var folderdetails = items[i].files[count]
                            var foldertype = items[i].files[count].type
                            var foldername = items[i].files[count].name
                            var folderadded = items[i].files[count].added
                            
                           
                    
                                if (foldertype === "folder"){
                        var folder = document.createElement("a");
                        folder.innerHTML = foldername;
                        folder.href = foldername+".html";
                        firstcolumn.appendChild(folder);
                      
                    }
                    else {
                        var notfolder = document.createElement("tr");
                        notfolder.innerHTML = foldername;
                        firstcolumn.appendChild(notfolder);      
                
                    }


                    var type = document.createElement("tr");
                    type.innerHTML = foldertype;
                    secondcolumn.appendChild(type);

                    var date = document.createElement("tr");
                    if (folderadded == undefined) {
                        var none = "&nbsp"
                        date.innerHTML = none;
                    }
                    else {
                        date.innerHTML = folderadded;
                    }
                    thirdcolumn.appendChild(date);
                }
            };
        }
        if (loc === "index"){
        if (items[i].type === "folder"){
            var folder = document.createElement("a");
            folder.innerHTML = items[i].name;
            folder.href = items[i].name+".html";
            firstcolumn.appendChild(folder);
          
        }
        else {
            var notfolder = document.createElement("tr");
            notfolder.innerHTML = items[i].name;
            firstcolumn.appendChild(notfolder);      
           
        }


        var type = document.createElement("tr");
        type.innerHTML = items[i].type;
        secondcolumn.appendChild(type);

        var date = document.createElement("tr");
        if (items[i].added == undefined) {
            var none = "&nbsp"
            date.innerHTML = none;
        }
        else {
            date.innerHTML = items[i].added;
        }
        thirdcolumn.appendChild(date);
        }
        if (loc === "index"){
        var filenameCol = document.getElementById("filename").appendChild(firstcolumn);      
        var filetypeCol = document.getElementById("filetype").appendChild(secondcolumn);
        var dateAddedCol = document.getElementById("dateadded").appendChild(thirdcolumn);
        }
        if (loc ==="expenses"){
        var filenameCol = document.getElementById("filename").appendChild(firstcolumn);
        var filetypeCol = document.getElementById("filetype").appendChild(secondcolumn);
        var dateAddedCol = document.getElementById("dateadded").appendChild(thirdcolumn);
        }
        if (loc ==="misc"){
        var filenameCol = document.getElementById("filename").appendChild(firstcolumn);
        var filetypeCol = document.getElementById("filetype").appendChild(secondcolumn);
        var dateAddedCol = document.getElementById("dateadded").appendChild(thirdcolumn);
        }
        
    }


    
