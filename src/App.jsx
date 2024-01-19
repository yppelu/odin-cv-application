import { useState } from 'react';

import emptyData from './helpers/empty-data.js';

import Editor from './components/editor/Editor.jsx';
import Resume from './components/resume/Resume.jsx';

function App() {
  const [person, setPerson] = useState(emptyData);

  return (
    <>
      <Editor setPerson={setPerson} />
      <Resume person={person} />
    </>
  );
}

export default App;
