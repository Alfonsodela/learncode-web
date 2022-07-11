// import { register } from "../api/auth.api";
import {useContext} from "react";
import { AuthContext } from '../context/auth.context';
import { Button } from "../ui/Button";

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

        <Button onClick={handleRegister}>Regístrate</Button>
        <Button variant='green' onClick={handleRegister}>Regístrate</Button>
        <Button variant='purple' onClick={handleRegister}>Regístrate</Button>
        <Button variant='purple' disabled onClick={handleRegister}>Regístrate</Button>
    </div>
  )
}

export default Authenticate