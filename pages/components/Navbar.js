import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
    <style jsx>{`
    .navbar{
        margin: 0 1rem;
        z-index:9999;
    }
    .navbar-nav {
        margin-left: auto;
    }
    `}</style>
<nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand" >Make your task done</a></Link>

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-lg-0">
        <li className="nav-item">
          <Link href="/home">
          <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
          <a className="nav-link" >Blog</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/todo">
          <a className="nav-link" >Todo</a></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar