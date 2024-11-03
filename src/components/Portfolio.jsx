import Project from "./Project";
import CSP from "../assets/CSP_Web.png";
import TP from "../assets/TP_Website.png";
import greenHill from "../assets/GreenHill.png";
import feastBook from "../assets/Feastbook.png";
import codeQuiz from "../assets/CodeQuiz.png";
import workDay from "../assets/WorkDay.png";
import pwGenerator from "../assets/PWgenerator.png";
import weatherDash from "../assets/weatherDash.png";

const projects = [
  {
    id: 1,
    title: "Clear Strategy Partners Website",
    description:
      "Clear Strategy Partner is a full-service communications firm based in the DC/Baltimore region, specializing in serving corporate, government, and association clients in the clean energy sector. I took the lead on designing and fully coding the new website using React, creating a user-friendly and visually engaging platform that reflects the firm’s commitment to innovation in communications.",
    image: CSP,
    technology: "React, CSS",
    app: "https://cspfirm.com/",
  },
  {
    id: 2,
    title: "Website Maintenance",
    image: TP,
    description:
      "For a client in the energy sector, I managed the maintenance and updates of the database associated with the news page, as well as creating and updating new pages, such as the supplier page. Additionally, I ensured proper headline tag hierarchy on the homepage and optimized meta descriptions for improved SEO compliance.",
    app: "https://www.terrapower.com/",
    technology: "Vue.js, JS, HTML, MySQL, PHP",
  },
  {
    id: 3,
    title: "The Green Hill",
    description:
      "The Green Hill is a small family-owned business in Utah that offers fresh eggs and honey produced right in their backyard. To support their operations, We built and admin portal application that enables them to easily add, update, and delete products. This solution streamlines their inventory process, helping them focus more on their craft and less on administrative tasks.",
    image: greenHill,
    app: "https://the-green-hill-ecommerce-admin-b26231d8324c.herokuapp.com/",
    technology:
      "Node.js, Express.js, Handlebars.js, MySQL and the Sequelize ORM for the database, Bulma as CSS framework.",
  },
  {
    id: 4,
    title: "FeastBook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: feastBook,
    app: "https://feastbook.onrender.com/",
    github: "https://github.com/maglb/Code-Quiz",
  },
  {
    id: 5,
    title: "Code Quiz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: codeQuiz,
    app: "https://maglb.github.io/Code-Quiz/",
    github: "https://github.com/maglb/Code-Quiz",
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: pwGenerator,
    app: "https://maglb.github.io/JS-PasswordGenerator/",
    github: "https://github.com/maglb/JS-PasswordGenerator",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: weatherDash,
    app: "https://maglb.github.io/Weather-Dashboard/",
    github: "https://github.com/maglb/Weather-Dashboard",
  },
];

export default function Portfolio() {
  return (
    <div className="container pt-4">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          technology={project.technology}
          image={project.image}
          app={project.app}
          // github={project.github}
        />
      ))}
    </div>
  );
}
