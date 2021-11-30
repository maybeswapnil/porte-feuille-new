import './App.css';
import {React, useState} from 'react';
import axios from 'axios';
import CircularJSON from 'circular-json'

function Form() {

  const [ip, setIP] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');
  const [data, setdata] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
    const str = CircularJSON.stringify({
        email: email,
        message: message,
        userinfo: {
            ip: ip
        }
    });

    setdata(str)
  }

  const SubmitData = () => {
            getData() 
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(JSON.parse(data))
            // };
            // try {
            //     fetch('http://localhost:8000/portefeuille/', requestOptions).then((response) => console.log(response))
            // } catch(e) {
            //     console.log(e)
            // }
  }


  return (
    <div className="form" id="mobile-hide">
            <p className="email-form-info">Provide info to get regular updates</p>
            <input style={{zIndex:100, width:'40vmin', borderColor:{color}}} className="email-class" type="email" placeholder="enter email" onChange={event => setEmail(event.target.value)}/>
            <br/>
            <br/>
            <input style={{zIndex:100, width:'40vmin', borderColor:{color}}} type="textbox" className="message-class" placeholder="type message" onChange={event => setMessage(event.target.value)}/>
            <br/>
            <br/>
            <button class="button-2" role="button" onClick={SubmitData}>Submit</button>
    </div>
  );
}

export default Form;