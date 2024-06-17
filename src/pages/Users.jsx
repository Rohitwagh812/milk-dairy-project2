import React from 'react';
import '../css/users.css'
import { Button } from 'react-bootstrap';

import print from '../assets/images/printer.png'
import lefts from '../assets/images/left.png'
import add from '../assets/images/add.png'

function Users() {
  return (
    <div className="users-page">
        <div className="main">
            <div className="haed">
                <div className="top">
                    <div className="one">
                      <img src={lefts} alt="" /> 
                      <h4> User List </h4>
                    </div>
                   <div className="two">
                     <Button className="print"> <img src={print}  alt="" /></Button>
                     <Button className='add-btn'> ADD <img src={add} alt="" /> </Button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users