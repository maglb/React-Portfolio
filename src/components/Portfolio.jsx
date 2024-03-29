import Project from "./Project";
import fistsOfForecast from "../assets/FistsofForecast.png";
import greenHill from "../assets/GreenHill.png";
import codeQuiz from "../assets/CodeQuiz.png";
import workDay from "../assets/WorkDay.png";
import pwGenerator from "../assets/PWgenerator.png";
import weatherDash from "../assets/weatherDash.png";

const projects = [
  {
    id: 1,
    title: "Fists of Forecast",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: fistsOfForecast,
    app: "https://verred01.github.io/Fists-of-Forecast/",
    github: "https://github.com/Verred01/Fists-of-Forecast",
  },
  {
    id: 2,
    title: "The Green Hill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: greenHill,
    app: "https://the-green-hill-ecommerce-admin-b26231d8324c.herokuapp.com/",
    github:
      "https://github.com/ryandarton/the-green-hill-ecommerce-admin-portal",
  },
  {
    id: 3,
    title: "Code Quiz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: codeQuiz,
    app: "https://maglb.github.io/Code-Quiz/",
    github: "https://github.com/maglb/Code-Quiz",
  },
  {
    id: 4,
    title: "Work Day Scheduler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: workDay,
    app: "https://maglb.github.io/Work-Day-Scheduler/",
    github: "https://github.com/maglb/Work-Day-Scheduler",
  },
  {
    id: 5,
    title: "Password Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo. Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue nec, rhoncus magna. Sed cursus eu justo id venenatis.",
    image: pwGenerator,
    app: "https://maglb.github.io/JS-PasswordGenerator/",
    github: "https://github.com/maglb/JS-PasswordGenerator",
  },
  {
    id: 6,
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
          image={project.image}
          app={project.app}
          github={project.github}
        />
      ))}
    </div>
  );
}
