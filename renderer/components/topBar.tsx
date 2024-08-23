import React from 'react';
import {
    Kbd,
    Button,
    Link,
    Input,
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
    link as linkStyles
  } from "@nextui-org/react";
import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

interface NavigationBarProps {
  handleSelectImage: () => void;
  position: { top: number; left: number };
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ handleSelectImage, position }) => {
    return (
        <Navbar maxWidth="xl" className="absolute" style={{ top: `${position.top}px`, left: `${position.left}px` }}>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <div className="relative w-[1600px] h-[90px]">
                        <div className="fixed w-[1600px] h-[90px] top-0 left-0 bg-white rounded-[40px] shadow-[0px_4px_4px_#00000040]">
                            <Button className="all-[unset] box-border flex w-[161px] h-[60px] items-center justify-center gap-2 p-3 absolute top-[15px] left-[45px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                                    Button
                                </div>
                            </Button>
                            <Button className="all-[unset] box-border flex w-[161px] h-[60px] items-center justify-center gap-2 p-3 absolute top-[15px] left-[255px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                                    Button
                                </div>
                            </Button>
                            <Button className="all-[unset] box-border flex w-[162px] h-[60px] items-center justify-center gap-2 p-3 absolute top-[15px] left-[464px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                                    Button
                                </div>
                            </Button>
                            <Button className="all-[unset] box-border flex w-[161px] h-[60px] items-center justify-center gap-2 p-3 absolute top-[15px] left-[675px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                                    Button
                                </div>
                            </Button>
                            <Button onClick={handleSelectImage} className="all-[unset] box-border flex w-[161px] h-[60px] items-center justify-center gap-2 p-3 absolute top-[15px] left-[885px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                                    Select Local Image
                                </div>
                            </Button>
                            <NavbarItem className="hidden sm:flex gap-2 all-[unset] box-border w-[161px] h-[60px] items-center justify-center p-3 absolute top-[15px] left-[1100px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <ThemeSwitch />
                            </NavbarItem>

                            <NavbarItem className="hidden sm:flex gap-2 all-[unset] box-border w-[161px] h-[60px] items-center justify-center p-3 absolute top-[15px] left-[1300px] bg-white rounded-lg overflow-hidden border border-solid border-[#767676]">
                                <NavbarMenuToggle />
                            </NavbarItem>

                            <NavbarMenu>
                                <div className="mx-4 mt-2 flex flex-col gap-2">
                                    {siteConfig.navMenuItems.map((item, index) => (
                                        <NavbarMenuItem key={`${item}-${index}`}>
                                            <Link
                                                color={
                                                    index === 2
                                                        ? "primary"
                                                        : index ===
                                                        siteConfig.navMenuItems.length - 1
                                                        ? "danger"
                                                        : "foreground"
                                                }
                                                href="#"
                                                size="lg"
                                            >
                                                {item.label}
                                            </Link>
                                        </NavbarMenuItem>
                                    ))}
                                </div>
                            </NavbarMenu>
                        </div>
                    </div>
            </NavbarContent>
        </Navbar>
    );
};