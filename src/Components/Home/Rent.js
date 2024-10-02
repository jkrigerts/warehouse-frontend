import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../CommonUI/Sidebar";
import SearchBar from "../CommonUI/SearchBar";
import RentItem from "../../data/Rent.json";
import { darkModeStyles, lightModeStyles } from "../utils/Themes";

const Rent = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode
    });

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const currentModeStyles = isDarkMode ? darkModeStyles : lightModeStyles;

    return (
        <div className={`flex min-h-screen ${currentModeStyles.background}`}>
            <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
            <div className="flex flex-col flex-grow mt-16 md:ml-64">
                <div className={`flex flex-col justify-center items-center w-full py-8 ${currentModeStyles.cardBg} shadow-md`}>
                    <p className={`text-3xl ${currentModeStyles.heading} font-bold mb-4`}>Preces nodotas īrei</p>
                    <SearchBar />
                </div>
                <div className="flex flex-col flex-grow overflow-y-auto md:p-6 p-2">
                    <div className="flex flex-wrap justify-start items-center md:gap-4 gap-1">
                        {RentItem.map((RentDetails) => (
                            <Link
                                to={`/product/${RentDetails.id}`}  // Use RentDetails.id to link to product details
                                key={RentDetails.id}  // Correct identifier
                                className={`w-36 md:w-52 h-[240px] ${currentModeStyles.cardBg} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl ${currentModeStyles.border} border-2`}
                            >
                                <div className={`h-[160px] ${currentModeStyles.cardBg} flex items-center justify-center overflow-hidden`}>
                                    <img
                                        src={RentDetails.img}
                                        alt={RentDetails.name}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className={`h-[80px] ${currentModeStyles.cardAccent} p-3 flex flex-col justify-between`}>
                                    <p className={`font-semibold text-sm ${currentModeStyles.text} truncate tracking-tight`}>
                                        {RentDetails.name}
                                    </p>
                                    <p className="text-xs font-bold">
                                        Daudzums: {RentDetails.count}
                                    </p>
                                    <p className="text-xs">
                                        Līdz: {RentDetails.to}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rent;
