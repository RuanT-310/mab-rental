import { NavLink } from "react-router"
import iconDeal from "../img/icon-deal.png"
import { useAuth } from "../auth/authContext"

export const NavBar = () => {

    const { isAuthenticated, logout } = useAuth()
    return <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
    <NavLink to="/" end className="navbar-brand d-flex align-items-center text-center">
        <div className="icon p-2 me-2">
            <img className="img-fluid" src={iconDeal} alt="Icon" style={{width: "30px", height: "30px"}}/>
        </div>
        <h1 className="m-0 text-primary">Alugue Aqui</h1>
    </NavLink>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
            <NavLink to={isAuthenticated ? "/" : "/login"} className="av-item nav-link" 
            onClick={()=>{
                isAuthenticated ? logout() : <Navigate to="/login" />
            }}>
                {isAuthenticated ? "Sair" : "Login"}
            </NavLink>
            <NavLink to="/" end className="nav-item nav-link active">Inicio</NavLink>
            <div className="nav-item dropdown">
                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">imoveis</NavLink>
                <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/rentals" className="dropdown-item">Lista de imoveis</NavLink>
                    <NavLink to="/types" className="dropdown-item">Tipos de imoveis</NavLink>
                    <NavLink to="/agents" className="dropdown-item">Corretores</NavLink>
                </div>
            </div>
            <div className="nav-item dropdown">
                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</NavLink>
                <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/testimonials" className="dropdown-item">Comentarios</NavLink>
                    <NavLink to="/404" className="dropdown-item">404 Error</NavLink>
                </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Contato</NavLink>
        </div>
        <NavLink to="/newrental" className="btn btn-primary px-3 d-none d-lg-flex">Adicionar Imóvel</NavLink>
    </div>
</nav>
}