import React from 'react';

export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.props.url ? this.clickHandler.bind(this) : () => true;
    }

    clickHandler() {
        window.open(this.props.url, '_blank');
    }

    render() {
        const activeClass = this.props.url ? 'portfolio__item--active': '';
        return (
            <div onClick={this.clickHandler} className={`portfolio__item ${activeClass}`}>
                {this.props.title}
            </div>
        );
    }
}
