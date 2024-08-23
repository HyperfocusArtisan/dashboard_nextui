import React from 'react';
import { Button } from "@nextui-org/react";
import { SettingsIcon } from "@/components/icons";

interface NavigationBarProps {
  handleOpenSettings: () => void;
  position: { top: number; left: number };
}

export const SideBar: React.FC<NavigationBarProps> = ({ handleOpenSettings, position }) => {
  return (
    <div className="fixed w-[60px] h-[690px] bottom-0 left-0 bg-white rounded-[40px] shadow-[0px_4px_4px_#00000040] flex flex-col justify-end pb-4" style={{ top: `${position.top}px`, left: `${position.left}px` }} >
      <div className="#000000">
        <Button onClick={handleOpenSettings} className="all-[unset] box-border flex items-center justify-center gap-2 p-3 bg-white rounded-full overflow-hidden border border-solid border-[#767676]">
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
            <SettingsIcon size={16} />
          </div>
        </Button>
      </div>
    </div>
  );
};