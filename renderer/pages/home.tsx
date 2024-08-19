import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { Link, Button as ButtonStyles, Image, Button } from "@nextui-org/react";
import Main from "@/components/main";
import { NavigationBar } from '@/components/topBar';
import { SideBar } from '@/components/sideBar';

declare global {
  interface Window {
    ipc: import('../../main/preload').IpcHandler
  }
}
export default function Home() {
  const [imageUrl, setImageUrl] = useState("https://placehold.co/1600x160/orange/white");
  const handleSelectImage = async () => {
    const result = await window.ipc.invoke('select-image');
    if (result) {
        setImageUrl(result);
    }
  };
  const handleOpenSettings = async () => {
    const result = await window.ipc.invoke('select-image');
    if (result) {
        setImageUrl(result);
    }
  };
  const [navPosition, setNavPosition] = useState({ top: 0, left: 0 });
  const mainRef = useRef(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      const navAnchor = mainRef.current.querySelector('[data-nav-anchor]');
      if (navAnchor) {
        const rect = navAnchor.getBoundingClientRect();
        setNavPosition({ top: rect.top, left: rect.right });
      }
    }
  }, [windowSize, imageUrl]);
  return (
    <div className="relative w-full h-full">
      <div ref={mainRef} className="w-full h-full relative">
        <Main imageUrl={imageUrl}/>
      </div>
      <div className="relative w-full h-full">
        <NavigationBar handleSelectImage={handleSelectImage} position={navPosition} />
      </div>
      <div className="w-full h-full relative">
        <SideBar handleOpenSettings={handleOpenSettings} />
      </div>
    </div>
    
  )
}