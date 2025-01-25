import {useState} from "react";
import { useForm } from "react-hook-form";
import './Upload.css'
import NavLinks from "../../components/NavLinks/NavLinks.jsx";

function Upload() {
    const [selected, setSelected] = useState('');
    const [selectedCountry, setSelectedCountry] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (!selected || !selectedCountry) {
            alert("Please select a file and a country before uploading.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", selected);
            formData.append("title", data.title);
            formData.append("country", selectedCountry);

            const response = await fetch("http://localhost:8080/uploads", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to upload data: ${errorMessage}`);
            }

            const result = await response.json();
            console.log("Upload successful:", result);

            reset();
            setSelected('');
            setSelectedCountry("");
        } catch (error) {
            console.log("Upload failed:", error);
        }
    };



    return (
    <div>
        <nav className="nav-class">
            <NavLinks to="/" text="Homepage"/>
            <NavLinks to="/about" text="About"/>
            <NavLinks to="/HikingTrips" text="Hiking Trips"/>
        </nav>
        <form className="upload-container" onSubmit={handleSubmit(onSubmit)}>
            <h2>Upload Image</h2>
            <div>
                <label htmlFor="file">Upload File:</label>
                <input
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={(e) => setSelected(e.target.files[0])}
                />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    {...register("title", {required: true})}
                />
                {errors.title && <p>Title is required</p>}
            </div>
            <div>
                <label htmlFor="country">Select Country:</label>
                <select
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option value="">-- Select a Country --</option>
                    <option value="Austria">Austria</option>
                    <option value="Italy">Italy</option>
                    <option value="Austria">Switzerland</option>
                    <option value="Albania">Albania</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Norway">Norway</option>
                    <option value="Scotland">Scotland</option>
                </select>
            </div>
            <button className="submit-btn" type="submit">Upload</button>
        </form>
    </div>
    );
}

export default Upload;