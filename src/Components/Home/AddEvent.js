import React, { useState, useEffect } from 'react';
import Sidebar from "../CommonUI/Sidebar";
import { darkModeStyles, lightModeStyles } from "../utils/Themes"; // Import themes

export default function AddEvent() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Load mode from local storage
    useEffect(() => {
        const storedMode = localStorage.getItem('isDarkMode');
        if (storedMode) {
            setIsDarkMode(JSON.parse(storedMode));
        }
    }, []);

    // Save mode to local storage
    const toggleMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const currentModeStyles = isDarkMode ? darkModeStyles : lightModeStyles;

    return (
        <div className={`flex min-h-screen ${currentModeStyles.background}`}>
            <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
            <div className={`flex flex-col flex-grow ${currentModeStyles.background} mt-16 md:ml-64`}>
                <div className={`flex flex-col justify-center items-center w-full ${currentModeStyles.cardBg} py-4`}>
                    <p className={`text-3xl ${currentModeStyles.text} font-bold mb-4`}>Pievienot pasākumu</p>
                </div>
                <div className="flex justify-center items-center flex-grow overflow-y-auto p-4">
                    <form className="w-full max-w-2xl space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="nosaukums" className={`block text-sm font-medium ${currentModeStyles.text}`}>
                                Nosaukums:
                            </label>
                            <input
                                type="text"
                                id="nosaukums"
                                className={`w-full px-3 py-2 ${currentModeStyles.cardBg} ${currentModeStyles.text} rounded-sm border ${currentModeStyles.border} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="datumsNo" className={`block text-sm font-medium ${currentModeStyles.text}`}>
                                    Datums no:
                                </label>
                                <input
                                    type="text"
                                    id="datumsNo"
                                    className={`w-full px-3 py-2 ${currentModeStyles.cardBg} ${currentModeStyles.text} rounded-sm border ${currentModeStyles.border} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="datumsLidz" className={`block text-sm font-medium ${currentModeStyles.text}`}>
                                    Datums līdz:
                                </label>
                                <input
                                    type="text"
                                    id="datumsLidz"
                                    className={`w-full px-3 py-2 ${currentModeStyles.cardBg} ${currentModeStyles.text} rounded-sm border ${currentModeStyles.border} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDarkMode ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-gray-100'}`}
                        >
                            SAGLABĀT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
