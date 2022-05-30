import React from 'react';
import "./reset.css"
import "./base.css"
import Header from './components/header';
import EmDestaqueSection from './components/EmDestaqueSection';
import ContentSection from './components/ContentSection';

function App() {
  return (
    <>
      <Header/>
      <main>
        <EmDestaqueSection/>
        <ContentSection sectionName="Lançamentos"/>
      </main>
    </>
  );
}

export default App;