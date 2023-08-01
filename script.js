function createTable() {
    //Write your code here
	 const row = parseInt(prompt("Input No. of Rows"));
    const column = parseInt(prompt("Input No. of Columns"));


    var input = document.getElementById("myTable")
    input.innerHTML = '';
	
    for(i=0;i<row;i++){
        var rows =  document.createElement('tr')

        for(j =0;j<column;j++){
            var cell = document.createElement('td');
            cell.textContent = "Row-"+ i + "Column-"+ j 
            cell.appendChild(rows)
        }

        input.appendChild(row);
    }
	
}
