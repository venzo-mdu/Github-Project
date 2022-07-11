import './App.css';
import Gitsearch from "./components/gitsearch/gitsearch";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../src/components/store/index"
import Data from "../src/components/data"
import Project from "../src/components/projects/projects"

function App() {
  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Gitsearch/>}></Route>
        <Route exact path='/data' element={<Data/>}></Route>
        <Route exact path='/project' element={<Project/>}></Route>

      </Routes>
      </BrowserRouter>
      </Provider>
    </>
    
  );
}

export default App;
