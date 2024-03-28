export default function Project(props) {
    return (
      <div class=" mb-3 col-lg-9 mx-auto" id="portfolio">
        <img src={props.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <p class="card-text description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            varius blandit nisl, hendrerit volutpat erat. Morbi sodales magna
            enim, in ornare mi vulputate vel. Proin dapibus tincidunt commodo.
            Sed pellentesque dictum lacinia. Ut a sapien semper, posuere augue
            nec, rhoncus magna. Sed cursus eu justo id venenatis.
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