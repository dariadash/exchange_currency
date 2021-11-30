import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import { instantLoadCurrencies } from './features/exchange-form/model/private';
import { About } from './features/exchange-form/pages/About';
import { Home } from './features/exchange-form/pages/Home';
import './features/init'
import { Navbar } from './features/ui/Navbar';

export const App = () => {

  React.useEffect(() => {
    instantLoadCurrencies()
  }, [])
  return (
    <Router>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`