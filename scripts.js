let container = document.getElementById("grid")



let applybtn = document.getElementById("apply").addEventListener("click", () => {
    getDivs(parseInt(document.querySelector('#volume').textContent))
})
















function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}


function getDivs(gridNumber) {
    document.querySelectorAll(".square").forEach(e => e.remove())
    let side = 750 / gridNumber
    for (let i = 1; i <= gridNumber*gridNumber; i++) {
        const grid = document.createElement("div")
        grid.style.width = `${side-2}px`;
        grid.style.height = `${side-2}px`;
        grid.style.border = "1px solid black"
        grid.classList.add("square")
        container.appendChild(grid)
    }
   
}