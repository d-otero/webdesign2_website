var contentContainer = document.getElementById('content-container');
var navContainer = document.getElementById('nav-container');
var homeContainer = document.getElementById('home');
var cunyfirstContainer = document.getElementById('cunyfirst');
var lovemamaContainer = document.getElementById('lovemama');
var portfolioContainer = document.getElementById('portfolio');
//NAVIGATION INFORMATION
var navigation =
{
    intro: '<h1>Hey, </br>I\'m Dimitri!</h1><h2>UX | UI | Product Designer</h2> <h2>Visual Designer</h2> <h2>Always Learning</h2>',
    description: 'I work to help create clear user experiences and branding between companies and their users.</br></br> With a background in product-design and photo-retouching, I aim to bring unique experiences with a focus on usability.',
    love: 'Coded with love',
    primaryButton: 'learn more',
    about: 'about',
    secondaryButton: 'let\'s chat',
    contact: 'contact'
}

// PREVIEW PROJECTS
var cases = [

    //LOVEMAMA
    {
        //HOMEPAGE SETUP
        project: 'Love Mama',
        next: 'portfolio',
        prev: 'cunyfirst',
        href: 'https://github.com/d-otero/lovemama.git',
        name: 'Love Mama Overhaul',
        platform: 'Web & Mobile',
        role: 'Development | UX/UI | A.I.',
        descColor: 'primary-black-text',
        image: 'home/lovemama.png',
        primaryColor: 'cuny-primary',
    },

      //PORTFOLIO
      {
        //HOMEPAGE SETUP
        project: 'Product Design Portfolio',
        next: 'cunyfirst',
        prev: 'lovemama',
        href: 'https://doterodesign.com',
        name: 'Product Design Portfolio',
        platform: 'Web & Mobile',
        role: 'Design System | UX/UI | A.I.',
        descColor: 'primary-white-text',
        image: 'home/portfolio.png',
        primaryColor: 'primary-red',
    },

    
     //CUNYFIRST
    {
        //HOMEPAGE SETUP
        project: 'CUNYfirst',
        next: 'lovemama',
        prev: 'portfolio',
        href: 'https://github.com/d-otero/cunyfirst-react.git',
        name: 'CUNYfirst Homepage in React',
        platform: 'Mobile App',
        role: 'Developer | Product Designer',
        descColor: 'primary-white-text',
        image: 'home/cunyfirst-main-dashboard.png',
        primaryColor: 'cuny-primary-blue',
    },

]