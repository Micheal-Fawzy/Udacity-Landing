/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// let Time = setTimeout(function(){ navBar.style.top = "-30vh"; }, 5000);
let navBar = document.getElementById("page__header");
let fragment = document.createDocumentFragment();
let sections = document.getElementsByTagName("section");
let navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(ele) {
    const rect = ele.getBoundingClientRect();
    return ((rect.top >= 0 && rect.top <= (window.innerHeight - 400)) || (rect.top < 0 && rect.bottom > 200));
}
// && 

        // && rect.bottom <= (window.innerHeight)

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (section of sections) {
    li = document.createElement("li");
    alink = document.createElement("a");
    alink.textContent = section.dataset.nav;
    alink.setAttribute("onclick", "scrollto("+ section.id +")");
    alink.setAttribute("id", "li"+ section.id);
    alink.setAttribute("class", "menu__link");
    li.appendChild(alink);
    fragment.appendChild(li);
}
navList.appendChild(fragment);


// Add class 'active' to section when near top of viewport
function scrollActive(){
    navBar.style.top = "0";
    header = document.getElementById("main__hero");
    for (section of sections) {
        if (isInViewport(section)) {
            toggleActive(section);
        } else if (isInViewport(header)) {
            for (section of sections) {
                section.classList.remove("your-active-class");
            }
            const lists = document.querySelectorAll("#navbar__list li");
            for (let list of lists) {
                list.classList.remove("your-active-li");
            }
        }
    }
    var Time = setTimeout(function(){ navBar.style.top = "-30vh"; }, 5000);
    var myint = setInterval(stopTimer, 100);
    function stopTimer() {
        if (isInViewport(header)) {
        clearTimeout(Time);
        clearInterval(myint);
        return
        };
        window.onscroll = function (){
            clearTimeout(Time);
            clearInterval(myint);
        };
    }
    if (!isInViewport(header)) {
        Time();
        myint();
    }
}
// Scroll to anchor ID using scrollTO event
function scrollto(listId) {
    newid = listId.id.toString();
    ele = document.getElementById(newid);
    ele.scrollIntoView({behavior: "smooth"});
    toggleActive(ele);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', scrollActive);

// Build menu 

// Scroll to section on link click

// Set sections as active
function toggleActive(ele) {
    for (section of sections) {
        section.classList.remove("your-active-class");
    }
    ele.classList.add("your-active-class");
    const lists = document.querySelectorAll("#navbar__list li");
    for (let list of lists) {
        list.classList.remove("your-active-li");
    }
    eleLi = document.getElementById("li"+ele.id);
    eleLi.parentElement.classList.add("your-active-li");
}
