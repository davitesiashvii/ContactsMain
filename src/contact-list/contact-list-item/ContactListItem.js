import React from 'react'
import './ContactListItem.css'

function ContactListItem({ contact: { id, name,phone,email }, index, removeContact }) {
  return (
    <div className=''>
      <div className='card-body'>
        <table class="table">
          <thead>
            <tr>
                <th scope="col">{name}</th>
                <th scope="col">{phone}</th>
                <th scope="col">{email}</th>
                <button
                  className='btn btn-danger float-right'
                  onClick={() => removeContact(id)}
                >
                  X
                </button>
            </tr>
          </thead>
        </table>  
        
      </div>
    </div>
  )
}

export default ContactListItem
