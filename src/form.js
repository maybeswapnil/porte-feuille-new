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
    const str = {
        email: email,
        message: message,
        time: "12-10-2021T12:33:12",
        userinfo: {
            ip: ip
        }
    }
    mongo(str)
      console.log(str)

    setdata(str)
  }

  const SubmitData = () => {
            getData()         
  }

  const mongo = async (x) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(x)
      };
      try {
        fetch('https://new-api-name.herokuapp.com/portefeuille', requestOptions).then((response) => console.log(response))
      } catch(e) {
          console.log(e)
      }
      }

     



  return (
    <div className="form" id="mobile-hide">
            {/* <p className=".form__label">Provide info to get regular updates</p>
            <br/>

            <input className="form__field" type="email" placeholder="enter email"  required />
            <br/>
            <br/>
            <br/>
            <input className="form__field" type="text" placeholder="type message" required />
            <br/>
            <br/>
            <br/>
            <br/>
            <button class="button-2" role="button" onClick={SubmitData} href='#home'>Submit</button> */}

            <input type="text" name="name" className="question" id="nme" onChange={event => setEmail(event.target.value)} required autocomplete="off" />
            <label for="nme"><span>What's your Email?</span></label>
            <br/>
            <br/>
            <textarea name="message" rows="2" className="question" id="msg" onChange={event => setMessage(event.target.value)}  required autocomplete="off"></textarea>
            <label for="msg"><span>What's your message?</span></label>
            <br/>
            <br/>
            <br/>
            <a href='#home'><button class="button-2" role="button" onClick={SubmitData} >Submit</button></a>
    </div>
  );
}

export default Form;
