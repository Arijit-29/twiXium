import styles from './Header.module.css'
const Header=({toggleSidebar})=>{
    return(
        <header className={`${styles.header}`}> <div className={`${styles.container}`}> 
        <button className={`btn btn-outline-light d-md-none ms-0 ${styles.toggle}`} onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className={`${styles.welcome}`}>Welcome to twiXium...</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <use xlinkHref="#bootstrap"></use></a><ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"><li><a href="#" className={`nav-link px-2 `}>Home</a></li>
        <li>{/*<a href="#" className="nav-link px-2 text-white">Features</a></li> <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li><li>*/}<a href="#" className="nav-link px-2">FAQs</a></li> <li><a href="#" className="nav-link px-2">About</a></li></ul>
        <form className={`col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ${styles.bar}`}  role="search"><input type="search" className={`form-control form-control-dark ${styles.search}`} placeholder="Search..." aria-label="Search"/></form>
        <div className="text-end"> <button type="button" className={`btn btn-outline-light me-2 ${styles.login}`}>Login</button><button type="button" className="btn btn-warning">Sign-up</button></div></div>
        </div></header>
    )
}
export default Header