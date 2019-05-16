//CONSTRUCT NAVIGATION
function navConstructor(p) {
    let nav = '';
        nav +=
        `
        <nav>
            <div class="menu-nav">
                <svg id="mobile-menu" width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="40" y2="1.5" stroke="black" stroke-width="3"/>
                    <path d="M0 12.2683H27" stroke="black" stroke-width="3"/>
                    <path d="M0 23H18" stroke="black" stroke-width="3"/>
                </svg>

                <svg id="main-logo" enable-background="new 0 0 60 60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="#231f20" fill-rule="evenodd"><path d="m30 0-30 30 30 30 30-30zm-26.7 30 26.7-26.7 26.7 26.7-26.7 26.7z"/><g transform="translate(23.617021 11.489362)"><path d="m2.4 31.3v-25.5l12.2 12.8-2.1 2.2c.8.2 1.5.6 2.2 1l3.1-3.2-17.7-18.5v36.9l4.9-5.1c-.5-.6-.8-1.4-1.1-2.2z"/><path d="m14.7 21.8-1.6 1.7c1.4.8 2.4 2.4 2.4 4.2 0 2.7-2.2 4.8-4.8 4.8-1.7 0-3.2-.9-4.1-2.3l-1.6 1.7c1.3 1.7 3.3 2.9 5.7 2.9 3.9 0 7.1-3.2 7.1-7.1-.1-2.5-1.3-4.7-3.1-5.9"/><path d="m10.5 22.8 2-2.1c-.6-.2-1.2-.2-1.8-.2-3.9 0-7.1 3.2-7.1 7.1 0 .7.1 1.4.3 2.1l2-2c0-2.7 2.1-4.8 4.6-4.9"/><path d="m5.9 27.7-2 2c.2.8.6 1.5 1.1 2.2l1.6-1.7c-.4-.7-.7-1.6-.7-2.5"/><path d="m10.5 22.8h.2c.9 0 1.7.2 2.4.6l1.6-1.7c-.7-.5-1.4-.8-2.2-1z"/></g></g>
                </svg>

                <h2 id="current-section"></h2>
            </div>

            <div class="progress-bar" id="myBar"></div>


        <div id="nav__items">
            <a href="#"><h1>Work</h1>
                <a href="#blah">BLAH</a>
                <a href="#cunyfirst">CUNYfirst</a>
                <a href="#salvationarmy">Salvation Army</a>
                <a href="#safesex">STD Awareness</a>
                <a href="#gladwell">Gladwell: Book Covers</a>
            </a>
            <a href="#"><h1>About</h1></a>
        </div>
        </nav>
        <section class="info-container">
            <h1>${p.intro}</h1>
            <p class='semi-bold'>${p.description}</p>
            <p>Message me at <a href="mailto:doterodesign@gmail.com">doterodesign@gmail.com</a></p>
            <div id="social-media">
                <a href="https://www.linkedin.com/in/dimitri-otero/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Linkedin"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-linkedin"></use></svg></a>
                <a href="https://www.behance.net/doterodesign" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Behance"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-behance"></use></svg></a>
                <a href="https://www.instagram.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Instagram"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-instagram"></use></svg></a>
                <a href="https://www.pinterest.com/doterodesign/" target="_blank" rel=”noreferrer” aria-label="Dimitri Otero Pinterest"><svg class="icon social-icons"><use xlink:href="images/sprites.svg#icon-pinterest"></use></svg></a>
            </div>
            <h4 class="love">Hand-coded with love</h4>
        </section>
        `
    return nav;
}
navContainer.innerHTML = navConstructor(navigation);


//PREVIEW CONSTRUCTOR
function templateConstructor(p) {
    let projects = '';
    for (var i in p) {
        //INTRO PROJECT TEMPLATE
        projects +=
        `
        <section class="project-preview ${p[i].primaryColor}" data-project-name='${p[i].href}'>
        <div class="image__container-xl">
            <img src="images/${p[i].image}" alt="">
        </div>
            <div class="info-container">
                <h2 class="bold">${p[i].name}</h2>
                <p class="${p[i].descColor}">${p[i].role}</p>
                <a class="button circle-arrow ${p[i].buttonColor}" href="${p[i].href}" target="_blank"><svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 20H46M46 20L28 2M46 20L28 38" stroke-width="4" stroke-linecap="round"/>
                </svg></a>
            </div>
        </section>
        `
    }
    return projects;
};

homeContainer.innerHTML = templateConstructor(cases);