import logo from './logo.svg';
import './App.css';
// import Dashboard from './components/Dashboard';
// import Create from './components/Create';
// import Edit from './components/Edit';
// import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>Favorite Authors</h1>
      <p><Link to ={"/new/author"}>Add a new Favorite Author</Link></p>
      <Main />
    </fieldset>
  );
}

export default App;
