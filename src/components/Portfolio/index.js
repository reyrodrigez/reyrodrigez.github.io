import React from 'react';

import {PORTFOLIO} from '../../config';

import PortfolioItem from './item';

export default class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio">
                <h1>Here is what I have been working on recently:</h1>
                <div className="portfolio__content">
                    { Object.keys(PORTFOLIO).map( item => <PortfolioItem key={item} {...PORTFOLIO[item]} />) }
                </div>
            </section>
        );
    }
}