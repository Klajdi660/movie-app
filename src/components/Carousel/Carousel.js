import { useEffect, useState } from "react";
import moviesData from "../../db.json";
import "./Carousel.css";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const mod = (n, m) => {
        let result = n % m;
        // Return a positive value
        return result >= 0 ? result : result + m;
    };

    const cards = moviesData.movies;
    
    useEffect(() => {
        setTimeout(() => {
        setIndex((index + 1) % cards.length);
        }, 3000);
    }, [index, cards]);

    return (
        <div className="contanier">
            <div className="carousel">
                {cards.map((item, i) => {
                    const indexLeft = mod(index - 1, cards.length);
                    const indexRight = mod(index + 1, cards.length);
                    let className ="card";
        
                    if (i === index) {
                        className ="card card--active";
                    } else if (i === indexRight) {
                        className = "card card--right";
                    } else if (i === indexLeft) {
                        className = "card card--left";
                    } else className = "card";

                    return(
                        <img
                            key={i}
                            className={className}
                            src={item.posterUrl}
                            alt="card"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
