import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button';
import { Form, Label } from '../ui/form/Form';
import { Input } from '../ui/form/Input';
import { emailValidations, passwordValidations } from '../utils/form';
import { Error } from '../ui/Error';
import { LoginParams } from '../api/auth.api';

export type Props = {
    onSubmit: (values: LoginParams) => Promise<void>;
    userEmail: string;
}

const LoginForm = ({ onSubmit }: Props) => {
    const { handleSubmit, register, formState: { errors } 
} = useForm({

        // dafaultValues: {
        //     email: userEmail',
        //     password: ''
        // }
    })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
            <Input 
                hasError={!!errors.email}
                type="email" 
                placeholder="email"
                {...register('email', emailValidations)} 
            /> 

            {errors.email ? <Error>{errors.email.message}</Error> : null}
        </Label>

        <Label>
            <Input 
                hasError={!!errors.password}
                type="password" 
                placeholder="Contraseña"
                {...register('password', passwordValidations)} 
            /> 

            {errors.password ? <Error>{errors.password.message}</Error> : null}   
        </Label>
     
        <Button type="submit">Entrar</Button>
    </Form>
  )
}

export default LoginForm