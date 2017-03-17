// @flow
import React from 'react';
import ReactDOM from 'react-dom';

// Adding a type definition allows concise type annotation
type MyTitleProps = {
    color: string,
    title: string
};

// TODO: destructure "props"
const MyTitle = (props: MyTitleProps) => {
    const style = { color: props.color };
    return (
        <div>
            <h1 style={style}>
                {props.title}
            </h1>
            <p>
                {Date()}
            </p>
        </div>
    );
};

export default MyTitle;
