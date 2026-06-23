function generatebtn() {
    document.getElementById("result-table").innerHTML = "";
    console.log(document.getElementById("rows-input").value);
    console.log(document.getElementById("columns-input").value);
    console.log("it work");
    let rows = document.getElementById("rows-input").value;
    let columns = document.getElementById("columns-input").value;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            let ij = i * j; 
        }
    }
}