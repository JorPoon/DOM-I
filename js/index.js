const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const multipleA = document.getElementsByTagName("a");
const tagNameA = Array.from(multipleA);
console.log(tagNameA)



tagNameA[0].textContent = siteContent["nav"]["nav-item-1"];
tagNameA[1].textContent = siteContent["nav"]["nav-item-2"];
tagNameA[2].textContent = siteContent["nav"]["nav-item-3"];
tagNameA[3].textContent = siteContent["nav"]["nav-item-4"]; 
tagNameA[4].textContent = siteContent["nav"]["nav-item-5"]; 
tagNameA[5].textContent= siteContent["nav"]["nav-item-6"];

tagNameA.forEach(element => {
  element.style.color = "green";
})

const header1 = document.querySelector(".cta-text h1");




header1.innerHTML = "DOM <br>Is<br>Awesome";



const btn = document.getElementsByTagName("button");

const btn1 = Array.from(btn);

btn1[0].textContent = siteContent["cta"]["button"];

const headerImg = document.querySelector("#cta-img")

headerImg.setAttribute("src", "img/header-img.png");

const mainContent = document.querySelectorAll(".text-content p");

// mainContent.forEach(element => {
//    element.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
 
// })

mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];


const headerFour = document.getElementsByTagName("h4");

const head4 = Array.from(headerFour);

head4[0].textContent = siteContent["main-content"]["features-h4"];
head4[1].textContent = siteContent["main-content"]["about-h4"];
headerFour[2].textContent = siteContent["main-content"]["services-h4"];
headerFour[3].textContent = siteContent["main-content"]["product-h4"];
headerFour[4].textContent = siteContent["main-content"]["vision-h4"];
headerFour[5].textContent = siteContent["contact"]["contact-h4"];


console.log(head4);
console.log(headerFour);

const midImg = document.querySelector("#middle-img")

midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contactContent = document.querySelectorAll(".contact p");

contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

const footerContent = document.querySelectorAll("footer p");

footerContent[0].textContent = siteContent["footer"]["copyright"];

// NEW NAV TAGS

const blog = document.createElement("a");
blog.textContent = "Blog";
blog.style.color = "green";
const nav = document.querySelector("nav");
nav.appendChild(blog);

const portfolio = document.createElement("a");
portfolio.textContent = "Portfolio";
portfolio.style.color = "green"
nav.appendChild(portfolio);








