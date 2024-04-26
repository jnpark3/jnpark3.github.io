// Content to be used for website

var base_content = {
    "intro_text": [
        ["I am currently a third-year at the University of Chicago, majoring in mathematics, computer science, and economics.", "2024-07-01"],
        ["I am currently a fourth-year at the University of Chicago, majoring in mathematics, computer science, and economics.", "2025-07-01"],
        ["I am a graduate of the University of Chicago, with degrees in mathematics, computer science, and economics.", "2200-01-01"]
    ],
    "research_projects": [
        {
            "name": "Particle Track Construction with Graph Neural Networks",
            "description": [
                "Designed graph neural network models to accurately predict particle trajectories using raw data from high-energy collision detectors",
                "This project was completed as a part of Google Summer of Code, in partnership with CERN-HSF"
            ],
            "skills": [],
            "image": "assets/img2.svg",
            "buttons": [
                ["View Project", "https://summerofcode.withgoogle.com/archive/2023/projects/bL22MDFU"],
                ["View Code", "https://gist.github.com/jnpark3/f30662b6948cd7e1a346da76c8116daa"]
            ],
        },
        {
            "name": "Time Series Forecasting with Learned Decompositions",
            "description": [
                "Constructed a novel time series forecasting model that decomposes time series data into interpretable components",
                "Presented at the 2023 Midstates Undergraduate Research Symposium"
            ],
            "skills": [],
            "image": "assets/img1.svg",
            "buttons": [
                ["View Project", "https://drive.google.com/file/d/1TGkqBMhXqWvuxfwzOI90Xdgkouq1IyKB/view"]
            ],
        },
        {
            "name": "Efficient Density-Based Clustering with Delaunay Triangulation",
            "description": [
                "Developed DT-DBSCAN, a density-based clustering algorithm that classifies data in linear expected time through Delaunay Triangulation",
                "Selected to be a Regeneron Science Talent Search Scholar for my work on this project"
            ],
            "skills": [],
            "image": "assets/img9.svg",
            "buttons": [
                ["View Project", "https://www.scribd.com/document/439876438/DT-DBSCAN-Density-Based-Spatial-Clustering-in-Linear-Expected-Time-Using-Delaunay-Triangulation"],
                ["View Code", "https://github.com/jnpark3/DT-DBSCAN-Implementation"],
            ],
        },
        {
            "name": "Cardinality and Isomorphisms of Finite Fields",
            "description": [
                "Analyzed the possible cardinalities of finite fields and the types of isomorphisms between fields of equal cardinality",
                "Completed as a part of the 2022 University of Chicago Summer Mathematics REU"
            ],
            "skills": [],
            "image": "assets/img8.svg",
            "buttons": [
                ["View Paper", "https://drive.google.com/file/d/1ivYStu8HOpiRuQTlRFmF-ib3kgdDNJdh/edit"]
            ],
        },
    ],
    "software_projects": [
        {
            "name": "Airstash",
            "description": [
                "Web application that enables users to automate investment portfolio management using a drag-and-drop interface",
                "Employs machine learning to facilitate tax-loss harvesting and portfolio rebalancing"
            ],
            "skills": ["Angular", "Node", "Express", "MongoDB", "Javascript", "Python", "Tensorflow"],
            "image": "assets/img4.png",
            "buttons": [
                ["View Demo", "https://www.youtube.com/watch?v=6Yw5cnbUD-w"],
                ["View Homepage", "https://www.airstash.io/"],
            ],
        },
        {
            "name": "Web Impact Builder",
            "description": [
                "No-code website builder that allows non-profit organizations to quickly create and deploy engaging websites",
                "Created during 2023 UChicago Uncommon Hacks"
            ],
            "skills": ["Angular", "Node", "Express", "Javascript", "MongoDB"],
            "image": "assets/img5.png",
            "buttons": [
                ["View Demo", "https://youtu.be/qQSNC7vnqtQ"],
                ["View Code", "https://github.com/jnpark3/web_impact_builder"],
            ],
        },
        {
            "name": "Biblios",
            "description": [
                "Mobile application that facilitates the exchange of used textbooks between students",
            ],
            "skills": ["React", "Node", "Javascript", "Google Cloud"],
            "image": "assets/img6.png",
            "buttons": [
                ["View Demo", "https://www.youtube.com/watch?v=D86-UP54yvI"],
            ],
        },
        {
            "name": "Personal Website",
            "description": [
                "Personal website created to showcase my projects and experiences",
            ],
            "skills": ["HTML/CSS", "Javascript"],
            "image": "assets/img7.png",
            "buttons": [
                ["View Project", "https://jianpark.com/"],
                ["View Code", ""],
            ],
        }
    ],
    "images_1": [
        ["assets/art1.webp", null],
        ["assets/art3.webp", null],
        ["assets/art8.webp", ["View Game ->", "https://drive.google.com/drive/folders/1JcDr_3uXnw7S8yscBk1gk206wk6jtRoq"]],
        ["assets/art10.webp", ["View Game ->", "https://drive.google.com/drive/folders/1eWFn7BVkg43ShN9vs4NDU9G1fDnqa9UG"]],
    ],
    "images_2": [
        ["assets/art5.webp", null],
        ["assets/art4.webp", null],
        ["assets/art6.webp", ["View Game ->", "https://drive.google.com/drive/folders/1vhb-iqOiMskgxS4iRGMy1_YKOKNs1bFp"]],
        ["assets/art13.webp", ["View Game ->", "https://boardgamegeek.com/thread/2591406/wip-burger-chain-2021-54-card-contest-initial-play"]],
    ],
    "images_3": [
        ["assets/art9.webp", null],
        ["assets/art2.webp", null],
        ["assets/art7.webp", ["View Game ->", "https://drive.google.com/drive/folders/1ZqQV5SACvIZ7POKKuHYmHa-0ndo0U6mM"]],
        ["assets/art12.webp", ["View Game ->", "https://drive.google.com/drive/folders/1lIqG3tCNgiWkJJk5cdb91arARugjaf_7"]],
    ],
}

