function handle(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.getElementById("display").value = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}