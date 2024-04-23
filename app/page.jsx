'use client'
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-slate-900 from-10% via-gay-900 via-30% to-zinc-950 to-90%'>
      <div className="flex flex-col min-h-screen">
        <div className="p-4 bg-gradient-to-r from-cyan-800 from-10% via-sky-800 via-30% to-blue-950 to-90%">
          <h1 className='text-3xl font-bold font-serif text-center'>Home</h1>
        </div>
        <div className='flex justify-center p-9 '>
          <button className='w-40 h-10 rounded p-2 bg-slate-300 font-bold
            transition ease-in-out delay-150 bg-sky-800 hover:-translate-y-1 hover:scale-110 hover:bg-blue-950 duration-300'
            onClick={() => {
              window.location.href = '/cats';
            }}
          >Gatos</button>
        </div>
        <footer className="mt-auto text-center py-4 text-white
                            bg-gradient-to-r from-cyan-800 from-10% via-sky-800 via-30% to-blue-950 to-90%">
          O consumo da API de gatos, utilizando rotas dinâmicas no Next.js e Axios para fazer a chamada.
        </footer>
      </div>
    </div>
  );
}