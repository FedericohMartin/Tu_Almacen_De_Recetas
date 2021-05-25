import React from 'react'

class Suscrip extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container d-flex justify-content-xl-center">
                <form className="col-xl-8 mt-3 mb-3">   
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Av. del Libertador 123"/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Domicilio</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Departamento, Casa, etc."/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Provincia</label>
                            <select id="inputState" className="form-control">
                                <option selected>Elegir...</option>
                                <option>Buenos Aires</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Codigo Postal</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                        <div className="form-group">
                            <label for="inputState">Elegí la cantidad de entregas</label>
                            <select id="inputState" className="form-control">
                                <option selected>Elegir...</option>
                                <option>1 Vez por Semana</option>
                                <option>2 Veces por Semana</option>
                                <option>3 Veces por Semana</option>
                                <option>4 Veces por Semana</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info">Suscribirse</button>
                </form>
            </div>
        )
    }

}

export default Suscrip