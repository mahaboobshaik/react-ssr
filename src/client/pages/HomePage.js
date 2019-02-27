import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>I'm the home component new</div>
            <button onClick={() => { console.log('Hi there!')}}>Press Me!</button>
        </div>
    )
}

export default { 
    component: HomePage
};