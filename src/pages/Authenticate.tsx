// import { register } from "../api/auth.api";
import {useContext, useState} from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from '../context/auth.context';
import { Image } from '../components/Image';
import { AuthenticateLayout, FormWrapper, ToggleWrapper } from "../ui/layouts.ts/AuthenticateLayout";
import RegisterForm from "../components/RegisterForm";
import { Button } from "../ui/Button";
import { LoginParams } from "../api/auth.api";
import { Error } from "../ui/Error";



const Authenticate = () => {
    const [formVariant, setFormVariant] = useState<'register' | 'login'>('login');
    const [formError, setFormError] = useState<string | null>(null)
    const { user, token, login } = useContext(AuthContext);

    const handleLogin = async (values: LoginParams) => {
        const errorPayload = await login(values);

        if (errorPayload) {
          setFormError(errorPayload.message)
    };

    
    }

  return (
    <AuthenticateLayout>

        <Image src="/logo-instacode.png" alt="logo-instacode"/>

        <FormWrapper>
          <ToggleWrapper>
            <Button 
              onClick={() => setFormVariant('register')} 
              variant={formVariant === 'register' ? 'green' : 'purple'}>
                Registrarme
            </Button>
            <Button 
              onClick={() => setFormVariant('login')}
              variant={formVariant === 'login' ? 'green' : 'purple'}>
                Iniciar Sesión
            </Button>
          </ToggleWrapper>

          {formError ? <Error>formError</Error> : null}

          {formVariant === 'register' ? <RegisterForm onSubmit={() => null}></RegisterForm> : <LoginForm onSubmit={handleLogin}></LoginForm>}
        </FormWrapper>

        
    </AuthenticateLayout>
  )
}

export default Authenticate