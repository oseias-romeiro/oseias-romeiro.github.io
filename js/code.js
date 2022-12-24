periodo = ()=>{
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();

    let periodo = (year - 2020)*2;
    if(month > 6){
        periodo += 1;
    }
    let ele = document.getElementById("periodo");
    ele.innerHTML = periodo;
}

window.addEventListener("load", periodo);
