import React, { useState } from 'react';
import Card from "../components/card";
import Navbar from "../components/navbar";

const Home =()=>{
    const [title, setTitle] = useState('Judul');
    const [content, setContent] = useState('Deskripsi singkat');
    const [images, setImages] = useState('https://p4.wallpaperbetter.com/wallpaper/780/49/86/saitama-one-punch-man-anime-gloves-wallpaper-preview.jpg');
    return(
        <>
        <Navbar/>
        <div className="px-6 py-6 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Card title={title} content={content} images={images}/>
        </div>
        </>
    )
}
export default Home