import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store/index';
import Videos from './components/Video/Video';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Videos/>
        <Sidebar/>
      </Provider>
    </div>
  );
}

export default App;
