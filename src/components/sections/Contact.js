import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id='contact' class='section section-content contact-section'>
        <div class='section-title'>
          <h3 class='title-h3'>Contact</h3>
          <i class='fas fa-envelope title-icon'></i>
        </div>
        <form id='contact-form' class='contact-form-styles'>
          <div className='form-section'>
            <label htmlFor='name-input'>Name</label>
            <input type='text' id='name' />
          </div>
          <div className='form-section'>
            <label htmlFor='email-input'>Email Address</label>
            <input type='email' id='email' />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
