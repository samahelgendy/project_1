const lists = document.getElementById("navbar__list");
const sessions = document.querySelectorAll("section");

// when you add a new section the list increases autoatically
for (sess of sessions) {
    const text = sess.id;
    var list = document.createElement("li");
    list.innerHTML = `<li><a href="#${sess.id}" data-nav="${sess.id}" class = "menu__link">${text}</a></li>`
    lists.appendChild(list);
    
}

// when you want the session to apper in active status
window.addEventListener("scroll",  () => {
    sessions.forEach(function (showCircle) {
        if (showCircle.getBoundingClientRect().top >= -450 && showCircle.getBoundingClientRect().top >= -170) {
            // add active class
            showCircle.classList.add("your-active-class");
        } else {
            //remove active class
            showCircle.classList.remove("your-active-class");
    } 
})
});

// when you click on the list items you will be vanigated to the appropiated section dynamically
function smoothly(menuList) {
    menuList.addEventListener("click",  (sec) => {
    sec.preventDefault();
    if (sec.target.dataset.nav) {
        document.getElementById(`${sec.target.dataset.nav}`).scrollIntoView({
            behavior: "smooth"
        });
    }
});
}

smoothly(lists);
