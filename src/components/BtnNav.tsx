import { useState } from 'react';

// Mendeklarasikan interface untuk props
interface BtnNavProps {
    title: string; // Judul tombol
}

const BtnNav: React.FC<BtnNavProps> = ({ title }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center cursor-pointer gap-1"
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
            <p>{title}</p> {/* Menggunakan title dari props */}
            <div
                className={`w-5 h-[3px] transition-all duration-300 ease-in-out ${isHovered ? 'bg-primary' : 'bg-transparent'}`}
            ></div>
        </div>
    );
};

export default BtnNav;
