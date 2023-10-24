const tabsBox = document.querySelector(".tabs-box"),
tabBtns = tabsBox.querySelectorAll(".tab-btn"),
arrowIcons = document.querySelectorAll(".icon img");
tabs = document.querySelectorAll('.tab');

const tabNav = function(tabBtnCLick){

    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });


    tabBtns[tabBtnCLick].classList.add("active");
    tabs[tabBtnCLick].classList.add("active");
    
}

tabBtns.forEach((tabBtn, i ) =>{
    tabBtn.addEventListener("click", () =>{
        tabNav(i);
    });
});
let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});


const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



