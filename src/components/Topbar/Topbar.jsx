import React from 'react';
import './Topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topbar fixed-top text-center p-3 me-2 border border-1 border-dark rounded-bottom">
        <div className="title-container rounded-3 bg-light border border-1 border-dark">
          <img src="/icon.ico" alt="RemoteTrends Logo" className='mt-3 ms-2' style={{ width: '50px', height: '50px' }} />
          <div className="title-swimming rounded-4 py-2 px-3 m-1 border border-1 border-dark">
            <span style={{ fontSize: '1.6em', fontWeight: 'bold' }}>Swimming</span>
          </div>
          <span className="title-remote mt-1 fs-4 fw-bold">To</span>
          <div className="title-swimming rounded-4 py-2 px-3 m-1 border border-1 border-dark">
            <span style={{ fontSize: '1.6em', fontWeight: 'bold' }}>Success</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
