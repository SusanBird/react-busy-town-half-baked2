import React from 'react';

export default function Vehicle({ vehicle }) {
  return (
    <div className="vehicle">
      {vehicle === 'car' && <span>🚗</span>}
      {vehicle === 'truck' && <span>🚚</span>}
      {vehicle === 'bus' && <span>🚌</span>}
      {vehicle === 'motorcycle' && <span>🏍️</span>}
    </div>
  );
}

{/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
{/* if the vehicle props is a car, render a '🚗' emoji */}
{/* if the vehicle props is a truck, render a '🚚' emoji */}
{/* if the vehicle props is a bus, render a '🚌' emoji */}
{/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}