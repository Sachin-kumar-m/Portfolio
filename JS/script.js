let skillName = document.getElementsByClassName("skill-name")
let progress = document.getElementsByClassName("progress-bar")
let progressPercentage = []
let navBar = document.querySelector(".navbar-nav")
let navItems = document.getElementsByClassName("nav-item")
let navigate = document.querySelector(".navbar")
let fullStack = document.querySelector(".typed-text")
let sendBtn = document.querySelector("#sendMessageButton")
let emailId = document.querySelector("#email");
let contactForm = document.querySelector("#contactForm")
let formSubject = document.querySelector("#subject")
let formMessage = document.querySelector("#message")
// eventlistener added on window to check the scroll and show the moveup only 
// when scroll has crossed 2 sections

async function newsApi() {
    var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=380539d5ba42403ea622428379772676';
    let response = await fetch(url)
    let json = await response.json()
    let newsArticles = []
    for (i = 0; i < 2; i++) {
        newsArticles.push(json.articles[i])
    }
    console.log(newsArticles)
    updateUI(newsArticles);
}
newsApi()
function updateUI(newsArticles) {
    let newsTitles = document.querySelectorAll(".newstitle")
    let newsDesciptions = document.querySelectorAll(".newsDescription")
    let newsImages = document.querySelectorAll(".newsImage")
    let newsDates = document.querySelectorAll(".newsDate")
    let newsSources = document.querySelectorAll(".newsSource")
    let links = document.querySelectorAll(".readMore")
    for (i = 0; i < 2; i++) {
        newsTitles[i].innerHTML = newsArticles[i].title
        newsDesciptions[i].innerHTML = newsArticles[i].description
        if (newsArticles[i].urlToImage != null) {
            newsImages[i].setAttribute("src", newsArticles[i].urlToImage)
        }
        newsDates[i].lastChild.data = newsArticles[i].publishedAt.substring(0, 9)
        newsSources[i].lastChild.data = newsArticles[i].source.name
        links[i].setAttribute("href", newsArticles[i].url)
    }
}


window.addEventListener("scroll", function () {
    let showArrow = document.querySelector(".back-to-top")
    if (window.scrollY > 1266) {
        showArrow.style.display = "block"
    }
    else if (window.scrollY < 1266) {
        showArrow.style.display = "none"
    }
})

// delay of 1 second to show the loader.
setTimeout(() => {
    loader = document.getElementById("loader")
    loader.classList.remove("show")
    fullStack.classList.add("typewriter")
}, 1500);


for (i = 0; i < skillName.length; i++) {
    progressPercentage.push(skillName[i].childNodes[3].innerText)
}
for (i = 0; i < progress.length; i++) {
    progress[i].style.width = progressPercentage[i]
}

// show active an inactive tabs in navBar
navBar.addEventListener("click", function (e) {
    for (i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active")
    }
    e.target.classList.add("active")

    if (e.target.innerText != "Home") {
        navigate.style.height = "10%"
    }

    if (e.target.innerText == "Home") {
        setTimeout(function () {
            navigate.style.height = null
        }, 500)
    }
})

sendBtn.addEventListener("click", function () {
    console.log(emailId.value)
    contactForm.setAttribute("action", `mailto:${emailId.value}?subject=${formSubject.value} mailto!&body=${formMessage.value}"`)
})
// document.addEventListener("scroll",function () {
//     navigate.style.height = "10%"
// })


