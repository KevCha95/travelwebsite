import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

import React, { useRef } from 'react'

function App() {

  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header faq = {faqRef} contact = {contactRef}/>
      <Content faq = {faqRef} contact = {contactRef}/>
      <Footer/>
    </div>
  );
}

export default App;
