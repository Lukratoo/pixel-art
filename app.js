const grade = document.querySelector(".grade");
const cor = document.querySelector(".cor");
const borracha = document.querySelector(".borracha");

for(let i = 0; i < 100; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", function(){
    pixel.style.backgroundColor= "yellow";
    });
    grade.appendChild(pixel);

};
