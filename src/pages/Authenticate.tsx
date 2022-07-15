// import { register } from "../api/auth.api";
import {useContext, useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import { AuthContext } from '../context/auth.context';
import { Image } from '../components/Image';
import { AuthenticateLayout, ErrorWrapper, FormWrapper, ToggleWrapper } from "../ui/layouts.ts/AuthenticateLayout";
import RegisterForm from "../components/RegisterForm";
import { Button } from "../ui/Button";
import { LoginParams, RegisterParams } from "../api/auth.api";
import { Error } from "../ui/Error";
import { useNavigate } from "react-router-dom";



const Authenticate = () => {
    const [formVariant, setFormVariant] = useState<'register' | 'login'>('login');
    const [formError, setFormError] = useState<string | null>(null)
    const { user, login, register } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate('/styleGuide');
      }
    }, [user]);
      

    const handleLogin = async (values: LoginParams) => {
        const errorPayload = await login(values);

        if (errorPayload) {
          setFormError(errorPayload.message)
      };
    }

    const handleRegister = async (values: RegisterParams) => {
      const errorPayload = await register(values);

      if (errorPayload) {
        setFormError(errorPayload.message)
      } else {
        setFormError('login');
      }
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

          {formError ? (
          <ErrorWrapper>
            <Error>formError</Error> 
          </ErrorWrapper>
          ) : null}

          {formVariant === 'register' ? <RegisterForm onSubmit={handleRegister}></RegisterForm> : <LoginForm onSubmit={handleLogin}></LoginForm>}
        </FormWrapper>

        
    </AuthenticateLayout>
  )
}

export default Authenticate