import React from 'react';
import { Icon } from '@iconify/react';
import "./App.css";

import { SectionLabel } from "./components";

function App() {

  return (
    <React.Fragment>
      <SectionLabel
        label="People"
        icon={<Icon icon="bi:people-fill" color="white" width="21" height="21" />}
      />
      <SectionLabel 
        label="People"
        icon={<Icon icon="bi:people-fill" color="white" width="21" height="21" />}
      />
    </React.Fragment>
  );
}

export default App;
