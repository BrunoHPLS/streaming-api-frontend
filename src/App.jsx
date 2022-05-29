import React from 'react';
import "./reset.css"
import "./base.css"
import Header from './components/header';
import EmDestaqueSection from './components/EmDestaqueSection';

function App() {
  return (
    <>
      <Header/>
      <main>
        <EmDestaqueSection/>
      </main>
    </>
  );
}

export default App;