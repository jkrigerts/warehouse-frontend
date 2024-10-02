import React, { useState } from 'react';

const ProductPopup = ({ product, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: product.name,
        category: product.category,
        count: product.available,
        rentPrice: product.rentPrice,
    });
    const [preview, setPreview] = useState(product.img);
    const [photoFile, setPhotoFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhotoFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, photo: photoFile });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-[#2D283E] rounded-lg p-6 w-[90%] md:w-[50%] max-w-lg space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center text-[#2D283E] dark:text-white">Rediģēt produkta informāciju</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium dark:text-white">Nosaukums</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-[#4C495D] dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium dark:text-white">Kategorija</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-[#4C495D] dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium dark:text-white">Pieejamais daudzums</label>
                        <input
                            type="number"
                            name="count"
                            value={formData.count}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-[#4C495D] dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium dark:text-white">Īres cena/24h</label>
                        <input
                            type="number"
                            name="rentPrice"
                            value={formData.rentPrice}
                            onChange={handleChange}
                            className="w-full p-2 border rounded dark:bg-[#4C495D] dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium dark:text-white">Pievienot bildi (fails)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-2 w-full"
                            required
                        />
                        {preview && (
                            <div className="mt-2">
                                <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded" />
                            </div>
                        )}
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
                            type="submit"
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

export default ProductPopup;
