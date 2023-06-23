import React from "react"
import '../Styles/DefaultLayout.css'

const DefaultLayout = ({ children }) => {
    return (
        <main id="container">
            <section id="top-side">
                <div className="cam"></div>
                <div className="microphone"></div>
                <div className="light"></div>
            </section>
            <section id="content">{ children }</section>
        </main>
    )
}

export default DefaultLayout