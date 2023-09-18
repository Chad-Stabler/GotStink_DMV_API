import { useState, useEffect } from 'react';
import { getVehicle } from './services/fetch-utils';
export default function DMV() {
  const [vehicle, setVehicle] = useState();
  const [query, setQuery] = useState();
  

  useEffect(() => {
    async function fetchVehicle() {
      const fetchedVehicle = await getVehicle(query);

      setVehicle(fetchedVehicle);
    }
    fetchVehicle();
  }, [query]);

  return (<div className='DMV'>
    
  </div>);
}