import { Button } from '../ui/Button'
import { Input } from '../ui/form/Input';
import { Error } from '../ui/Error';
import  Image  from '../components/Image'
import { Tag, TagGroup } from '../ui/Tag';
import { Snippet } from '../ui/Snippet';
import CodeBlock from '../components/CodeBlock';

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

      <div>
      <h2>Image</h2>

      <Image size='s' src="/logo-instacode-xl.png" alt="Instacode Logo"/>
      <Image src="/logo-instacode.png" alt="Instacode Logo"/>
      </div>

      <div>
        <h2>Tags</h2>

        <TagGroup>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
        </TagGroup>

        <TagGroup>
          <Tag>React ✖</Tag>
          <Tag>TypeScript ✖</Tag>
        </TagGroup>
      </div>

      <div>
        <h2>Snippet</h2>

        <Snippet>
          <CodeBlock code="const hello = 'world';" language="javascript" />

          <h3>Ejemplo de useRef - @minicodelab</h3>

          <TagGroup>
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
          </TagGroup>

          <p>
            Esta es una descripción de prueba para ver que tal queda el contenido de esta forma. Ahora un montón de
            emojis de seguido 💃🕺👏🍎🍏
          </p>
        </Snippet>
      </div>

    </div>
  );
}

export default StyleGuide;
