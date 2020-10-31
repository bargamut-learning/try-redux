import * as React from 'react';

function App({ text = `Default title` }) {
  return (
    <h1>{text}</h1>
  );
}

export default App;
