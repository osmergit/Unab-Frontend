import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
//import { useHistory } from 'react-router'
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/login'




//aca inicia
const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' })
    const navigate  = useNavigate()
   // const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }
/*
     try{
        const blog = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(blog[0])
    } catch (error){
        res.json({message: error.message})   
    }*/
        const onSubmit = async () => {
        //console.log(body)
        await   axios.post(URI, body)
            .then(({data}) => {
            localStorage.setItem('auth', '"yes"')
            navigate('/app')
               window.location = '/app'
               console.log(data)
               
            })
            .catch(({response}) => {
                navigate('/apps')
               window.location = '/apps'
                console.log(response)
                //console.log("Paso por abajo")
            })
        }
    /*
    const store = async (req,res) => {
        //e.preventDefault()
        await axios.post(URI, { username: username, password: password})
        const username = req.body.username
        const password = req.body.password
        navigate('/')
        if (username && password){

        }
    }   }*/


    return (
     
            
                <div className="login-form">
                   <h3>Usuarios Registrados</h3>
                    <form >
                        <input
                          
                            autoFocus
                            type= "text"
                            placeholder = "Username"
                            value= {body.username}
                            onChange= { inputChange }
                            name= "username"
                        />
                        <input type="password"
                            placeholder = "Password"
                            value={body.password}
                            onChange={inputChange}
                            name="password"
                        />
                        <button className="btn-login" onClick={onSubmit} type="submit" >
                            Sign In
                        </button>
                        <Link to="/create" className='btn-register'>Sign Up</Link>
                    </form>
                </div>
          
      
    )
}

export default Login