function createRow(title, description, buttons, skills, image) {
    const div = document.createElement('div');

    div.className = 'box-container';

    var description_str = ``
    for (var i = 0; i < description.length; i++) {
        description_str += `
        <div class="medium-v-space full-width box"></div>
        <div class="text row center-vertical">
            <div class="h-space"></div>
            <div class="row full-width">
                <div class="color-light arrow-icon-displacement bullet-point-width">` + "->" + `</div>
                <div class="color-light"> `+ description[i] + ` </div>
            </div>
        </div>`
    }

    var skills_str = ``
    for (var i = 0; i < skills.length; i++) {
        skills_str += `
        <div class="skillbox small-container">` + skills[i] + `</div>`;
    }

    var buttons_str = ``
    for (var i = 0; i < buttons.length; i++) {
        buttons_str += `<a class="small-container color-main background-highlight button mobile-button"
                href="` + buttons[i][1] + `" target="_blank">
                ` + buttons[i][0] + ` ->
            </a><div class="medium-h-space"></div>`;
    }

    var height = ``;
    if (image != null) {
        height = `box-height`;
    }

    str = `
    <div class="large-h-space"></div>
    <div class="column full-width box ` + height + `">
      <div class="dot-grid border-top border-bottom color-lightest column padding box">
          <div class="full-height"></div>
          <div class="start-vertical end-horizontal box column">
            <div class="container text-black">` + title + `</div>
            <div class="row">` + skills_str + `</div>
          </div>
      </div>
      <div class="v-space"></div>
      <div class="padding-horizontal">
        ` + description_str + `
        <div class="large-v-space"></div>
        <div class="row">` + buttons_str + `</div>
      </div>
      <div class="large-v-space full-width color-lightest border-bottom"></div>
    </div>
    `;

    if (image != null) {
        str += `<div class="large-h-space"></div>
        <div class="aspect-ratio border rounded padding box box-height" 
            style="background-image: url('` + image + `'); 
            background-size: cover;">
        </div>`
    }
    else{
        str += `<div class="large-h-space"></div>
        <div class="aspect-ratio padding box box-height">
        </div>`
    }

    div.innerHTML = str;

    return div;
}

