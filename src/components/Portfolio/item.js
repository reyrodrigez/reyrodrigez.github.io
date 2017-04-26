import React from 'react';

export default function PortfolioItem(props) {
    return (
        <div className="portfolio__item">
            {props.title}
        </div>
    );
}