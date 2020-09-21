import React from 'react';
import './App.scss';
import Header from "./components/hearder";
import Footer from "./components/footer";
import MarkdownBox from "./components/markdown_box";


function App() {
  return (
    <div id="app">
      <Header />
      <MarkdownBox />
      <Footer />
    </div>
  );
}

export default App;
