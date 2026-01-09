import { TextInput } from './components/input/Input';

function App() {
  return (
    <>
      <button>Button example</button>
      <a href="#">Link example</a>
      <TextInput
        id="textInput"
        label="Text input"
        name="textInput"
        placeholder="Your input example"
        type="text"
      />
      <TextInput
        id="search"
        label="Search input"
        name="q"
        placeholder="Your search input example"
        type="search"
        variant="complex"
      />
    </>
  );
}

export default App;
