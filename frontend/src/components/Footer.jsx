export const Footer = () => <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
<div className="container py-5">
    <div className="row g-5 d-flex justify-content-around">
        <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Entre em contato</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Folha 17, Marabá - PA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>(94) 99234-5678</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>AlugueAqui@gmail.com</p>
            <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Links rápidos</h5>
            <a className="btn btn-link text-white-50" href="">Sobre nós</a>
            <a className="btn btn-link text-white-50" href="">Contatos</a>
            <a className="btn btn-link text-white-50" href="">Nossos serviçoes</a>
            <a className="btn btn-link text-white-50" href="">Política de Privacidade</a>
            <a className="btn btn-link text-white-50" href="">Termos e condições</a>
        </div>
        <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Insira seu e-mail para ficar por dentro das novidades e receber mais informações!</p>
            <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                {/* <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"> */}
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Inscreva-se</button>
            </div>
        </div>
    </div>
</div>
</div>