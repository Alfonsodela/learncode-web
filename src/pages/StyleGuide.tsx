import { Button } from '../ui/Button'
import { Input } from '../ui/form/Input';
import { Error } from '../ui/Error'

const StyleGuide = () => {
  return (
    <div>
      <div>
      <h2>Buttons</h2>

      <Button>Regístrate</Button>
      <Button variant='green'>Regístrate</Button>
      <Button variant='purple'>Regístrate</Button>
      <Button variant='purple' disabled>Regístrate</Button>
      </div>

      <div>
      <h2>Inputs</h2>

      <Input name="description" placeholder="learncode"></Input>
      <Input hasError name="description" placeholder="learncode"></Input>
      </div>

      <div>
      <h2>Errors</h2>

      <Error size='s'>Vuelve a probar suerte</Error>
      <Error>Vuelve a probar suerte</Error>
      <Error size='l'>Vuelve a probar suerte</Error>
      <Error size='xl'>Vuelve a probar suerte</Error>
      
      
      </div>

    </div>
  );
}

export default StyleGuide;
