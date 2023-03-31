import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store"
import Todos from './Components/Todos';
function App() {
  return (
    <Provider store={store}>
      <Todos/>
    </Provider>
  );
}

export default App;
