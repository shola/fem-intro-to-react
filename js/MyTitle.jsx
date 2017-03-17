// @flow
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: remove comment in next commit
// Adding a type definition allows concise type annotation
type MyPropType = {
    title: string,
    color: string
};

// Here is how to inline a flow type. It's cumbersome, not reusable, and will be long
// if you have more than a few props. Only here for illustrative purposes. Don't use this!
//
//      const MyTitle = ({ title, color = 'rebeccapurple' }: { title: string, color?: string }) => {
const MyTitle = ({ title = 'Get Creative!', color = 'red' }: MyPropType) => {
    const style = { color: color };
    return (
        <div>
            <h1 style={style}>
                {title}
            </h1>
            <p>
                {Date()}
            </p>
        </div>
    );
};

export default MyTitle;
