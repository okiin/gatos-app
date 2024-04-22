'use client';

import React, { useState, useEffect } from 'react';


export default function Home() {

  return (
    <div>
      <div>
       <h1 className='text-3xl font-bold font-serif text-center'>Home</h1>
      </div>
      <div>
        <button
          onClick={() => {
            window.location.href = '/cats';
          }}
        >Gatos</button>
      </div>
      <div className=''>
       <footer className='text-1xl font-serif mt-auto '> O consumo da api de gatos, utilizando rotas dinamicas no Next.js e axios para fazer a chamada.</footer> 
      </div>
    </div>
  );
}


