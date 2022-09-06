let container = document.getElementById("grid")












getDivs(100)










function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}


function getDivs(gridNumber) {
    let side = 750 / gridNumber
    for (let i = 1; i <= gridNumber*gridNumber; i++) {
        const grid = document.createElement("div")
        grid.style.width = `${side-2}px`;
        grid.style.height = `${side-2}px`;
        grid.style.border = "1px solid black"
        container.appendChild(grid)
    }
   
}