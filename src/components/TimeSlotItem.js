import React from 'react';

function TimeSlotItem(props){
  return (
    <li className="time-slots-list-item"><button className="time-slot-button" onClick={props.savePreferredTime} value={props.time}>{props.time}</button></li>
  );

}

export default TimeSlotItem;
                