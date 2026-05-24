import { useState } from "react";

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => {
    const [likes, setLikes] = useState(0);
    const handClick = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button 
                className="button" 
                onClick={handClick}>
                    Like ({likes})
            </button>
        </div>
    );
}   

export default Card