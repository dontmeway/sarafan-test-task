import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { Days } from './components/Days';
import { Header } from './components/Header/Header';
import { Hours } from './components/Hours';
import { Loader } from './components/Loader';
import { Today } from './components/Today/';
import { getWeather } from './store/slices/weatherSlice';


function App() {
  const {isLoading, units} = useSelector(state => state.weather)
  const dispatch = useDispatch()

  
  React.useEffect(() => {
    dispatch(getWeather({key: "7626518253def0213aa3bd251eb0f933", lat: 41.311081, lon: 69.240562, units}))
  }, [dispatch, units])

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path = "/today" exact>
            {isLoading ? <Loader /> : <Today />}
          </Route>
          <Route path = "/8day">
            <Days />
          </Route>
          <Route path = "/hourly">
            <Hours />
          </Route>
        </Switch>
          <Redirect to = "/today"/>
      </main>
    </div>
  );
}

export default App;
