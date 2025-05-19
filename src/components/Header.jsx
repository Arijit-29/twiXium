
const Header=({toggleSidebar})=>{
    return(
        <header className="p-3 text-bg-dark header"> <div class="container"> 
         <button className="btn btn-outline-light d-md-none toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="welcome">Welcome to twiXium...</h1>
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <use xlinkHref="#bootstrap"></use></a><ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"><li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
        <li>{/*<a href="#" class="nav-link px-2 text-white">Features</a></li> <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li><li>*/}<a href="#" class="nav-link px-2 text-white">FAQs</a></li> <li><a href="#" class="nav-link px-2 text-white">About</a></li></ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"><input type="search" class="form-control form-control-dark text-bg-dark search" placeholder="Search..." aria-label="Search"/></form>
        <div class="text-end"> <button type="button" class="btn btn-outline-light me-2 login">Login</button><button type="button" class="btn btn-warning">Sign-up</button></div></div>
        
         </div></header>
    )
}
export default Header