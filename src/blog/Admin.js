import { useNavigate, Link } from 'react-router-dom'

const Admin = () => {

    return( 
<div className="login-form">
           <h3><Link to="/part" className='btn-register'>Registrar Partido</Link></h3>
           <h3><Link to="/create" className='btn-register'>Ver Partidos</Link></h3>
           </div>
    )

}
export default Admin