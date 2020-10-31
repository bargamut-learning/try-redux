import * as React from 'react';

function App({ text, style  }) {
  return (
    <h1 style={{fontFamily: style.fontFamily}}>{text}</h1>
  );
}

export default App;
