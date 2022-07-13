import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button';
import { Form, Label } from '../ui/form/Form';
import { Input } from '../ui/form/Input';
import { passwordRegex } from '../utils/validations';

export type Props = {
    onSubmit: () => void;
}

const LoginForm = ({ onSubmit }: Props) => {
    const { handleSubmit, register } = useForm({
        // dafaultValues: {
        //     email: '',
        //     password: ''
        // }
    })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
            <Input 
                type="email" 
                placeholder="Nombre de usuario o email"
                {...register('email', {
                required: true
            })} 
            /> 
        </Label>

        <Label>
            <Input 
                type="password" 
                placeholder="Contraseña"
                {...register('password', {
                required: true,
                minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 caracteres'
                }, 
                pattern: {
                    value: passwordRegex,
                    message: 'La contaseña debe tener al menos una minúscula, mayúscula, número y símbolo'
                }
            })} 
            /> 
        </Label>
     
        <Button type="submit">Entrar</Button>
    </Form>
  )
}

export default LoginForm