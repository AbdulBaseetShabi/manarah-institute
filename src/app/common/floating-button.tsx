"use client";

import { HandHelping } from "lucide-react";
import { useEffect, useState } from "react";
import LINKS from "./links";

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            
            // Show button only after scrolling past the first viewport
            setIsVisible(scrollPosition > viewportHeight);
        };

        window.addEventListener("scroll", handleScroll);
        
        // Check initial position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button 
            className={`fixed bottom-1 md:bottom-8 right-1 md:right-8 rounded-full shadow-black shadow-md flex flex-col items-center cursor-pointer bg-[#3A3042] text-white p-4 hover:p-8 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
            }`}
            onClick={() => window.open(LINKS.donate, "_blank")}
        >
            <HandHelping />
        </button>
    );
}

export default FloatingButton;