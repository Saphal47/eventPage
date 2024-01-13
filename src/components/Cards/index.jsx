import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [college,setCollege] = useState('');
  const [branch,setBranch] = useState('');
  const [year,setYear] = useState('');
  const [phone,setPhone] = useState('');
  const [alertMessage,setAlertMessage] = useState('');

  const onSubmit = async ()=>{
    if (!name || !email || !college || !branch || !year || !phone) {
      setAlertMessage('Registration failed. Please fill in all mandatory fields.');
      return;
    }
    
    try{ 
      await axios.post('https://sheet.best/api/sheets/de011e04-d8e4-4d3f-b445-1a03812790e4',{
        name,email,college,
        branch,year,phone
      });
      setAlertMessage('Registeration Successful!');
    }
    catch(error){
      console.log('Error try again:',error);
      setAlertMessage('Registeration failed. Try again!');
    }

  }
  const openRegistrationForm = () => {
    setIsModalOpen(true);
  };

  const closeRegistrationForm = () => {
    setIsModalOpen(false);
    setAlertMessage('');
  };

  
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="border-b-2 border-neutral-100 px-6 py-3">
        Registration
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
        Past Event
        <br/>This event ended 73 days ago.
        </h5>
        <p className="mb-4 text-base text-neutral-600">
          Welcome! To join the event, please register below.
        </p>
        <button
          type="button"
          className="block w-full rounded bg-primary px-6 py-2.5 text-xl font-semibold text-white bg-blue-700"
          onClick={openRegistrationForm}
        >
          Register
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeRegistrationForm}
          contentLabel="Registration Form Modal"
        >
          <h2 className='text-2xl text-center font-bold'>Registration Form</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type="text"
                placeholder='Your name'
                onChange={(e)=> setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type="text"
                placeholder='123@gmail.com'
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="college">
                College:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type="text"
                placeholder='college name'
                onChange={(e)=> setCollege(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                Branch:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type="text"
                placeholder='Branch'
                onChange={(e)=> setBranch(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Graduation Year:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type='number'
                placeholder='2020'
                onChange={(e)=> setYear(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone:
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-md"
                type='number'
                placeholder='8888888888'
                onChange={(e)=> setPhone(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="block w-full bg-primary px-6 py-2.5 text-xs font-medium uppercase rounded-md text-white bg-blue-700"
              onClick = {onSubmit}
            >
              Register
            </button>
              {alertMessage && (
                <div className="mt-4 p-2 bg-green-200 text-green-800 rounded-md">
                  {alertMessage}
                </div>
              )}
        </form>

        </Modal>
      </div>
    </div>
  );
};
