import CodeBlock from '../components/CodeBlock';
import { snippets } from '../fixtures/snippets';
import { Snippet, SnippetsGroup } from '../ui/Snippet';
import { Tag, TagGroup } from '../ui/Tag';


export const Snippets =
  () => {
    return (
      <div>
        <h1>Snippets</h1>

        <SnippetsGroup>
          {snippets.map((snippet) => (
          <Snippet key={snippet._id}>
             <CodeBlock code={snippet.code} />

              <h3>
                {snippet.title} -@{snippet.author.username}
              </h3>

              <TagGroup>
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
              </TagGroup>

              {/* <p>
                {snippet.description}
              </p> */}
          </Snippet>))}
        </SnippetsGroup>
      </div>
    );
  };
