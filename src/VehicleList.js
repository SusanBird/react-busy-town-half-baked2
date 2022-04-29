import React from 'react';
import Vehicle from './Vehicle';
import { vehicles } from './App';

export default function VehicleList() {
  // const [vehicles, setVehicles] = useState(['car', 'truck']);

  
  return (
    <div className="traffic">
      {vehicles.map(vehicle => <Vehicle key={vehicle} vehicle={vehicle} />)}
    </div>
  );
}


{/* this component takes in a prop called vehicles, which is an array of vehicle strings */}
{/* map through the vehicles array in props */}
{/* for each item render a Vehicle component. Pass the vehicle string as a prop called 
vehicle to the Vehicle component.  */}


///unsure if it is cool to import { vehicles } over from App.js - does that make data flow upstream?