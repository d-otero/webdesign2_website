var sectionStart;


var navContainer = $('#nav-container');


var children = Array.from($(contentContainer).children());
var noHash = location.hash.replace(/^#/, '');
var activeElement = $(location.hash);
var activeChildren = $(activeElement).children();
var caseStudy = false;

var controller;
var sectionStart;
var current;


window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})


function reset() {
    //RESET SCROLL POSITION TO 0
    window.scrollTo(0, 0);


    //RESET CASE STUDY PROGRESS BAR
    caseStudy = false;
    $('#myBar').css({ "width": "0px" });
    

    //HIDE ALL CHILDREN TO LOAD NEXT PAGE
    $(children).hide();


    //EVENT LISTNERS

    //ON CLICK FNUCTION
    document.addEventListener('click', function (e) {
        //IF TARGET IS CLASS BUTTON, GET DATA ATTRIBUTE HREF
        target = e.target;
        if (target.matches('.button')) {
            location.href = target.getAttribute('data-href');
        }

        window.addEventListener('hashchange', function () {
            setCurrentSection()
            reset();
        });
    })
}
