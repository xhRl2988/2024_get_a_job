let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");

let convertFromKg = () =>{
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
};
let convertFromLb = () =>{
    let lb = lbRef.value;
    kgRef.value = (kg / 2.205).toFixed(2);
    ozRef.value = (kg * 16).toFixed(2);
};
let convertFromOz = () =>{
    let kg = kgRef.value;
    kgRef.value = (kg / 35.274).toFixed(2);
    lbRef.value = (kg / 16).toFixed(2);
};

kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);

window.addEventListener("load", convertFromKg)
