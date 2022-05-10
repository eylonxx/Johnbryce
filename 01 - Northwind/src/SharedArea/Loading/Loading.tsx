import React from 'react';
import './Loading.css';
import loadingSource from '../../Assets/Images/Loading.gif';
export default function Loading() {
  return (
    <div className="Loading">
      <img src={loadingSource} />
    </div>
  );
}
