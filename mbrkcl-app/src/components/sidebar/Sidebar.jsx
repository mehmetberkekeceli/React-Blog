import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://avatars.githubusercontent.com/u/108813428?v=4" 
        alt="" />
        <p>Hello👋
💻Currently working on Java and JavaScript
🌱I am currently using JavaSpring and JSReact in my private repositories
📚I continue my education to improve myself.
</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Java-Spring</li>
            <li className="sidebarListItem">Spring-boot</li>
            <li className="sidebarListItem">JS-React</li>
            <li className="sidebarListItem">HTML</li>
            <li className="sidebarListItem">CSS</li>
            <li className="sidebarListItem">Kotlin</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-telegram"></i>
          </div>
        </div>
    </div>
  )
}
