// @flow
import React, { Component, PropTypes } from 'react';

// TODO: Read: "https://flowtype.org/blog/2015/02/18/Typecasts.html"
type Props = {
    title: string, // required prop and required value
    color?: ?string // optional prop and optional value
};

export default function MyTitle(props: Props) {
    const { title, color = 'red' } = props;
    const style = { color: color };

    return (
        <h1 style={style}>
            {title}
        </h1>
    );
}
