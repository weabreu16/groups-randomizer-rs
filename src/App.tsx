import React, { useCallback, useState } from 'react';
import { Icon } from '@iconify/react';
import "./App.css";

import { Container, Button, SectionLabel, TextArea } from "./components";
import { randomizeGroups } from './commands';
import { groupsArrayToString } from './helpers/groupsArrayToString';

function App() {
  const [people, setPeople] = useState<string>("");
  const [themes, setThemes] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handlePeopleChange = useCallback((value: string) => {
    setPeople(value);
  }, []);

  const handleThemesChange = useCallback((value: string) => {
    setThemes(value);
  }, []);

  const handleRandomize = useCallback(async () => {
    const groups = await randomizeGroups(people, themes);
    const groupsFormatted = groupsArrayToString(groups);

    setResult(groupsFormatted);
  }, [people, themes]);

  return (
    <Container
      className="app-container"
      d="flex"
      flexDirection="row"
      h="100vh"
      overflow="hidden"
      justifyContent="space-between"
    >
      <Container
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        w="33%"
      >
        <div style={{width: "100%"}}>
          <SectionLabel
            label="People"
            icon={<Icon icon="bi:people-fill" color="white" width="21" height="21" />}
          />
          <TextArea
            w="100%"
            h="250px"
            placeholder="Write people here..."
            value={people}
            onChange={handlePeopleChange}
          />
        </div>
        <div style={{height: "294px", width: "100%"}}>
          <SectionLabel
            label="Themes"
            icon={<Icon icon="bi:book-fill" color="white" width="21" height="21" />}
          />
          <TextArea
            w="100%"
            h="250px"
            placeholder="Write themes here..."
            value={themes}
            onChange={handleThemesChange}
          />
        </div>
      </Container>
      <Container
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          className='test-btn'
          icon={<Icon icon="fa:random" color="white" width="21" />}
          onClick={handleRandomize}
        >
          Randomize
        </Button>
      </Container>
      <Container w="33%">
        <TextArea 
          h="100vh" 
          w="100%" 
          value={result}
        />
      </Container>
    </Container>
  );
}

export default App;
