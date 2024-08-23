import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { Link, Button as ButtonStyles, Image, Button } from "@nextui-org/react";
import Main from "@/components/main";
import { NavigationBar } from '@/components/topBar';
import { SideBar } from '@/components/sideBar';
import { useDisclosure } from "@nextui-org/react";
import Settings from "../components/settings";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpenSettings = () => {
    onOpen();
  };
  const [navPosition, setNavPosition] = useState({ top: 0, left: 0 });
  const [sidenavPosition, setSideNavPosition] = useState({ top: 0, left: 0 });
  const [anchorPosition, setAnchorPosition] = useState({ x: 0, y: 0 });
  const [anchorSidebarPosition, setSidebarAnchorPosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const updateAnchorPosition = (x: number, y: number) => {
    setNavPosition(prevState => ({
      ...prevState,
      top: y,
      left: x
    }));
  };

  const updateSidebarAnchorPosition = (x: number, y: number) => {
    setSideNavPosition(prevState => ({
      ...prevState,
      top: y,
      left: x
    }));
  };
  

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = document.getElementById('svg-container');
    const navAnchor = container?.querySelector('[data-nav-anchor]');
    const sidenavAnchor = container?.querySelector('[data-sidebar-anchor]');
    if (container && navAnchor && sidenavAnchor) {
      const containerRect = container.getBoundingClientRect();
      const anchorRect = navAnchor.getBoundingClientRect();
      const sideanchorRect = sidenavAnchor.getBoundingClientRect();
      setNavPosition({
        top: anchorRect.top - containerRect.top,
        left: anchorRect.left - containerRect.left
      });
      setSideNavPosition({
        top: sideanchorRect.top - containerRect.top,
        left: sideanchorRect.left - containerRect.left
      });
    }
  }, [windowSize, imageUrl]);
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full">
        <NavigationBar handleSelectImage={handleSelectImage} position={navPosition} />
      </div>
      <div ref={mainRef} className="w-full h-full relative">
      <Main imageUrl={imageUrl} updateAnchorPosition={updateAnchorPosition} updateSidebarAnchorPosition={updateSidebarAnchorPosition} />
      </div>
      <div className="w-full h-full relative">
        <SideBar handleOpenSettings={handleOpenSettings} position={sidenavPosition} />
      </div>
      <Settings isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  )
}