import IProject from '../interfaces/IProject';

export const projects: IProject[] = [
    {
        id: 1,
        name: "Team Builder",
        description: "This application aims to help build teams, foster creativity, and strengthen culture in a remote workforce. It provides a fun way to break the ice in remote meetings and help team members bond. Group project.",
        tools: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Axios", "Express", "Handlebars", "Auth0", "Passport", "MySQL", "Sequelize", "FileStack"],
        image: "./images/team-builder.jpg",
        site: "https://the-team-builder.herokuapp.com/",
        code: "https://github.com/hilbug/the-team-builders",
        group: "For this project I served on the Back-End Team, tasked with authentication, API structure, image handling, and database calls."
    },
    {
        id: 2,
        name: "High Card Picks Dinner",
        description: "Relationship saver app! Help couples, friends, roommates fairly choose who picks dinner and find quality dinner choices. Group project.",
        tools: ["HTML", "CSS", "JavaScript", "JQuery", "MaterializeCSS", "Card and Recipe APIs", "AnimateCSS", "MomentJS", "ChartJS"],
        image: "./images/high-card.jpg",
        site: "https://tiffany-brand.github.io/high-card-picks-dinner/",
        code: "https://github.com/tiffany-brand/high-card-picks-dinner",
        group: "For this project I served as Project Manager and Front-End Designer"
    },
    {
        id: 3,
        name: "Gourmet Burger Logger",
        description: "The Gourmet Burger Logger is an application built in the MVC pattern to track crafted and devoured burgers. Users enter a burger description to add a burger to the crafted list. Clicking the Devour button marks the burger as eaten, and burgers can also be deleted.",
        image: "./images/gourmet-burger.jpg",
        tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Handlebars", "MySQL"],
        site: "https://tiffany-brand.github.io/high-card-picks-dinner/",
        code: "https://github.com/tiffany-brand/high-card-picks-dinner",
        group: "For this project I served as Project Manager and Front-End Designer"
    },

]