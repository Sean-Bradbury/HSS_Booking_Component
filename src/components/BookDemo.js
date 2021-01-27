import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaCalendarDay } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';

function BookDemo(){

  const [date, setDate] = useState(new Date('2021-06-11'));

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

  return (
    <div id="book-demo-wrapper">
      
      <div className="book-demo-a">
        <div className="demo-icon pb-2"><FaCalendarDay size={50} /></div>
        <h1 className="demo-title pb-2">Book A Demo</h1>    
        
        <Calendar 
          onChange={selectDate}
          value={date}
        />

        {preferredTime && <p className="p-2">You have chosen the: {date.toDateString()} at {preferredTime}</p>}
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
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="08:00">08:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="09:00">09:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="10:00">10:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="11:00">11:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="12:00">12:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="13:00">13:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="14:00">14:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="15:00">15:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="16:00">16:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="17:00">17:00</button></li>
                <li className="time-slots-list-item"><button className="time-slot-button" onClick={savePreferredTime} value="18:00">18:00</button></li>
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