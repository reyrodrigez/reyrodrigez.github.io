import React from 'react';

import PortfolioItem from './item';

export default class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio">
                <h1>Here is what I have been working on recently:</h1>
                <div className="portfolio__content">
                    <PortfolioItem title="Site sections" />
                    <PortfolioItem title="UI Kit" />
                    <PortfolioItem title="Navigation update" />
                    <PortfolioItem title="Commerce insets" />
                    <PortfolioItem title="Stripe integration" />
                    <PortfolioItem title="User Profile page" />
                    <PortfolioItem title="Channels project" />
                    <PortfolioItem title="SSO admin tools" />
                    <PortfolioItem title="Settings page" />
                    <PortfolioItem title="Comment Flagging tools" />
                    <PortfolioItem title="Checkout process" />
                    <PortfolioItem title="Online fashion magazine" />
                    <PortfolioItem title="Video landing pages" />
                    <PortfolioItem title="IVR" />
                </div>
            </section>
        );
    }
}