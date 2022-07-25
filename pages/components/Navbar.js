import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
    <style jsx>{`
    .navbar{
        margin: 0 1rem;
    }
    .navbar-nav {
        margin-left: auto;
    }
    `}</style>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link href="/home">
        <a className="nav-link" >
          Home 
        </a></Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
        <a className="nav-link" >
          About
        </a></Link>
      </li>
      <li className="nav-item">
        <Link href="/blog">
        <a className="nav-link" >
          Blog
        </a></Link>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar