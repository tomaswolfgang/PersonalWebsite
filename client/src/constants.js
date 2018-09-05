
import shb from './img/shb.png';
import mnet from './img/mnet.png';
import nim from './img/nim.png';
import tra from './img/tra.jpg';
import sim from './img/sim.png';

const TABS = ["Work", "Projects", "Personal"];
const TABINFO = {
  Work: [
    {
        title: "Sharebee",
        position: "Web Developer",
        description: [
          "Javascript, JQuery, Laravel, PHP, Git, SCSS, HTML, Solidity",
          "- Implemented new design of the entire platform website",
          "- Built token website",
          "- Built initial Ethereum token structure and logic",
        ],
        img: shb,
        color: '#f9c252',
        date: 'January, 2018 - June, 2018',
        link: "http://sharebee.io",
    },
    {
        title: "Nimbus Tutoring",
        position: "Android Developer",
        description: [
          "Javascript, React Native, Git",
          "- Collaborated and published an app to facilitate interfacing between students and tutors",
          "- Built an app that provides a social network for events happening near you",
        ],
        img: nim,
        color: '#a3dbdc',
        date: 'May, 2017 - December, 2017',
        link: "https://www.nimbusapp.ca/",
    },
    {
        title: "S!MVO",
        position: "Web Developer",
        description: [
          "HTML, CSS, Javascript, JQuery, PHP, Laravel, Git",
          "- Worked with a small team of developers to design and build a degree planner website for the McGill Faculty of Engineering",
          "- Contributed and participated in Scrum to effectively plan updates and sprints",
        ],
        img: sim,
        color: '#ff9090',
        date: 'May, 2016 - August, 2016',
        link: "https://www.simvo.io/",
    },
    {
        title: "TranceApp",
        position: "Web Development Intern",
        description: [
          "HTML, CSS, JavaScript, JQuery, PHP, Git",
          "- Improved main page UI and navigation resulting in twice as many downloads from the website",
          "- Reduced page loading speed by 30% by minimizing dependencies and dynamically loading content",
        ],
        img: tra,
        color: '#77c9c0',
        date: 'May 15, 2015 - August, 2015',
        link: "http://tranceapp.com/trance-for-pros/",
    },
    {
        title: "MaintenanceNet",
        position: "Operations Intern",
        description: [
          "SQL, SQL SSRS reporting software",
          "- Developed database query programs for internal company use",
        ],
        img: mnet,
        color: '#a6e361',
        date: 'May, 2013 - August, 2013',
        link: "https://www.cisco.com/c/en/us/services/acquisitions/maintenancenet.html",
    },
  ],
  Projects: [
    {
        title: "Hansa 361",
        icon: "fa fa-shield",
        position: "",
        description:[
           "- A strategy, role-playing game with procedurally generated content",
           "- Worked with a team to generate various UML diagrams",
           "- Utilized Agile techniques in development of this project",
        ],
        color: '#c1f6ff',
        link: 'https://github.com/tomaswolfgang/hansa361',
        date: 'C#, Unity, Git',
    },
    {
        title: "P BLAST",
        icon: "fa fa-flask",
        position: "",
        description:[
           "- A Java decorator class for the bioinformatics tool BLAST",
           "- Locates and scores query strings against probabilistic datasets"
        ],
        color: '#c1f6ff',
        link: 'https://github.com/tomaswolfgang/Probabilistic-BLAST',
        date: 'Java, Eclipse',
    },
    {
        title: "VMB",
        icon: "fa fa-th",
        position: "",
        description:[
           "- A game that procedurally generates clusters of linked mazes",
           "- class structure designed to emphasize encapsulation",
           "- Abstracted Minimum Spanning Tree algorithm for procedural generation",
        ],
        color: '#c1f6ff',
        link: 'https://github.com/tomaswolfgang/VMB',
        date: 'C#, Unity',
    },
  ],
};

const PERSONALTAB = [
  {
    title: "Dance",
    descriptions: [
      {
        subtitle: "Academy Dance Competition",
        subdesc: "Urban Groove, 3rd Place",
        link: "https://www.youtube.com/watch?v=slp24q-OVA0",
        date: "March, 2018"
      },
      {
        subtitle: "Academy Dance Competition",
        subdesc: "Urban Groove, 3rd Place",
        link: "https://www.youtube.com/watch?v=NidlkFlRAJw",
        date: "March, 2016"
      },
      {
        subtitle: "Complex Dance competition",
        subdesc: "Summer Stacks 3rd Place",
        link: "https://www.youtube.com/watch?v=hawEXixWGSY&index=4&list=PLOuiLshQ_4j3O4HuxPmsUr0v-DZQKlMcp",
        date: "July, 2015"
      },
      {
        subtitle: "Collaboration Dance Competition",
        subdesc: "Funksters 3rd Place",
        link: "https://www.youtube.com/watch?v=ieSFJGXBbG4&index=4&list=PL98999E0853AF06F8",
        date: "March, 2012"
      }
    ]
  },
];

export {PERSONALTAB, TABS, TABINFO};
