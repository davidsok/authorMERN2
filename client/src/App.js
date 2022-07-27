import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Update from './components/Update';
import Create from './components/Create';
import Show from './components/Show';
// import AuthorList from './components/AuthorList';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          {/* //User sees these routes */}
            <Route path='/' element={<Home/>} />
            <Route path='/author/show/:id' element={ <Show />} />
            <Route path='/author/create/' element={ <Create />} />
            <Route path='/author/update/:id' element={<Update/>}  /> 
          </Routes>
      </BrowserRouter>                           
      </div>
  );
}

export default App;
