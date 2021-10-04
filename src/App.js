import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './components/Card';
import { Loader } from './components/Loader';
import { MainBar } from './components/MainBar';
import { getWeather } from './store/slices/weatherSlice';


function App() {
  const {isLoading, days} = useSelector(state => state.weather)
  const dispatch = useDispatch()

  
  React.useEffect(() => {
    dispatch(getWeather({key: "7626518253def0213aa3bd251eb0f933", lat: 41.311081, lon: 69.240562}))
  }, [])

  return (
    <div className="App wrapper">
      {isLoading ? <Loader /> : <MainBar />}
      <div className = "cards">
        {Object.values(days).map(el => 
        <Card 
          key = {el.dt} 
          {...el}/>)}
      </div>
    </div>
  );
}

export default App;
