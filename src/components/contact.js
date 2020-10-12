import React from 'react';
import './contact.css';

function ContactCard() {
  return (
    <div class='Contact'>
      <img
        class='avatar'
        src='https://randomuser.me/api/portraits/lego/5.jpg'
        alt=''
      />
      <div>
        <h4 class='name'>John John</h4>
        <div class='status'>
          <p class='status-online'>
            <h4 class='status-text'> Online</h4>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
