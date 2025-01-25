import {useEffect, useState} from "react";
import './CountryPage.css'

const CountryPage = ({ country }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {

        const fetchImages = async () => {
            try {
                const response = await fetch(`http://localhost:8080/uploads/${country}`);
                if (!response.ok) {
                    throw new Error("Error fetching images");
                }
                const data = await response.json();
                const imageUrls = data.map((fileName) => `http://localhost:8080${fileName}`);

                setImages(imageUrls);
                console.log("Fetched image data:", imageUrls);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchImages();
    }, [country]);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="test">
            <h1>Photos from {country}</h1>
            {error && <p>Error: {error}</p>}
            <div className="photo-gallery">
                {images.length === 0 ? (
                    <p>No photos available for {country}.</p>
                ) : (
                    images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`Photo from ${country}`}
                            onClick={() => openImage(imageUrl)}
                            className="thumbnail"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    ))
                )}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <img src={selectedImage} alt="Enlarged" className="modal-image" />
                </div>
            )}
        </div>
    );


};


export default CountryPage;
