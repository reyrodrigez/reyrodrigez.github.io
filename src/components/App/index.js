import React from 'react';
import Navigation from '../Navigation';
import '../../styles.scss';


export default class App extends React.Component {
    render() {
        return (
            <main className="container">
                <header className="header">
                    <Navigation />
                </header>
            </main>);
    }
}