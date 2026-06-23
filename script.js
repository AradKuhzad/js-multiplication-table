function generatebtn() {
    document.getElementById("result-table").innerHTML = "";
    console.log(document.getElementById("rows-input").value);
    console.log(document.getElementById("columns-input").value);
    console.log("it work");
    let rows = document.getElementById("rows-input").value;
    let columns = document.getElementById("columns-input").value;
    let table = document.getElementById("result-table");

    if (!rows || !columns || rows <= 0 || columns <= 0) {

    for (let i = 1; i <= rows; i++) {

        let tr = document.createElement("tr");
        table.appendChild(tr);
        td.innerHTML = i * j; 
        tr.appendChild(td);

        for (let j = 1; j <= columns; j++) {
            let td = document.createElement("td")
            td.innerHTML = i * j;  
            tr.appendChild(td);
        }
    }
}