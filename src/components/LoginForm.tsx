import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button';
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
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <Input type="email" {...register('email', {
                required: true
            })} 
            /> 
        </label>

        <label>
            <Input type="password" {...register('password', {
                required: true,
                minLength: 8, 
                pattern: {
                    value: passwordRegex,
                    message: 'La contaseña debe tener al menos una minúscula, mayúscula, número y símbolo'
                }
            })} 
            /> 
        </label>
     
        <Button type="submit"></Button>
    </form>
  )
}

export default LoginForm