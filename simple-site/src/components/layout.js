import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
const Layout = ({  children }) => {
  return (
    <>
    <div className="heading">
    <div className="container">
      <div className="mainMenu">
      <div className="logo">
            <h1 id="logo">Logo</h1>
          </div>
          <nav className="navLinks">
        <ul >         
          <li className="navLinkItem">
            <Link to="/" className="navLinkText">
              Home
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/about" className="navLinkText">
              Who We Are
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/expertise" className="navLinkText">Expertise</Link>
          </li>
          <li className="navLinkItem">
            <Link to="/expertise" className="navLinkText">Projects</Link>
          </li>
          <li className="navLinkItem">
            <Link to="/expertise" className="navLinkText">Research & Insights</Link>
          </li>
        </ul>
      </nav>
       <div className="social">
        <nav className="navLinks">
            <li className="navLinkItem">
            <Link to="/"  className="navLinkText"  >Facebook</Link>
            </li>
        </nav>
       </div>
      </div>
      </div> 
      </div> 
     
      <main>
        
        {children}
      </main>
   </>
  )
}

export default Layout