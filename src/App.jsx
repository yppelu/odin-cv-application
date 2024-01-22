import { useState } from 'react';

import emptyData from './helpers/empty-data.js';

import PrintingButton from './components/printing-button/PrintingButton.jsx';
import Editor from './components/editor/Editor.jsx';
import Resume from './components/resume/Resume.jsx';

function App() {
  const [person, setPerson] = useState(emptyData);

  return (
    <>
      <style>
        {`
          @media print {
            body{
              -webkit-print-color-adjust:exact !important;
              print-color-adjust:exact !important;
            }
            #root {
              padding: 0;
              margin: 0;
              width: 100%;
            }
            .editor {
              display: none;
            }
            .printing-button {
              display: none;
            }
            .resume {
              box-shadow: none;
              width: 100%;
            }
          }
        `}
      </style>
      <PrintingButton />
      <Editor person={person} setPerson={setPerson} />
      <Resume person={person} />
    </>
  );
}

export default App;
