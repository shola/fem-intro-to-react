// @flow
//
import React, { Component, PropTypes } from 'react';

type Props = {
    title: string, // required prop and required value
    color?: ?string // optional prop and optional value
};

function MyTitle(props: Props): React.Element<any> {
    const { title, color = 'red' } = props;
    const style = { color: color };

    return (
        <h1 className="title" style={style}>
            {title}
        </h1>
    );
}

export default MyTitle;
