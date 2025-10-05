import React, { useState } from 'react';

export const SearchRental = () => {
    // Estados para armazenar os valores dos selects
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState('');

    // Função para lidar com o clique no botão de busca
    const handleSearch = () => {
        const url = new URL(window.location.href);
        url.pathname = "/property-list.html"; // Altere para o caminho correto
        url.searchParams.set('type', propertyType);
        url.searchParams.set('sector', location);
        window.location.href = url;
    };

    return (
        <div className="row g-2 d-flex justify-content-around">
            {/* Coluna dos inputs */}
            <div className="col-md-10">
                <div className="row g-2">
                    {/* Select do tipo de propriedade */}
                    <div className="col-md-4">
                        <select
                            className="form-select border-0 py-3"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="">Tipo de propriedade</option>
                            {["Casa", "Apartamento", "Comercial", "Germinada", "Predio", "Escritorio", "Garagem", "Residencial"].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Select da localização */}
                    <div className="col-md-4">
                        <select
                            className="form-select border-0 py-3"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Localização</option>
                            {["Nova Marabá", "Velha Marabá", "Cidade Nova", "Cidade Jardim", "São Felix"].map((loc, index) => (
                                <option key={index} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Coluna do botão de busca */}
            <div className="col-md-2">
                <button
                    className="btn btn-dark border-0 w-100 py-3"
                    onClick={handleSearch}
                >
                    Procurar
                </button>
            </div>
        </div>
    );
};

