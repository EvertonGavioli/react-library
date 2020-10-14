import React from 'react';
import { Button } from './component-lib';

const App: React.FC = () => {
  return (
    <div>
      {/* <Button bgcolor="#7159c1" disabled={false} isSecondary={false} onClick={handleClick}>Texto</Button> */}
      <Button>Texto</Button>
    </div>
  );
}

export default App;
