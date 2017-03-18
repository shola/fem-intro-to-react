// @flow
import React from 'react';
import ReactDOM from 'react-dom';

type MyPropType = {
    title: string,
    color: string
};
const MyTitle = (
    {
        title = 'Get Creative!',
        color = 'rebeccapurple'
    }: MyPropType
) => {
    const style = { color: color };
    return (
        <h1 style={style}>
            {title}
        </h1>
    );
};

export default MyTitle;
