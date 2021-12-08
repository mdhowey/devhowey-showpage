import '../sass/_components.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Topbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="logo"><a href="#" alt="test">devhowey</a></li>
        <li className="item"><a href="#" alt="test">Home</a></li>
        <li className="item"><a href="#" alt="test">About</a></li>
        <li className="item"><a href="#" alt="test">Resume</a></li>
        <li className="item has-submenu">
          <a tabindex="0" href="#" alt="test">Services</a>
          <ul className="submenu">
            <li className="subitem"><a href="#" alt="test">Website</a></li>
            <li className="subitem"><a href="#" alt="test">Frontend Development</a></li>
            <li className="subitem"><a href="#" alt="test">Content Writing</a></li>
            <li className="subitem"><a href="#" alt="test">Teaching</a></li>
          </ul>
        </li>
        <li className="item has-submenu">
          <a tabindex="0" href="#" alt="test">Projects</a>
          <ul className="submenu">
            <li className="subitem"><a href="#" alt="test">Games</a></li>
            <li className="subitem"><a href="#" alt="test">CRUD/User Auth</a></li>
            <li className="subitem"><a href="#" alt="test">Fullstack</a></li>
            <li className="subitem"><a href="#" alt="test">Command Line</a></li>
          </ul>
        </li>
        <li className="item btn primary"><a href="#" alt="test">Blog</a></li>
        <li className="item btn secondary"><a href="#" alt="test">Contact</a></li>
        <li className="toggle"><a href="#" alt="test"><GiHamburgerMenu /></a></li>
      </ul>
    </nav>
  )
}

export default Topbar

