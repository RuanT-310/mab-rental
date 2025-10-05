import callToActionImg from "../img/call-to-action.jpg"
export const CallAction = () => <div className="container-xxl py-5">
<div className="container">
    <div className="bg-light rounded p-3">
        <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid rounded w-100" src={callToActionImg} alt=""/>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="mb-4">
                        <h1 className="mb-3">Entre em contato com nossos corretores certificados</h1>
                        <p>Entre em contato e aproveite a experiência de nossos corretores certificados para encontrar seu imóvel. </p>
                    </div>
                    <a href="" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Entre em contato</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>