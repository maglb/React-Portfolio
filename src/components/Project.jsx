export default function Project(props) {
    return (
      <div class=" mb-3 col-lg-9 mx-auto" id="portfolio">
        <img src={props.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <p class="card-text description">
            {props.description}
          </p>
          <a class="btn" target="_blank" href={props.app} role="button">
            See Application
          </a>
          <a class="btn" target="_blank" href={props.github} role="button">
            Github
          </a>
        </div>
      </div>
    );
}