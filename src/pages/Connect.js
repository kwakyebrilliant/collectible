import React, {useState} from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

import logo from '../assets/logo.png'

function Connect() {

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <div>Connect</div>
  )
}

export default Connect