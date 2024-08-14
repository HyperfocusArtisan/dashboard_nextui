import React from "react";
import Head from "next/head";
import { Link, button as buttonStyles, Image, Button } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function Home() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-[800px] h-[500px] bg-[#e6f3ff] rounded-3xl shadow-lg overflow-hidden relative">
          {/* Komplexe Form in der oberen linken Ecke */}
          <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-white z-10">
            <div className="w-full h-full bg-[#e6f3ff]" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 60% 100%, 0 40%)'
            }}></div>
          </div>
          
          {/* Abgerundete Ecke oben links */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-gray-100 rounded-br-xl z-20"></div>
  
          {/* Weiße Leiste oben */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center px-4 z-20 rounded-t-3xl">
            <div className="flex-grow flex space-x-2 ml-40">
              {['Button', 'Button', 'Button', 'Button', 'Button'].map((text, index) => (
                <button key={index} className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  {text}
                </button>
              ))}
            </div>
            <button className="px-4 py-1 bg-gray-800 text-white rounded-full text-xs">
              Exit ×
            </button>
          </div>
        
        {/* Hauptbild */}
        <div className="w-full h-full relative">
        <Image
            src="https://placehold.co/4000x3000/orange/white"
            alt="Anime scene with characters overlooking a distant city"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />

        </div>
        
        {/* Seitenleiste links */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-white rounded-full"></div>
        
        {/* Einstellungs-Icon */}
        <div className="absolute left-2 bottom-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}