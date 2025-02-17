import { useEffect, useRef } from "react";

function Star ({id, position, destroyStar}) {
    const starRef = useRef(null);

    useEffect(() => {
        const star = starRef.current;
        star.focus();
    }, []);

function handleClick(event) {
    destroyStar(id);
}

    return (
        <div
            ref={starRef}
            className="star"
            style={{left: position.x, top: position.y}}
            onClick={handleClick}
            tabIndex="0"
            >&#9733;</div>
    );
}

export default Star;