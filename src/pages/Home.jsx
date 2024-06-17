import React, { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import Milkbuy from '../assets/icon/milk buy.png';
import Milksale from '../assets/icon/milk sale.png';
import transaction from '../assets/icon/transactions.png';
import custom  from '../assets/icon/customers.png';
import paymant from '../assets/icon/payment.png';
import view from '../assets/icon/viewenrty.png';
import memb from '../assets/icon/membership.png';
import mail from '../assets/icon/email.png';
import notifi from '../assets/icon/notification.png';
import book from '../assets/icon/book.png';
import setting from '../assets/icon/settings.png';
import { useNavigate } from 'react-router';



function Home() {

  const navigate = useNavigate()
  
  
  const [admin , setAdmin] = useState([])


  useEffect(()=>{
   
    axios.get('https://randomuser.me/api/').then((res)=>{
      console.log(res.data.results)
      setAdmin(res.data.results)
    })

  },[])


  const handleusers = () =>{
    navigate('/users')
  }

  return (
    <div className='home-page'>
      {/* <h2>Home Page</h2>
      <p>Welcome to the Admin Dashboard!</p> */}

      <div className="dashboard">
         <main>
           <section className="top">  
             <div className="tags">
                <p className="wel-tag">
                  welcome back
                </p>
                <h5 className="name-tag">
                   HEMANT NIKAM
                </h5>
             </div>
             <div className="img-tag">
              {
                admin.map((user , index)=>{
                  return(
                    <div key={index}>
                    <img src={user.picture.large} alt="" /> 
                  </div>
                  )
                })
              }
            {/* <img src={} alt="" /> */}
             </div>
           </section>

           <section className="bottom">
              <div className="icons">
                  <div className="icon" id="icon1">
                    <img src={Milkbuy} alt="" />
                    <span> Milk Buy  </span> 
                  </div>
                  <div className="icon" id="icon2">
                    <img src={Milksale} alt="" />
                    <span> Milk Sale  </span>
                  </div>
                  <div onClick={handleusers} className="icon" id="icon3">
                    <img src={custom} alt="" />
                    <span> Customers </span>
                  </div>
                  <div className="icon" id="icon4">
                    <img src={paymant} alt="" />
                    <span> Payment Register </span>
                  </div>
                  <div className="icon" id="icon5">
                    <img src={view} alt="" />
                    <span> Entrys </span>
                  </div>
                  <div className="icon" id="icon6">
                    <img src={transaction} alt="" />
                    <span> Transations History </span>
                  </div>
                  <div className="icon" id="icon7">
                    <img src={memb} alt="" />
                    <span> Membership </span>
                  </div>
                  <div className="icon" id="icon8">
                    <img src={mail} alt="" />
                    <span> Message </span>
                  </div>
                  <div className="icon" id="icon9">
                    <img src={notifi} alt="" />
                    <span> Natification </span>
                  </div>
                  <div className="icon" id="icon10">
                    <img src={book} alt="" />
                    <span> Khata </span>
                  </div>
                  <div className="icon" id="icon11">
                    <img src={setting} alt="" />
                    <span> Settings </span>
                  </div>
              </div>
           </section>
         </main>
      </div>
    </div>
  )
}

export default Home