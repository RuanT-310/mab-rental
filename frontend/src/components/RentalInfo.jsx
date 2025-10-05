import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // Importe useParams
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Estilos do Swiper
import SwiperCore from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useAuth } from '../auth/authContext';
console.log(Autoplay)
// Inicializa os módulos do Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

export const RentalInfo = () => {
  const [rental, setRental] = useState(null);
  const [images, setImages] = useState([]);

  // Captura o parâmetro "id" da URL
  const { id } = useParams();

  // Função para buscar os dados do aluguel pelo ID
  const { getUser } = useAuth()
  const userReq = getUser()
   


  // Efeito para carregar os dados do aluguel
  useEffect(() => {
    if (id) {
      userReq.getOneRental(id).then((rentalData) => {
        setRental(rentalData);
        setImages(rentalData.images);
      });
    }
  }, [id]); // Executa sempre que o "id" mudar

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Carrossel de Imagens com Swiper */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <div className="col-md-15 animated fadeIn">
                <Swiper
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  className="header-carousel"
                >
                  {images.map((imageSrc, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="image-lista-carrossel w-100"
                        src={imageSrc}
                        alt={`Imagem ${index + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Detalhes do Aluguel */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" id="com-detalhe">
            {rental ? (
              <>
                <h1 className="mb-4">{rental.title}</h1>
                <p className="mb-4">{rental.description || ""}</p>
                <p><i className="fa fa-cart-plus text-primary me-3"></i>R$ {rental.price}</p>
                <p><i className="fa fa-map text-primary me-3"></i>{rental.location}</p>
                <p><i className="fa fa-map-pin text-primary me-3"></i>Setor {rental.sector}</p>
                <p><i className="fa fa-ruler-combined text-primary me-3"></i>{rental.sqft} mt²</p>
                <p><i className="fa fa-bed text-primary me-3"></i>{rental.bed} quartos</p>
                <p><i className="fa fa-bath text-primary me-3"></i>{rental.bath} banheiros</p>
                <a className="btn btn-primary py-3 px-5 mt-3" href="">Fale com o proprietário</a>
              </>
            ) : (
              <p>Carregando...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

