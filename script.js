function generatebtn() {
    document.getElementById("result-table").innerHTML = "";
    let rows = document.getElementById("rows-input").value;
    let columns = document.getElementById("columns-input").value;
    let table = document.getElementById("result-table");

    if (!rows || !columns || rows <= 0 || columns <= 0) {
        alert("Only enter a number greater than zero");
        return;
    }

    for (let i = 1; i <= rows; i++) {

        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (let j = 1; j <= columns; j++) {
            let td = document.createElement("td")
            td.innerHTML = i * j;  
            tr.appendChild(td);
        }
    }
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') generatebtn();
  });
