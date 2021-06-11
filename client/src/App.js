import './App.css';
import UserForm from './container/UserForm'
import Aux from './hoc/Auxiliary';
import Footer from './Components/UI/Footer/Footer';
import Headers from './Components/UI/Header/Headers';

function App() {
  return (
    <Aux>
      <Headers/>
      <div className="App">
        <UserForm/>
      </div>
      <Footer/>
    </Aux>
  );
}

export default App;
