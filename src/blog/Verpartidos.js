import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/usuarios/part'


const Verpartidos = () => {
    
    const [partidos, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <div className='login-form'>
            <div className='row'>
                <div className='col'>
                <h3>Lista de Partidos</h3>
                    <Link to="/usuarios/Crear" className='btn-register'>Nuevo Partido</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr >
                                <th>usuario</th>
                                <th>local</th>
                                <th>visitante</th>
                                <th>fecha</th>
                                <th>goles local</th>
                                <th>goles visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { partidos.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> { blog.usuario } </td>
                                    <td> { blog.local } </td>
                                    <td> { blog.visitante } </td>
                                    <td> { blog.fecha } </td>
                                    <td> { blog.goles_local } </td>
                                    <td> { blog.goles_visitante } </td>
                                    <td>
                                        
                                    </td>
                                    <Link to={`/edit/${blog.id}`} className='btn-save'>Edit</Link>
                                    <button onClick={ ()=>deleteBlog(blog.id) } className='btn-cancel2'>Delete</button>                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default Verpartidos