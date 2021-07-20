import { Switch, Route } from 'react-router-dom'
import Hero from './Website/pages/Hero/Hero'
import Admission from './Website/pages/admission/Admission'
import Scheduler from './Website/pages/scheduler/Scheduler'
import Market from './Website/pages/Market/Market'
import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
                  <Hero/>
              </Route>
              <Route path="/admission" exact>
                <Admission/>
              </Route>
              <Route path="/scheduler" exact>
                <Scheduler/>
              </Route>
              <Route path="/business-market" exact>
                <Market/>
              </Route>
        </Switch>
    </>
  );
}

export default App;
