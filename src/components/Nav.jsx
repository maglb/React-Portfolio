export default function Nav({ links }) {
  return (
                  <ul className="navbar-nav mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
  );
}
