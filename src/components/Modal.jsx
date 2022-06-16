import React, { Button } from 'react'
import SelectLanguage from './Select/SelectLanguage'
import logo from '../assets/Icons/Plan de travail 1.png'
import { useNavigate, Redirect } from 'react-router-dom';
import HomeUser from '../pages/HomeUser';


function Modal({ CloseModal }) {

  function Access() {
    const AccessKey = localStorage.getItem('AccessUser');
    console.log("AccessKey");

    if (AccessKey == "True") {
      window.location = '/apply'
    }
  }

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div class="relative bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[27em] sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <img
                className='px-8 py-4'
                src={logo}
              />
              <div class="sm:flex sm:items-start justify-center">
                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                  <span class="text-sm leading-6 font-medium text-gray-900 relative top-4 opacity-80" id="modal-title">Please Select your Nationality :</span>
                  <div class="mt-2 w-[20em]">
                    <SelectLanguage />
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6">
              <button type="button" id='submitUser' onClick={Access} class="bg-red-600 px-5 py-2 text-white rounded-sm flex mx-auto">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal