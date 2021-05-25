import React from 'react'

function Footer (){
    
    return (
        <div className="container-fluid mt-2">
            <div className="row bg-light d-flex justify-content-xl-center">
                <div className="row col-xl-4 mt-3 mb-2 d-flex justify-content-xl-center">
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <div className="flex-row d-flex justify-content-center align-items-center">
                            <p className="text-center">Seguinos en las redes</p>
                        </div>
                        <div className="flex-row d-flex justify-content-center align-items-center">
                            <ul><img src="/images/Iconos/facebook.svg" width="30" height="30"/></ul>
                            <ul><img src="/images/Iconos/twitter.svg" width="30" height="30"/></ul>
                            <ul><img src="/images/Iconos/instagram.svg" width="30" height="30"/></ul>
                            <ul><img src="/images/Iconos/pinterest.svg" width="30" height="30"/></ul>
                        </div>
                    </div>
                </div>
                <div className="row col-xl-6 border-left mt-3 mb-2 d-flex justify-content-xl-center align-items-center">
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <div className="flex-row d-flex justify-content-center align-items-center">
                            <p className="text-center">Suscribite al Newsletter para recibir ofertas, recetas, novedades y más.</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email list" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button" id="button-addon2">Suscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer