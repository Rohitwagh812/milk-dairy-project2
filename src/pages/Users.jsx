import React from 'react';
import '../css/users.css'
import { Button , Table } from 'react-bootstrap';

import print from '../assets/images/printer.png'
import lefts from '../assets/images/left.png'
import add from '../assets/images/add.png'
import dots from '../assets/images/dots.png'
import data from '../pages/data.json'
import { useNavigate } from 'react-router';

function Users() {


  const navigate = useNavigate()

  const items = Array.isArray(data) ? data : data.items;

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const clicktoback = () =>{
    navigate('/')
  }


  return (
    <div className="users-page">
        <div className="main">
            <div className="haed">
                <div className="top">
                    <div className="one">
                      <img onClick={clicktoback} src={lefts} alt="" /> 
                      <h4> User List </h4>
                    </div>
                   <div className="two">
                     <Button className="print"> <img src={print}  alt="" /></Button>
                     <Button className='add-btn'> ADD <img src={add} alt="" /> </Button>
                   </div>
                </div>
                <div className="center">
                  <Button className='farmer-btn'> FARMER LIST </Button>
                  <Button className='buyer-btn'> BUYER LIST </Button>
                </div>
                <div className="bottom">
                  <div className="one">
                  <div className="inputBox_container">
                      <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                            <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                            </path>
                      </svg>
                      <input className="inputBox" id="inputBox" type="text" placeholder="Search For User"/>
                  </div>
                  </div>
                </div>
                <div className="last">
                  <div className="last-first">
                    <Table className='table-one'>
                    {/* <thead > */}
                      <tr>
                        <th>ID</th>
                        <th className='name'>Name</th>
                        <th className='phone'>Phone Number</th>
                        <th className='action'>Action</th>
                      </tr>
                      {/* </thead> */}
                    </Table> 
                    <div className="back"> 
                    <Table className='table-two'> 
                      <tbody> 
                            {
                              items.map((item)=>{
                                return(
                                  <tr>
                                    <td>{item.id}</td>
                                    <td>{capitalizeFirstLetter(item.name)}</td>
                                    <td>{item.phone}</td>
                                    <td><img src={dots} alt="" /></td>
                                  </tr>
                                )
                              })
                            } 
                      </tbody>
                    </Table> 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users