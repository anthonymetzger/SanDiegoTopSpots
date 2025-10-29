$(document).ready(function () {
    // write your code here
    
    
    
    $.getJSON('data.json', function(data){
        
        let obj = data;
        const table = document.getElementById("theTable");    
        let rowCount = 1;
        let cellCount = 0;
        let currentCell = 0;
        let linkString = "";
    for(let keys in obj){
        cellCount = 0;
        rows = table.insertRow(rowCount);
        
        console.log(obj[keys].name);    
            currentCell = rows.insertCell(cellCount);
            currentCell.innerHTML = obj[keys].name;
            cellCount++;
            currentCell = rows.insertCell(cellCount);
            currentCell.innerHTML = obj[keys].description;
            cellCount++;
            currentCell = rows.insertCell(cellCount);
            linkString = `<a class="link-to-button link-column button-column" href='https://www.google.com/maps?q=${obj[keys].location}'>Google Maps</a>`
            console.log(linkString);
            currentCell.innerHTML = linkString;
            
            
        rowCount++;
        cellCount = 0;
    }
    });
    
    
    

    return 0;
});

