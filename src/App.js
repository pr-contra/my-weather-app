import React, { memo } from 'react';
import { Container, Section } from './App.styled';
import { Locations, Search, Weather } from './components';

const App = () => {
  return (
    <>
      <Container>
        <Section>
          <Search />
          <Locations />
        </Section>
        <Weather />
      </Container>
    </>
  );
};

export default memo(App);
