'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import api from "@/src/tools/api";

export default function Cats() {
    
    const [cats, setCats] = useState([]);

    async function fetchCats() {
       api.get('/images/search?limit=10').then((response) => {
          setCats(response.data);
       })
       .catch((error) => {
          console.log(error);
       })
    }
    useEffect(() => {
        fetchCats();
    }, []);
    return (
        <div>
            <div className="p-4 bg-gradient-to-r from-cyan-800 from-10% via-sky-800 via-30% to-blue-950 to-90% ..." >
            <h1 className="text-3xl font-bold font-serif text-center " >Cats</h1>
            </div>
            <div className="flex justify-center">
            <Link href="/" className="text-center w-32 mt-4 rounded p-2 bg-slate-300 font-bold" >Home</Link>
            </div>
            <div className="flex justify-center">
                    <button className="w-32 mt-4 rounded p-2 bg-slate-300 font-bold" 
                        onClick={() => {
                            fetchCats();
                        }}
                    >
                        Reload
                    </button>
                </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4 items-center p-4 ">
                {cats.map((cat) => (
                    <div key={cat.id}>
                        <img className="w-60 h-60" src={cat.url} alt={cat.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}