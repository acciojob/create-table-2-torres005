function createTable() {
    //Write your code here
    const row = parseInt(prompt("Input number of rows"));
    const column = parseInt(prompt("Input number of columns"));


    var input = document.getElementById("myTable")
    input.innerHTML = '';
	
    for(var i=0;i<row;i++){
        var rows =  document.createElement('tr')

        for( var j =0;j<column;j++){
            var cell = document.createElement('td');
            cell.textContent = "Row-"+ i +  " Column-"+ j 
            rows.appendChild(cell)
        }

        input.appendChild(rows);
    }
}

