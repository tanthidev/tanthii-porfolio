import React, { useState } from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';

function Carousel({ children }) {
    const [active, setActive] = useState(0);
    const [startX, setStartX] = useState(null);
    const count = React.Children.count(children);
    const MAX_VISIBILITY = 3;

    const handleNext = () => {
        if (active < count - 1) setActive(active + 1);
    };

    const handlePrev = () => {
        if (active > 0) setActive(active - 1);
    };

    // Xử lý khi bắt đầu chạm / kéo
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    // Xử lý khi lướt xong (end)
    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        handleSwipe(endX);
    };

    const handleMouseUp = (e) => {
        const endX = e.clientX;
        handleSwipe(endX);
    };

    const handleSwipe = (endX) => {
        if (startX && Math.abs(startX - endX) > 50) {
            if (startX > endX) {
                handleNext(); // Lướt sang trái -> chuyển sang slide tiếp theo
            } else {
                handlePrev(); // Lướt sang phải -> quay lại slide trước
            }
        }
        setStartX(null); // Reset startX sau khi lướt xong
    };

    return (
        <div
            className="carousel w-full md:w-2/3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {active > 0 && (
                <button className="nav left text-black dark:text-white" onClick={handlePrev}>
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className="card-container"
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 5,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 2,
                        "pointer-events": active === i ? "auto" : "none",
                        "opacity": Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                        "display": Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className="nav right text-black dark:text-white" onClick={handleNext}>
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
}

export default Carousel;