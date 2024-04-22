'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Home() {

  return (
    <div>
      <h1>Gatinhos</h1>
      <div>
        <button
          onClick={() => {
            window.location.href = '/cats';
          }}
        >Ver gatos</button>
      </div>
    </div>
  );
}

