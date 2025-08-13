const yearSpan = document.getElementById("dev-year");
const years =()=>{
    if(yearSpan){
        yearSpan.textContent = new Date().getFullYear();
    }
}
yearSpan.addEventListener("DOMContentLoaded", years())
