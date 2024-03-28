import Project from "./Project";
import fistsOfForecast from "../assets/FistsofForecast.png";
import greenHill from "../assets/GreenHill.png";

const projects = [
  {
    id: 1,
    title: "Fists of Forecast",
    description: "description project here tktktktkt",
    image: fistsOfForecast,
    app: "https://verred01.github.io/Fists-of-Forecast/",
    github: "https://github.com/Verred01/Fists-of-Forecast",
  },
  {
    id: 2,
    title: "The Green Hill",
    description: "description project here tktktktkt",
    image: greenHill,
    app: "https://the-green-hill-ecommerce-admin-b26231d8324c.herokuapp.com/",
    github:
      "https://github.com/ryandarton/the-green-hill-ecommerce-admin-portal",
  },
  {
    id: 3,
    title: "Project 3",
    description: "description project here tktktktkt",
    image: "",
    app: "",
    github: "",
  },
];

export default function Portfolio() {
  return (
    <div className="container pt-4">
      {
        projects.map((project) => (
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
