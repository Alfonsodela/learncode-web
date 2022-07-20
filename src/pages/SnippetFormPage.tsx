import SnippetForm from '../components/SnippetForm';

const SnippetFormPage =
  () => {
    return (
      <div>
        <h1>Crea un nuevo snippet</h1>
        <SnippetForm
          onSubmit={ async () => {
            console.log('Submitting snippet');
          }}
        ></SnippetForm>
      </div>
    );
  };

export default SnippetFormPage;
