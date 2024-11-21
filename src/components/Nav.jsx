export default function Nav({ links }) {
  return (
                  <ul className="navigation">
              {links.map((link) => link)}
            </ul>
  );
}
