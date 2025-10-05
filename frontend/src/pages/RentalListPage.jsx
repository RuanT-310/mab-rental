import { RentalList } from '../components/RentalList'
import { CallAction } from '../components/CallAction'

export const RentalListPage = () => {

  return (
    <>

        <div id ="atalho" className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Imoveis Disponíveis</h1>
                            <p>Explore nossa seleção de imóveis disponíveis para aluguel e encontre o lar perfeito para você. Cada opção é cuidadosamente selecionada para atender às suas necessidades e estilo de vida.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="property-list" className="row g-4">
                       <RentalList/>
                    </div>
                    <div className="col-12 text-center">
                        <a className="btn btn-primary py-3 px-5" href="property-list.html">Mostrar mais imoveis</a>
                    </div>
                </div>
            </div>
        </div>
        <CallAction/>
    </>
  )
}

