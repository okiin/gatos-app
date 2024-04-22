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
            <h1>Cats</h1>
            <Link href="/">Home</Link>
            <div className="flex justify-center">
                    <button
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
                        <img className="w-64 h-64" src={cat.url} alt={cat.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}