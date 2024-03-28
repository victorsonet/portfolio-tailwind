import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello there! I'm Viktor, a passionate web developer dedicated to
            crafting immersive digital experiences. With a keen eye for detail
            and a love for innovation. My journey in the realm of coding began
            with a curiosity that turned into a full-fledged passion. Over the
            years, I've honed my skills in front-end and back-end development,
            learning skills like HTML, CSS, JavaScript, React and beyond.
            Whether it's building sleek user interfaces or architecting robust
            backend systems, I approach each project with enthusiasm and a
            commitment to excellence. Driven by a desire to stay ahead of the
            curve, I'm constantly exploring new technologies and trends in the
            ever-evolving landscape of web development. From responsive design
            principles to the latest frameworks and libraries, I embrace the
            challenge of staying current in this fast-paced industry. But beyond
            the code, I believe in the power of collaboration and communication.
            I thrive in team environments where ideas are shared freely, and
            creativity knows no bounds.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
