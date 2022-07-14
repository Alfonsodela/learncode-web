import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button';
import { Form, Label } from '../ui/form/Form';
import { Input } from '../ui/form/Input';
import { emailValidations, passwordValidations, usernameValidations } from '../utils/form';
import { Error } from '../ui/Error';

export type Props = {
    onSubmit: () => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        // dafaultValues: {
        //     email: '',
        //     password: ''
        // }
    })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
            <Input 
                hasError={!!errors.username}
                type="username" 
                placeholder="Nombre de usuario"
                {...register('username', usernameValidations)} 
            /> 

            {errors.username ? <Error>{errors.username.message}</Error> : null}
        </Label>

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

export default RegisterForm