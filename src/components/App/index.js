import React from 'react';
import Portfolio from '../Portfolio';
import '../../styles.scss';


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <main className="main">
                    <section className="about">
                        <h1><span className="emphasis">👋🏻 Hello,</span> my name is Laszlo Heves.</h1>
                        <blockquote>I'm a Senior Frontend Developer with eight years of experience building medium and large sized websites and web applications with an emphasis on developing user interface related features from UX planning through site-build to deployment.</blockquote>
                    </section>
                    <Portfolio/>
                </main>
            </div>);
    }
}
