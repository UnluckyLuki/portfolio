import React, {useEffect, useState} from 'react';

const VALID_CHAR = "!#$%&()*+,.-/01234567689:<>=?ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}|"
const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 30;
const MIN_FONT_SIZE = 15;
const MAX_FONT_SIZE = 40;


const getRandomChar = () => VALID_CHAR.charAt(Math.floor(Math.random() * VALID_CHAR.length));
const getRandomSize = () => Math.floor(Math.random() * (MAX_STREAM_SIZE - MIN_STREAM_SIZE)) + MIN_STREAM_SIZE;
const getStream = () => Array.from({length: getRandomSize()}, getRandomChar).join('');
const getXPosition = () => Math.floor(Math.random() * (window.innerWidth));
const getYPosition = () => Math.floor(Math.random() * (window.innerHeight / 5));
const getRandomFontSize = () => Math.floor(Math.random() * (MAX_FONT_SIZE - MIN_FONT_SIZE)) + MIN_FONT_SIZE;
const getRandomTime = () => Math.floor(Math.random() * (80 - 30)) + 30;


const StringStream = ({id, onEnd}) => {
    const [stream, setStream] = useState(getStream());
    const [YPosition, setYPosition] = useState(getYPosition());
    const [XPosition, setXPosition] = useState(getXPosition());
    const [fontSize, setFontSize] = useState(getRandomFontSize());
    const [visibleCharacters, setVisibleCharacters] = useState(1)
    const [animationTime, setAnimationTime] = useState(getRandomTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleCharacters((prevVisibleCharacters) => {
                const newVisibleCharacters = prevVisibleCharacters + 1;
                if (newVisibleCharacters > stream.length + 10) {
                    clearInterval(intervalId);
                    onEnd(id);
                }
                return newVisibleCharacters;
            })
        }, animationTime);
        return () => clearInterval(intervalId);
    }, [id, onEnd, stream.length])


    return (
        <div
            style={{
                position: 'absolute',
                left: `${XPosition}px`,
                top: `${YPosition}px`,
                fontFamily: 'Matrix Code NFI',
                color: '#20c20e',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                textShadow: `0px 0px ${fontSize - 3}px rgba(32, 194, 14, 0.8)`,
                fontSize: `${fontSize}px`,
            }}>
            {stream.split('').map((char, index) => (
                <span
                    key={index}
                    style={{
                    color: index === visibleCharacters - 1 ? '#fff' : undefined,
                    opacity: index >= visibleCharacters ? 0 : index === visibleCharacters - 1 ? 1 : 1 - (visibleCharacters - index) * 0.10,
                    textShadow: index === visibleCharacters - 1 ? `0px 0px ${fontSize / 3}px rgba(255, 255, 255, 1)` : undefined,
                }}>
                    {char}
                </span>
            ))}
        </div>
    );
};


export default StringStream;


// setYPosition((prevVertical) => {
//     // const newVertical = prevVertical + 2;
//     if (newVertical > window.innerHeight) {
//         clearInterval(intervalId);
//         onEnd();
//     }
//     return newVertical;
// });