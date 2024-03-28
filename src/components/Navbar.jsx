import { links } from "../data";

function Navbar() {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Developer</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map(({ id, href, text }) => {
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg font-medium tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
