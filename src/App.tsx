import React from 'react';
import { Icon } from '@iconify/react';
import "./App.css";

import { SectionLabel, TextArea } from "./components";

function App() {

  return (
    <React.Fragment>
      <SectionLabel
        label="People"
        icon={<Icon icon="bi:people-fill" color="white" width="21" height="21" />}
      />
      <TextArea className="test" />
    </React.Fragment>
  );
}

export default App;
