import { useForm } from 'react-hook-form'
import { Button } from '../ui/Button';
import { Form, Label } from '../ui/form/Form';
import { Input, TextArea } from '../ui/form/Input';
import { requireValidations } from '../utils/form';
import { Error } from '../ui/Error';
import { RegisterParams } from '../api/auth.api';
import FormCodeBlock, { Props as FormCodeBlockProps } from './FormCodeBlock';


// export type SnippetParams = {
//     title: string,
//     code: string,
//     description: string,
//     tags: string
// };

export type Props = {
    onSubmit: (values: RegisterParams) => Promise<void>;
}

const SnippetForm = ({ onSubmit }: Props) => {
    const { handleSubmit, register, control, formState: { errors } } = useForm({
        // dafaultValues: {
        //     title: '',
        //     code: '',
        //     description: '',
        //     tags: ''
        // }
    });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
            <Input 
                hasError={!!errors.title}
                type="text" 
                placeholder="Título"
                {...register('title', requireValidations)} 
            /> 

            {errors.title ? <Error>{errors.title.message}</Error> : null}
        </Label>

        <Label>
            <TextArea 
                rows={10}
                hasError={!!errors.code} 
                placeholder="Escribe tu código"
                {...register('code', requireValidations)} 
            /> 

            {errors.code ? <Error>{errors.code.message}</Error> : null}   
        </Label>

        <FormCodeBlock  control={control as unknown as FormCodeBlockProps['control']}/>

        <Label>
            <TextArea 
                hasError={!!errors.description}
                placeholder="Describe tu snippet"
                {...register('description', requireValidations)} 
            /> 

            {errors.description ? <Error>{errors.description.message}</Error> : null}   
        </Label>

        <Button type="submit">Entrar</Button>
    </Form>
  )
}

export default SnippetForm;