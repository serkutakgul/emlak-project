import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import EmlakList from './components/EmlakList';
import HeaderComponenet from './components/HeaderComponenet';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import CreateEmlak from './components/CreateEmlak';
import CreateMulkSahibi from './components/CreateMulkSahibi';
import CreateIsYeri from './components/CreateIsYeri';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponenet />
        <div className="container">
          <Switch>
            <Route path='/liste' exact component= {EmlakList}></Route>
            <Route path='/ekle' component = {CreateEmlak}></Route>
            <Route path='/musteri' component={CreateMulkSahibi}></Route>
            <Route path='/' exact component={CreateIsYeri}></Route>
          </Switch>
          
        </div>
        <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
