import React, {useEffect, useState} from 'react';
import StringStream from "./StringStream";

const MAX_STREAMS = 50;

const MatrixBackground = () => {
    const [streams, setStreams] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStreams((prevStreams) => {
                if (prevStreams.length < MAX_STREAMS) {
                    const newStream = {id: Date.now()};
                    return [...prevStreams, newStream];
                }
                return prevStreams;
            });
        }, 250);
        return () => clearInterval(intervalId);
    }, []);

    const handleStreamEnd = (index) => {
        setStreams((prevStreams) => prevStreams.filter(stream => stream.id !== index));
    };
    return (
        <div style={{
            position: "fixed",
            backgroundColor: "black",
            top: 0,
            left: 0,
            zIndex: -1,
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            {streams.map((stream) => (
                <StringStream key={stream.id} id={stream.id} onEnd={handleStreamEnd}/>
            ))}

        </div>
    );
};

export default MatrixBackground;
