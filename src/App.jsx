import { useState } from 'react';

import exampleData from './helpers/example-data.js';

import Editor from './components/editor/Editor.jsx';
import Resume from './components/resume/Resume.jsx';

function App() {
  const [person, setPerson] = useState(exampleData);

  return (
    <>
      <Editor person={person} changePerson={setPerson} />
      <Resume {...person} />
    </>
  );
}

export default App;