function createImage(image_tuple) {
    var div = document.createElement('div');
    var image = `<div class="full-width hover-grow" style="position: relative;">`;
    if (image_tuple[1] != null) {
        image += `<div class="padding-small" style="position: absolute;">
        <a class="small-container color-light button"
            href="` + image_tuple[1][1] + `" target="_blank">
            ` + image_tuple[1][0] + `</a>
        </div>`
    }
    image += `<img src="` + image_tuple[0] + `" class="full-width rounded border"></img></div>
    <div class="medium-v-space"></div>`
    div.innerHTML = image;
    return div;
}

function initialze(content) {
    var research_projects = document.getElementById('research_projects');
    var software_projects = document.getElementById('software_projects');
    var intro_text = document.getElementById('intro_text');
    var images_1 = document.getElementById('images_1');
    var images_2 = document.getElementById('images_2');
    var images_3 = document.getElementById('images_3');

    research_projects.innerHTML = "";
    software_projects.innerHTML = "";
    intro_text.innerHTML = "";
    images_1.innerHTML = "";
    images_2.innerHTML = "";
    images_3.innerHTML = "";

    // Set research projects
    for (var i = 0; i < content.research_projects.length; i++) {
        div = createRow(
            content.research_projects[i].name,
            content.research_projects[i].description,
            content.research_projects[i].buttons,
            content.research_projects[i].skills,
            content.research_projects[i].image,
        );
        research_projects.appendChild(div);
    }

    // Set software projects
    for (var i = 0; i < content.software_projects.length; i++) {
        div = createRow(
            content.software_projects[i].name,
            content.software_projects[i].description,
            content.software_projects[i].buttons,
            content.software_projects[i].skills,
            content.software_projects[i].image,
        );
        software_projects.appendChild(div);
    }

    // Set images
    for (var i = 0; i < content.images_1.length; i++) {
        div = createImage(content.images_1[i]);
        images_1.appendChild(div);
    }
    for (var i = 0; i < content.images_2.length; i++) {
        div = createImage(content.images_2[i]);
        images_2.appendChild(div);
    }
    for (var i = 0; i < content.images_3.length; i++) {
        div = createImage(content.images_3[i]);
        images_3.appendChild(div);
    }

    // Set intro text
    try{
        current_date = new Date();
        for (var i = 0; i < content.intro_text.length; i++) {
            if (current_date < new Date(content.intro_text[i][1])){
                intro_text.innerHTML = content.intro_text[i][0];
                break;
            }
        }
    }
    catch (e) {
        intro_text.innerHTML = content.intro_text[0][0];
    }
}

initialze(base_content);

// Smooth Scrolling Code

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('scroll-container');
    const scrollBar = document.getElementById('scroll-bar');

    window.addEventListener('resize', () => {setBarHeight();});
    document.addEventListener('wheel', (event) => {setBarHeight();}, { passive: false });
    document.getElementById('scroll-to-top').onclick = scrollToTop;
    document.getElementById('scroll-to-contact').onclick = scrollToContact;

    function scrollToContact() {
        content.scrollTo(0, content.scrollHeight - content.clientHeight);
        setBarHeight();
    }
    function scrollToTop() {
        content.scrollTo(0, 0);
        setBarHeight();
    }
    function setBarHeight(){
        var contentHeight = content.scrollHeight - content.clientHeight;
        var currentScroll = content.scrollTop;
        scrollBar.style.height = (100 * currentScroll/contentHeight) + "%";
    }
});

