// import { register } from "../api/auth.api";
import {useContext} from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from '../context/auth.context';



const Authenticate = () => {

    const { user, token, login } = useContext(AuthContext);

    const handleRegister = () => {

        login({
            email: 'minicodelab+1@minicodelab.com',
            password: '1234'
        });
    };

    console.log('Authenticate', { user, token });


  return (
    <div>
        <h1>Authenticate</h1>
        <LoginForm onSubmit={() => null }></LoginForm>

        
    </div>
  )
}

export default Authenticate