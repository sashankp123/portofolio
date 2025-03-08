// Declaration file for components
declare module './components/Summary' {
  const Summary: React.FC;
  export default Summary;
}

declare module './components/Experience' {
  const Experience: React.FC;
  export default Experience;
}

declare module './components/Projects' {
  const Projects: React.FC;
  export default Projects;
}

declare module './components/Skills' {
  const Skills: React.FC;
  export default Skills;
}

declare module './components/Education' {
  const Education: React.FC;
  export default Education;
}

declare module './components/Certificates' {
  const Certificates: React.FC;
  export default Certificates;
}

declare module './components/Contact' {
  const Contact: React.FC;
  export default Contact;
}

declare module './components/Navbar' {
  const Navbar: React.FC;
  export default Navbar;
}

declare module './components/Header' {
  const Header: React.FC;
  export default Header;
}

declare module 'preline' {
  // Define a more specific type for Preline
  const preline: {
    init: () => void;
    [key: string]: unknown;
  };
  export default preline;
} 