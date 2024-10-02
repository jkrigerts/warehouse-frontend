import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventData from '../../data/Planned.json'; // Ensure correct import
import Sidebar from '../CommonUI/Sidebar';
import { darkModeStyles, lightModeStyles } from '../utils/Themes';
import EventEdit from './EventEdit'; // Ensure this is correctly named and imported

const EventDetails = () => {
    const { id } = useParams();
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventPopup, setShowEventPopup] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('isDarkMode');
        if (storedMode !== null) {
            setIsDarkMode(JSON.parse(storedMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const currentModeStyles = isDarkMode ? darkModeStyles : lightModeStyles;

    // Find the event by ID
    const event = EventData.find(event => event.id === parseInt(id));

    if (!event) return <p className={`${currentModeStyles.text} p-4`}>Event not found</p>;

    const handleEditClick = () => {
        setSelectedEvent(event);
        setShowEventPopup(true);
    };

    return (
        <div className={`flex min-h-screen ${currentModeStyles.background}`}>
            <Sidebar isDarkMode={isDarkMode} toggleMode={() => setIsDarkMode(!isDarkMode)} />
            <div className={`flex flex-col flex-grow ${currentModeStyles.background} mt-16 md:ml-64 p-4 overflow-hidden justify-between`}>
                <div className="flex flex-col h-full items-center justify-evenly">
                    <div className={`flex flex-col justify-center items-center w-full py-8 ${currentModeStyles.cardBg} shadow-md`}>
                        <p className={`text-3xl ${currentModeStyles.text} text-center font-bold mb-4`}>Pasākuma informācija</p>
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:w-auto h-full md:h-auto justify-center items-center">
                        <div className=" md:h-[300px] md:w-1/3 w-full h-auto p-4 flex flex-col items-center">
                            <img src={event.img} alt={event.name} className="w-full h-auto rounded-sm" />
                            <button
                                type="button"
                                onClick={handleEditClick}
                                className={`w-full px-4 mt-5 py-2 ${currentModeStyles.cardAccent} text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                            >
                                LABOT INFORMĀCIJU
                            </button>
                        </div>

                        {/* Event Details */}
                        <div className="md:w-2/3 md:h-full w-full p-4 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <p className={`text-4xl ${currentModeStyles.text} font-bold`}>{event.name}</p>
                                <div className={`flex flex-col text-base ${currentModeStyles.text}`}>
                                    <p>Pasākuma datums:</p>
                                    <p>No: {event.from}</p>
                                    <p>Līdz: {event.to}</p>
                                </div>
                            </div>

                            {/* Reserved Equipment Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className={`${currentModeStyles.border} bg-gray-50`}>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aprīkojums</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daudzums</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {event.reservedEquipment && event.reservedEquipment.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render Popups */}
            {showEventPopup && (
                <EventEdit
                    event={selectedEvent}
                    onClose={() => setShowEventPopup(false)}
                    onSave={(updatedEvent) => {
                        console.log('Event updated:', updatedEvent);
                        setShowEventPopup(false);
                    }}
                />
            )}
        </div>
    );
};

export default EventDetails;
