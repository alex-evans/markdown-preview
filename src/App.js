import React from 'react';
import './App.css';
import Header from "./components/hearder";
import Footer from "./components/footer";
import MarkdownBox from "./components/markdown_box";


function App() {
  return (
    <div>
      <Header />
      <MarkdownBox />
      <Footer />
    </div>
  );
}

export default App;
