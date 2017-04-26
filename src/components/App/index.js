import React from 'react';
import Navigation from '../Navigation';
import '../../styles.scss';


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <Navigation />
                </header>
                <main className="main">
                    <section className="about">
                        <h1><span className="emphasis">Hello,</span> my name is Laszlo Heves.</h1>
                        <blockquote>I have eight years of experience building medium and large sized websites and web applications. I am specialized in creating user facing features from UX planning through site-building to deployment.</blockquote>
                    </section>
                </main>
            </div>);
    }
}