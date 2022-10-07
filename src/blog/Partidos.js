import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import '../../src/style.css';
//import '../style.css';




const URI = 'http://localhost:8000/usuarios/usuarios/Crear'

const CompPartidos = () => {
    const [usuario, setUsuario] = useState('')
    const [local, setLoc] = useState('')
    const [visitante, setVisit] = useState('')
    const [fecha, setFecha] = useState('')
    const [goles_local, setLocal] = useState('')
    const [goles_visitante, setVisitante] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {usuario: usuario, local: local, visitante: visitante, fecha: fecha, goles_local: goles_local, goles_visitante: goles_visitante})
        navigate('/usuarios/VerPart')
    }   

    return (
        <div className="login-form">
           <h3>Registrar  Partido</h3>
           <form onSubmit={store}>
               <div>
                     
                    <input
                        value={usuario}
                        onChange={ (e)=> setUsuario(e.target.value)} 
                        type="text"
                        placeholder = "Usuario"
                    />                 
                </div>
                <div>
                     
                    <input
                        value={goles_local}
                        onChange={ (e)=> setLocal(e.target.value)} 
                        type="text"
                        placeholder = "Goles Local"
                    />                 
                  </div>
                  <div>
                 

                 <select name= "local"  onChange={ (e)=> setLoc(e.target.value)}  className='select-css '>
                    <option value={1}>Equipo Local</option>
                    <option value={1}>Nacional</option>
                    <option value={2}>America</option>
                    <option value={3}>SantaFE</option>
                    <option value={4}>Bucaramanga</option>
                    <option value={5}>Junior</option>
                    <option value={6}>Medellin</option>
                </select>  
                 </div>
                           
                 <div>
                  
                  <input
                      value={fecha}
                      onChange={ (e)=> setFecha(e.target.value)} 
                      type="text"
                      className='form-control'
                      placeholder = "Fecha AÑO-MES-DIA"
                  />
              </div>
              <div>
                   
                   <input
                       value={goles_visitante}
                       onChange={ (e)=> setVisitante(e.target.value)} 
                       type="text"
                       placeholder = "Goles Visitante"
                   />                 
                </div>

                 <div>
                 
                    <select name= "visitante"  onChange={ (e)=> setVisit(e.target.value)} className='select-css '>
                        <option value={6}>Equipo Visitante</option>
                        <option value={1}>Nacional</option>
                        <option value={2}>America</option>
                        <option value={3}>SantaFE</option>
                        <option value={4}>Bucaramanga</option>
                        <option value={5}>Junior</option>
                        <option value={6}>Medellin</option>
                    </select>                
                 </div>
                 <button type="submit" className="btn-register">Guardar</button>                  
           </form>
        </div>
    )
}

export default CompPartidos