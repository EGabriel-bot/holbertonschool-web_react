import './App.css';
<<<<<<< Updated upstream
import { getFooterCopy, getFullYear, isIndex } from './utils';
=======
<<<<<<< HEAD
import { getFooterCopy, getFullYear } from './utils';
=======
import { getFooterCopy, getFullYear, isIndex } from './utils';
>>>>>>> 2977091e7783139a66e32ae539fca413b619532b
>>>>>>> Stashed changes

function App() {
  const date = getFullYear();
  const footerCopy = getFooterCopy();

  return (
    <div className="App">
      <header className="App-header">
        <img src="../public/Holberton_logo.jpg" className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for='email'>Email</label>
        <input id='email' type="email" />
        <label for='password'>Password</label>
        <input id='password' type="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer"> <p>Copyright {date} - {footerCopy}</p></footer>
    </div>
  );
}

export default App;
