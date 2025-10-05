import React, { useEffect, useState } from 'react';

import house  from "../img/icon-house.png"
import villa from "../img/icon-villa.png"
import apartment from "../img/icon-apartment.png"
import housing from "../img/icon-housing.png"
import building from "../img/icon-building.png"
import neighborhood from "../img/icon-neighborhood.png"
import luxury from "../img/icon-luxury.png"
import condominium from "../img/icon-condominium.png"

export const RentalTypes = () => {
    const [data, setData] = useState([]); // Estado para armazenar os dados das propriedades

    // Simulação da função getAllRentals (substitua pela sua lógica de fetch)
    const getAllRentals = async () => {
        // Exemplo de dados simulados
        return [
            { type: "Casa" },
            { type: "Apartamento" },
            { type: "Residencial" },
            { type: "Escritorio" },
            { type: "Prédio" },
            { type: "Germinada" },
            { type: "Garagem" },
            { type: "Comercial" },
        ];
    };

    // Efeito para carregar os dados ao montar o componente
    useEffect(() => {
        getAllRentals().then((response) => {
            setData(response);
        });
    }, []);

    // Dados dos tipos de propriedade
    const propertyTypes = [
        { name: "Casa", imgSrc: house },
        { name: "Residencial", imgSrc: villa },
        { name: "Apartamento", imgSrc: apartment },
        { name: "Escritorio", imgSrc: housing },
        { name: "Prédio", imgSrc: building },
        { name: "Germinada", imgSrc: neighborhood },
        { name: "Garagem", imgSrc: luxury },
        { name: "Comercial", imgSrc: condominium },
    ];

    // Função para gerar a URL com o tipo de propriedade
    const generateUrl = (type) => {
        const url = new URL(window.location.href);
        url.pathname = "/property-list.html"; // Altere para o caminho correto
        url.searchParams.set('type', type);
        return url.toString();
    };

    return (
        <div id="com-propstypes">
            {/* Título e descrição */}
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                <h1 className="mb-3">Tipos de Propriedade</h1>
                <p>
                    De apartamentos modernos a casas espaçosas, oferecemos uma variedade de imóveis para aluguel que atendem às suas necessidades. Explore nossas opções e descubra o lugar ideal para chamar de lar.
                </p>
            </div>

            {/* Lista de tipos de propriedade */}
            <div className="row g-4">
                {propertyTypes.map((propsType, index) => (
                    <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href={generateUrl(propsType.name)}>
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={propsType.imgSrc} alt="Icon" />
                                </div>
                                <h6>{propsType.name}</h6>
                                <span>
                                    {data.filter((prop) => prop.type === propsType.name).length} propriedades
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

