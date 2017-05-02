import React from 'react';

import PortfolioItem from './item';

export default class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio">
                <h1>Here is what I have been working on recently:</h1>
                <div className="portfolio__content">
                    <PortfolioItem title="Site sections" />
                    <PortfolioItem title="UI Kit" url="http://kinja.com/ui-kit/new"/>
                    <PortfolioItem title="Firebase queue" />
                    <PortfolioItem title="Navigation update" url="http://gizmodo.com"/>
                    <PortfolioItem title="Commerce insets" link="http://deals.kinja.com/convert-sunlight-into-a-full-phone-battery-with-ankers-1794623844"/>
                    <PortfolioItem title="Stripe integration" />
                    <PortfolioItem title="User Profile page" url="https://kinja.com/ashleyfeinberg" />
                    <PortfolioItem title="Channels project" />
                    <PortfolioItem title="SSO admin tools" />
                    <PortfolioItem title="Leanvocab REST API" url="http://leanvocab.herokuapp.com/"/>
                    <PortfolioItem title="Settings page" />
                    <PortfolioItem title="Comment Flagging tools" />
                    <PortfolioItem title="Checkout process" url="https://www.harrods.com/NewCheckoutCart.aspx" />
                    <PortfolioItem title="Online fashion magazine" />
                    <PortfolioItem title="Mortgage calculator" />
                    <PortfolioItem title="Video landing pages" />
                    <PortfolioItem title="IVR system" />
                </div>
            </section>
        );
    }
}