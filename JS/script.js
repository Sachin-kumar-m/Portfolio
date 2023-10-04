let skillName = document.getElementsByClassName("skill-name")
let progress = document.getElementsByClassName("progress-bar")
let progressPercentage = []
let navBar = document.querySelector(".navbar-nav")
let navItems = document.getElementsByClassName("nav-item")
let navigate = document.querySelector(".navbar")
for (i = 0; i < skillName.length; i++){
    progressPercentage.push(skillName[i].childNodes[3].innerText)
}

for (i = 0; i < progress.length; i++){
    progress[i].style.width = progressPercentage[i]
}
navBar.addEventListener("click", function (e) {
    for (i = 0; i < navItems.length; i++){
        navItems[i].classList.remove("active")
    }
    e.target.classList.add("active")
   
    navigate.style.height = "10%"
    
    if (e.target.innerText == "Home"){
        setTimeout(function () {
            navigate.style.height = null
        },500)
    }
})
// document.addEventListener("scroll",function () {
//     navigate.style.height = "10%"
// })


