import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { useAuth } from '../auth/authContext';

export const RentalList = () => {
    const [properties, setProperties] = useState([]); // Estado para armazenar as propriedades
    const [statusFilters, setStatusFilters] = useState(["Todas", "Top", "Recentes"]); // Filtros de status
    const [activeStatus, setActiveStatus] = useState(""); // Estado para o filtro ativo

    const { getUser } = useAuth()
    const userReq = getUser()
    // Função para buscar os dados das propriedades
    const getAllRentals = async () => {
        const data = await userReq.getRentals()
        return data
        /* return [
            {
                id: 1,
                imgSrc: ["https://silver-umbrella-jjpxpp7rgvrhq776-5173.app.github.dev/public/5-1.jpg"],
                status: "Venda",
                type: "Casa",
                price: "500,000",
                title: "Casa com 3 quartos",
                location: "São Paulo, SP",
                sqft: "200m²",
                bed: "3 Quartos",
                bath: "2 Banheiros",
            },
            // Adicione mais propriedades aqui...
        ]; */
    };

    // Função para mudar os parâmetros de filtro
    const changeFilterParams = (newStatus) => {
        const url = new URL(window.location.href);
        url.searchParams.set('status', newStatus === 'Todas' ? "" : newStatus);
        window.location.href = url;
    };

    // Efeito para carregar os dados ao montar o componente
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const statusOfList = urlParams.get('status');
        const typeOfList = urlParams.get('type');
        const sectorOfList = urlParams.get('sector');

        setActiveStatus(statusOfList || "");

        getAllRentals().then((data) => {
            console.log(data)
            setProperties(data);
        });
    }, []);

    return (
        <div>
            {/* Filtros de status */}
            <ul id="filter-list" className="nav nav-pills mb-4">
                {statusFilters.map((statusFilter, index) => (
                    <li key={index} className="nav-item me-2">
                        <button
                            className={`btn btn-outline-primary ${activeStatus === statusFilter ? "active" : ""}`}
                            onClick={() => changeFilterParams(statusFilter)}
                        >
                            {statusFilter}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Título da lista de propriedades */}
            {properties.length === 0 && (
                <div id="property-list-title" className="text-center">
                    <h1 className="mb-3">Sem Imóveis Disponíveis</h1>
                    <p>Ainda não temos imóveis que correspondem aos critérios da sua busca.</p>
                </div>
            )}

            {/* Lista de propriedades */}
            <div id="property-list" className="row">
                {properties.map((property, index) => {
                    const delay = 0.1 + index * 0.2; // Ajusta o delay da animação
                    return (
                        <div key={property._id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${delay}s`}>
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <NavLink to={`/rental/${property._id}`}>
                                        <img className="img-fluid image-lista" src={property.images[0]} alt={property.title} />
                                    </NavLink>
                                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                        {property.status}
                                    </div>
                                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                        {property.type}
                                    </div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-primary mb-3">R$ {property.price}</h5>
                                    
                                    <NavLink className="d-block h5 mb-2" to={`rental/${property._id}`}>
                                        {property.title}
                                    </NavLink>
                                    <p>
                                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                        {property.location}
                                    </p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-ruler-combined text-primary me-2"></i>
                                        {property.sqft}
                                    </small>
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-bed text-primary me-2"></i>
                                        {property.bed}
                                    </small>
                                    <small className="flex-fill text-center py-2">
                                        <i className="fa fa-bath text-primary me-2"></i>
                                        {property.bath}
                                    </small>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

