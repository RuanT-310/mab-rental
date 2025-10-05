import React from 'react';

export const Contact = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Título e descrição */}
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Nossos contatos</h1>
          <p>
            Entre em contato conosco para esclarecer suas dúvidas ou solicitar nossos serviços. Estamos sempre disponíveis para oferecer o melhor atendimento possível para você!
          </p>
        </div>

        {/* Cards de contato */}
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              {/* Endereço */}
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-map-marker-alt text-primary"></i>
                    </div>
                    <span>Folha 17, Marabá - PA</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-envelope-open text-primary"></i>
                    </div>
                    <span>AlugueAqui@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                      <i className="fa fa-phone-alt text-primary"></i>
                    </div>
                    <span>(94) 99234-5678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15845.745616624137!2d-49.110762!3d-5.368759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bdb4d86e891a27%3A0x0!2zTWVldGluZyBvZiB0aGUgUml2ZXM!5e0!3m2!1spt-BR!2sbr!4v1695228900000!5m2!1spt-BR!2sbr"
              frameBorder="0"
              style={{ minHeight: '400px', border: '0' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Mapa de localização"
            ></iframe>
          </div>

          {/* Formulário de contato */}
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">
                Preencha o formulário abaixo para entrar em contato conosco. Envie suas dúvidas, sugestões ou solicite mais informações sobre as casas disponíveis para alugar. Nossa equipe receberá sua mensagem por e-mail e retornará o mais breve possível!
              </p>
              <form>
                <div className="row g-3">
                  {/* Nome */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Seu nome</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Seu email</label>
                    </div>
                  </div>

                  {/* Assunto */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Título da mensagem</label>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '150px' }}
                      ></textarea>
                      <label htmlFor="message">Mensagem</label>
                    </div>
                  </div>

                  {/* Botão de envio */}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Enviar mensagem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

