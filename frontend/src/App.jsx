import { useState } from 'react'
import { RentalTypes } from './components/RentalTypes'
import { RentalList } from './components/RentalList'


import testimonial5 from "./img/testimonial-5.jpg"
import testimonial3 from "./img/testimonial-2.jpg"
import testimonial2 from "./img/testimonial-3.jpg"
import call from "./img/call-to-action.jpg"
import { NavLink } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container-xxl py-5">
            <div className="container" id="com-propstypes">
               <RentalTypes/>
            </div>
        </div>
        {/* <!-- Category End -->


        <!-- Propriedade List Start --> */}
        <div id ="atalho" className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Imoveis Disponíveis</h1>
                            <p>Explore nossa seleção de imóveis disponíveis para aluguel e encontre o lar perfeito para você. Cada opção é cuidadosamente selecionada para atender às suas necessidades e estilo de vida.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5" id="filter-list">
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="property-list" className="row g-4">
                       <RentalList/>
                    </div>
                    <div className="col-12 text-center">
                        <NavLink className="btn btn-primary py-3 px-5" to="/rentals">Mostrar mais imoveis</NavLink>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Propriedade List End -->


        <!-- Call to Action Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src={call} alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Entre em contato com nossos corretores certificados</h1>
                                    <p>Entre em contato e aproveite a experiência de nossos corretores certificados para encontrar seu imóvel. </p>
                                </div>
                                <NavLink href="/contact" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Entre em contato</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End -->


        <!-- Team Start --> */}
        <div className="container-xxl py-5">
            <div className="container" id="com-corretores">
            </div>
        </div>
       {/*  <!-- Team End -->


        <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Nossos clientes dizem!</h1>
                    <p>Descubra o que nossos clientes têm a dizer sobre suas experiências. Suas opiniões refletem a qualidade e confiança que oferecemos em cada serviço!</p>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Fiquei impressionado com a praticidade do site. Em poucos cliques, encontrei uma casa perfeita para minhas necessidades. A experiência foi muito tranquila!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial5} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Wesley</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>O processo foi super simples e transparente. Consegui alugar uma casa incrível na localização que eu queria, e tudo de forma rápida e segura. Recomendo!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial2} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Pedro</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Excelente variedade de imóveis e ótimo suporte ao cliente. Encontrei exatamente o que procurava e o atendimento foi impecável. Melhor experiência de aluguel que já tive!</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src={testimonial3} style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Gustavo</h6>
                                    <small>Analista de Sistemas</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
