import React, {useState, useEffect} from 'react';
import RingLoader from "react-spinners/RingLoader";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio'
import Global from '../pages/Global'

function AppRoutes() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">
    {
      loading 
      ? 
        (<div className="loader"> 
        <RingLoader color="#132867"  size={90} loading={loading} />
        </div>
        )
      :
        (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/global" element={<Global />}/>
      </Routes>
    </HashRouter>
              )
            }
          </div>
  );
}

export default AppRoutes
