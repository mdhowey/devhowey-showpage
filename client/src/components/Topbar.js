import '../sass/_main.scss';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <h3 className="topbar-title">devhowey</h3>
      <nav>
        <ul>
          <li className="topbar-item">Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Topbar

