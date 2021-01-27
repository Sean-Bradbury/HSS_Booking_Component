import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaCalendarDay } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';
import TimeSlotItem from './TimeSlotItem';

function BookDemo(){

  const [date, setDate] = useState(new Date());

  const selectDate = date => {
    setDate(date)
  }

  const [contact, setContact] = useState({
      name: "",
      email: ""
    });

  const [preferredTime, setPreferredTime] = useState("")

  function saveContactDetails(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function savePreferredTime(event) {
    event.preventDefault();
    let timeChosen = event.target.value;
    setPreferredTime(timeChosen);

    const buttons = document.querySelectorAll('.time-slot-button');

    buttons.forEach((button) => {
      button.classList.remove('active');
      if(timeChosen === button.value) {
        button.classList.add('active');
      }
    });    
  }  

  const timeSlotsAvailable = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];

  const theTimeSlots = timeSlotsAvailable
    .map(time => {
      return (
        <TimeSlotItem 
          key={time}
          time={time}
          savePreferredTime={savePreferredTime}
        />
      )
    })

  return (
    <div id="book-demo-wrapper">
      
      <div className="book-demo-a">
        <div className="demo-icon pb-2"><FaCalendarDay size={50} /></div>
        <h1 className="demo-title pb-2">Book A Demo</h1>    
        
        <Calendar 
          onChange={selectDate}
          value={date}
        />

        {preferredTime && <p className="p-2">You have chosen: {date.toDateString()} at {preferredTime}</p>}
      </div>

      <div className="book-demo-b">
        <h2 className="pb-2">Your Details</h2>
        <form className="book-demo-form" method="post">
          <div className="book-demo-form-group">
            <label htmlFor="name">Name:</label>
            <input required="true" id="name" type="text" name="name" value={contact.name} onChange={saveContactDetails}/>
          </div>

          <div className="book-demo-form-group">
            <label htmlFor="name">Email:</label>
            <input required="true" id="name" type="email" name="email" value={contact.email} onChange={saveContactDetails}/>
          </div>

          <h2 className="p-2">What time works best?</h2>

          <div className="content-box">          
            <div className="scrollbox">          
              <ul className="time-slots-list">
                {theTimeSlots}
              </ul>
            </div>
          </div>


          <button className="book-demo-form-button" type="submit">Submit</button>
        </form>
      </div>
    </div> 
  )
}

export default BookDemo;