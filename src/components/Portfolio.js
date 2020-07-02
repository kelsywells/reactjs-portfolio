import React from 'react';
import Thumbnail from './Thumbnail.js';

const Portfolio = (props) => {
    return (
        <div className="Portfolio">
            <h1>Projects</h1>
            <Thumbnail
                link="/great-idea"
                image="reactjs-portfolio\src\images\great-idea-dom.jpg"
                title="Great Idea DOM project"
                category="DOM School Project"
            />

            <Thumbnail
                link="/great-idea"
                image="reactjs-portfolio\src\images\great-idea-dom.jpg"
                title="Great Idea DOM project"
                category="DOM School Project"
            />
        </div>
    )
}



export default Portfolio;