// import { register } from "../api/auth.api";
import {useContext} from "react";
import { AuthContext } from '../context/auth.context';

const Authenticate = () => {

    const { user, token, register } = useContext(AuthContext);

    const handleRegister = () => {

        register({
            username: 'alfonso',
            emoji: 'hi',
            email: 'minicodelab+1@minicodelab.com',
            password: '1234'
        });
    };

    console.log('Authenticate', { user, token });


  return (
    <div>
        <h1>Authenticate</h1>

        <button onClick={handleRegister}>Regístrate</button>
    </div>
  )
}

export default Authenticate