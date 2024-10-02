import React, { useState } from 'react';
import { darkModeStyles, lightModeStyles } from '../utils/Themes';

const ProductRent = ({ onClose, onSave }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [quantity, setQuantity] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleSave = () => {
        onSave({ quantity, dateFrom, dateTo });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'quantity') {
            setQuantity(value);
        } else if (name === 'dateFrom') {
            setDateFrom(value);
        } else if (name === 'dateTo') {
            setDateTo(value);
        }
    };

    const currentModeStyles = isDarkMode ? darkModeStyles : lightModeStyles;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`bg-white dark:bg-[#2D283E] rounded-lg p-6 w-[90%] md:w-[50%] max-w-lg space-y-4`}>
                <h2 className={`text-2xl font-bold mb-4 text-center ${currentModeStyles.text}`}>Izīrēt produktu</h2>
                <form className="space-y-4">
                    <div>
                        <label className={`block text-sm font-medium ${currentModeStyles.text}`}>Daudzums</label>
                        <input
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${currentModeStyles.cardBg} ${currentModeStyles.text}`}
                        />
                    </div>
                    <div>
                        <label className={`block text-sm font-medium ${currentModeStyles.text}`}>Datums no</label>
                        <input
                            type="date"
                            name="dateFrom"
                            value={dateFrom}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${currentModeStyles.cardBg} ${currentModeStyles.text}`}
                        />
                    </div>
                    <div>
                        <label className={`block text-sm font-medium ${currentModeStyles.text}`}>Datums līdz</label>
                        <input
                            type="date"
                            name="dateTo"
                            value={dateTo}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${currentModeStyles.cardBg} ${currentModeStyles.text}`}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Atcelt
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Saglabāt
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductRent;
