import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Importe useLocation e Link
import headerImg from '../img/header.jpg';

export const Header = () => {
  const location = useLocation(); // Captura a URL atual
  console.log(location)
  const pathnames = location.pathname.split('/').filter((x) => x); // Divide a URL em segmentos
    function firstLetterUpper(pathname) {
        const firstLetter = pathname.charAt(0)
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = pathname.slice(1)
        return firstLetterCap + remainingLetters
    }
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">{location.pathname == "/" ? "Home": firstLetterUpper(location.pathname.replace("/", ""))}</h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link> {/* Link para a página inicial */}
              </li>
              {pathnames.map((segment, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`; // Constrói o caminho até o segmento atual
                const isLast = index === pathnames.length - 1; // Verifica se é o último segmento

                return (
                  <li className={`breadcrumb-item ${isLast ? 'text-body active' : ''}`} key={segment}>
                    {isLast ? (
                      segment // Exibe o segmento atual sem link
                    ) : (
                      <Link to={routeTo}>{segment}</Link> // Link para o segmento
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
        <div className="col-md-6 animated fadeIn">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};