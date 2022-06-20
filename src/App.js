import Header from "./components/Header";
import {useState} from 'react';
import Home from "./components/Home";
import LogIn from "./components/LogIn";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Header />
      <main className="container">
        {isLogged && <Home />}
        {!isLogged && <LogIn/>} 
      </main>
    </div>
  );
}

export default App;
