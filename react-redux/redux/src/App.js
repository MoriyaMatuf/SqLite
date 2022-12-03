import logo from './logo.svg';
import './App.css';
import Item2 from './item2';
import Item from './item';
import { Provider } from 'react-redux';
import store from './redux';
function App() {
  return (
    <div className="App">
  <Provider store={store}>
  <Item></Item>
  <Item2></Item2>
   </Provider>
    </div>
  );
}

export default App;
