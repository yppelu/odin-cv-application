import { useState } from 'react';

import emptyData from './helpers/empty-data.js';
import exampleData from './helpers/example-data.js';

import Editor from './components/editor/Editor.jsx';
import Resume from './components/resume/Resume.jsx';

function App() {
  const [person, setPerson] = useState(exampleData);

  return (
    <>
      <Editor person={person} setPerson={setPerson} />
      <Resume person={person} />
    </>
  );
}

export default App;
