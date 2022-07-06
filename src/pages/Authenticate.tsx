import {useContext} from "react";
import { AuthContext } from '../context/auth.context';

const Authenticate = () => {

    const { register } = useContext(AuthContext);

    const handleRegister = () => {

        register({
            username: 'MiniCodeLab-1',
            emoji: 'flamenca',
            email: 'minicodelab+1@minicodelab.com',
            password: '1234'
        });
    };



  return (
    <div>
        <h1>Authenticate</h1>

        <button onClick={handleRegister}>Regístrate</button>
    </div>
  )
}

export default Authenticate