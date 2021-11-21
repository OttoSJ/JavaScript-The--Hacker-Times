


let newspaperContainer = document.createElement("div");
newspaperContainer.setAttribute("class", "newspaper-container");
document.body.appendChild(newspaperContainer);

let header = document.createElement("header");
newspaperContainer.appendChild(header);

let headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "date");
header.appendChild(headerDiv);
headerDiv.textContent = "JANUARY 1, 1970";

let h1 = document.createElement("h1");
header.appendChild(h1);
h1.textContent = "The Hacker Times";

let headerNavBar = document.createElement("nav");
newspaperContainer.appendChild(headerNavBar);

let navUl = document.createElement("ul");
headerNavBar.appendChild(navUl);

for (i = 0; i < 8; i++) {
    let navUlLi = document.createElement("li");

    let ulLiAHref = document.createElement("a");
    ulLiAHref.setAttribute("class", "navListHref");
    ulLiAHref.href = "#";
    // ulLiAHref.title = "http://example.com"

    navUlLi.appendChild(ulLiAHref);

    navUl.appendChild(navUlLi);

    console.log(navUlLi[i]);
}


// navListHref[0].textContent = "HTML & CSS";
// navListHref[1].textContent = "UX & UI";
// navListHref[2].textContent = "JAVASCRIPT";
// navListHref[3].textContent = "EXPRESS";
// navListHref[4].textContent = "MONGODB";
// navListHref[5].textContent = "REACT";
// navListHref[6].textContent = "CYBERSECURITY";
// navListHref[7].textContent = "PYTHON";



let navListHref = document.getElementsByClassName("navListHref");
navArray = [

     "HTML & CSS",
     "UX & UI", 
     "JAVASCRIPT",  
     "EXPRESS",
     "MONGODB", 
     "REACT", 
     "CYBERSECURITY", 
     "PYTHON", 
    ]

    for (i = 0; i < navArray.length; i++) {
        navListHref[i].textContent = navArray[i];
    }

    let main = document.createElement("main");
    newspaperContainer.appendChild(main);

    let h2Main = document.createElement("h2");
    h2Main.textContent = "Have You Tried Turning It On and Off Again?";
    main.appendChild(h2Main);

    let h5Main = document.createElement("h5"); 
    h5Main.textContent = "By Maurice Moss";
    main.appendChild(h5Main);

    let mainImg = document.createElement("img");
    mainImg.src = "assets/images/typingOnMac.jpg";
    mainImg.alt = "Picture of hands typing on a mac computer";
    main.appendChild(mainImg);

    let mainP = document.createElement("p");
    mainP.textContent = "Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here";
    main.appendChild(mainP);

    let sectionContainerDiv = document.createElement("div");
    sectionContainerDiv.setAttribute("class", "moreArticles");
    newspaperContainer.appendChild(sectionContainerDiv);

    let sectionTabsVs = document.createElement("section");
    sectionContainerDiv.appendChild(sectionTabsVs);

    let h4sectionTabs = document.createElement("h4");
    h4sectionTabs.textContent = "Tabs vs.  Spaces";
    sectionTabsVs.appendChild(h4sectionTabs);

    let imgSectionTabsVs = document.createElement("img");
    imgSectionTabsVs.src = "assets/images/blurryScreen.jpg";
    imgSectionTabsVs.alt = "blurry picture of a computer screen";
    sectionTabsVs.appendChild(imgSectionTabsVs);

    let pSectionTabs = document.createElement("p");
    pSectionTabs.textContent = "Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here";
    sectionTabsVs.appendChild(pSectionTabs);

    let sectionHow = document.createElement("section");
    sectionContainerDiv.appendChild(sectionHow);

    let h4SectionHow = document.createElement("h4");
    h4SectionHow.textContent = "How Much Caffeine Is Too Much?";
    sectionHow.appendChild(h4SectionHow);

    let imgSectionHow = document.createElement("img");
    imgSectionHow.src = "assets/images/button.jpg";
    imgSectionHow.alt = "picture of a button";
    sectionHow.appendChild(imgSectionHow);

    let pSectionHow = document.createElement("p");
    pSectionHow.textContent = "Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here Placeholder Text Here";
    sectionHow.appendChild(pSectionHow);
