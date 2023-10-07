import React, { useState } from 'react';
import Button from '@mui/material/Button';
import toggleLed from './api.js';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = async () => {
    const state = toggleState ? 0 : 1;
    const response = await toggleLed(state);
    if (response.status === 'success') {
      setToggleState(!toggleState);
    }
  };

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleToggle}>
        {toggleState ? 'Turn Off' : 'Turn On'}
      </Button>
    </div>
  );
}

export default App;


