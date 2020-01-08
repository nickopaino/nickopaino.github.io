let projects = [
  {
    name: "NANKID",
    description: "Content Management System",
    pltt: [ "Drupal", "HTML", "CSS", "JS" ],
    link: "#",
    image: "assets/images/Nankid.png",
    status: 1,
    year: 2020,
    group: 1
  },
  {
    name: "MCDO",
    description: "Database Optimization and CRM",
    pltt: [ "NodeJS", "MySQL", "GIT" ],
    link: "#",
    image: "assets/images/Mcdo.png",
    status: 1,
    year: 2020,
    group: 1
  },
  {
    name: "2GO EXPRESS",
    description: "System that can track, trace and book packages.",
    pltt: [ "NodeJS", "ReactJS", "HTML", "CSS", "JS", "PostgreSQL", "GIT" ],
    link: "#",
    image: "assets/images/2go_Express.png",
    status: 1,
    year: 2020,
    group: 1
  },
  {
    name: "UNIONBANK",
    description: "Human Resource Management System (HRX)",
    pltt: [ "APPIAN", "HTML", "CSS", "JS", "MySQL"],
    link: "#",
    image: "assets/images/CZAXxzuX_400x400.jpg",
    status: 2,
    year: 2019,
    group: 1
  },
  {
    name: "JROOZ CELPIP",
    description: "Content Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "MySQL" ],
    link: "http://www.jroozcelpipreview.com.ph/",
    image: "assets/images/Jrooz_Celpip.png",
    status: 3,
    year: 2018,
    group: 1
  },
  {
    name: "JROOZ REVIEW CENTER",
    description: "Learning Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "ReactJS", "MySQL"],
    link: "#",
    image: "assets/images/JRooz.jpg",
    status: 2,
    year: 2018,
    group: 1
  },
  {
    name: "JROOZ OET",
    description: "Content Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "MySQL"],
    link: "https://www.jroozoetreview.com.ph/",
    image: "assets/images/JRooz_OET.png",
    status: 3,
    year: 2018,
    group: 2
  },
  {
    name: "JROOZ PTE",
    description: "Content Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "MySQL"],
    link: "https://www.pteacademic.com.ph/",
    image: "assets/images/JRooz_PTE.png",
    status: 3,
    year: 2018,
    group: 2,
    imgBg: true
  },
  {
    name: "JROOZ REVIEW CENTER",
    description: "Online Review with Content Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "MySQL"],
    link: "https://www.jroozonlinereview.com/",
    image: "assets/images/JRooz_Online.png",
    status: 3,
    year: 2018,
    group: 2
  },
  {
    name: "JROOZ REVIEW CENTER",
    description: "Content Management System",
    pltt: [ "PHP", "WordPress", "HTML", "CSS", "JS", "AJAX", "MySQL"],
    link: "https://www.jroozreview.com/",
    image: "assets/images/JRooz.jpg",
    status: 3,
    year: 2018,
    group: 2
  }
];

for (let i = 0; i < projects.length; i++) {
  const div = document.createElement("div");
  div.className = '';

  let color = "";
  let text = "";

  if (projects[i].status===1) {
    color = "#f54029"
    linkText = "ON GOING"
  } else if (projects[i].status===2) {
    color = "#1e7fc6"
    linkText = "N/A"
  } else if (projects[i].status===3) {
    color = "#1e7fc6"
    linkText = "VISIT"
  }

  div.innerHTML = `
    <div class="card">
      <div class="card-img">
          <img src="${projects[i].image}" alt="" style="${projects[i].imgBg ? 'background: linear-gradient(to bottom, #1992cc  0%, #1992cc  50%, #2c3e50 50%, #2c3e50 100%);' : ''}">
      </div>
      <div class="card-body">
        <h4 class="card-header">${projects[i].name}</h4>
        
        <p class="card-desc">${projects[i].description}, <i>${projects[i].year}</i></p>
        <p class="card-desc"><small>( ${projects[i].pltt.join(", ")} )</small></p>
      </div>
      <div class="card-footer">
        <a href="${projects[i].status!=3 ? 'JavaScript:void(0)' : projects[i].link}"
          class="card-link" style="color: ${color};">${linkText}</a>
      </div>
    </div>
  `;
  projects[i].group===1 ?
  document.getElementById("projects").appendChild(div) :
  document.getElementById("otherProjects").appendChild(div);
}