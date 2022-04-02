const menu = document.querySelector(".nav__menu");
const menuItems = document.querySelectorAll(".nav__link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".hamburger__close");
const menuIcon = document.querySelector(".hamburger__menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("active");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";

    }
}
hamburger.onclick = "toggleMenu()"


menuItems.forEach(
    function(nav_link) {
        nav_link.addEventListener("click", toggleMenu);
    }
)

const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.main__blog-card');

    const isCurrentExpanded = items.length === data.length;

    toggleButton.textContent = isCurrentExpanded ? 'View all' : 'View less';

    populateBlogs(isCurrentExpanded ? 3 : data.length)
});



const populateBlogs = (number = 3) => {
    const blog = document.querySelector(".main__blog-content");
    blog.replaceChildren()
    data.slice(0, number).forEach((element, i) => {

        const card = document.createElement('div');
        card.classList = 'main__blog-card';

        const blogCard = `
    <div class="main__blog-image">
    <img src="${element.image}" alt="blog-2">
    </div>
    <div class="main__blog-description">
    <h3>${element.title}</h3>${element.description}
    <p> <a href="#">${element.link}</a></p>
    </div>
    `

        card.innerHTML = blogCard;
        blog.appendChild(card);

    });
}

populateBlogs()