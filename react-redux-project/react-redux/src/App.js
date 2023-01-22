import { Provider } from 'react-redux';

import CakeContainer from './components/CakeContainer';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
