import React from 'react';
import { CallAction } from "../components/CallAction";

export const Agents = () => {
  const agents = [
    {
      fullName: "Ricardo Diniz",
      designation: "Corretor",
      imageSrc: "img/team-rdm.jpg",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Winy Soares",
      designation: "Corretor",
      imageSrc: "img/team-winy.jpg",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Ruan Vieira",
      designation: "Corretor",
      imageSrc: "img/team-ruan.png",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
  ];

  // Função para gerar o card de cada corretor
  const generatePropertyAgent = (agent) => (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={agent.fullName}>
      <div className="team-item rounded overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={agent.imageSrc} alt={agent.fullName} />
          <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
            {agent.facebookUrl && (
              <a className="btn btn-square mx-1" href={agent.facebookUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {agent.instagramUrl && (
              <a className="btn btn-square mx-1" href={agent.instagramUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {agent.linkedInUrl && (
              <a className="btn btn-square mx-1" href={agent.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
          </div>
        </div>
        <div className="text-center p-4 mt-3">
          <h5 className="fw-bold mb-0">{agent.fullName}</h5>
          <small>{agent.designation}</small>
        </div>
      </div>
    </div>
  );

  return<><div className="container-xxl py-5">     
        <div className="container" id="com-corretores">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                <h1 className="mb-3">Corretores</h1>
                <p>
                    Nossos corretores são profissionais dedicados, prontos para oferecer suporte e guiar você na escolha do imóvel ideal, tornando o processo de aluguel mais fácil e seguro.
                </p>
            </div>
            <div className="row g-4 justify-content-center">
                {agents.map((agent) => generatePropertyAgent(agent))}
            </div>
        </div>
    </div>
    <CallAction/>
    </> 
};

