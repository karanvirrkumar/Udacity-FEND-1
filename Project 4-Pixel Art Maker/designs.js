//variables to get canvas element,height,width
const canvas = document.getElementById('pixelCanvas');
let height = $("#inputHeight");
let width = $("#inputWidth");

//An event listener that comes into action when Submit button is clicked .
$('#inputSubmit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() {

    canvas.innerHTML = '';
    let h = height.val();
    let w = width.val();

    //A function which fills color in the cell that was clicked and changes the color.
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
    for (let i = 0; i < h; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < w; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
