import * as React from 'react';

interface Props {
    title: string,
    color?: string
}

function MyTitle(props: Props) {
    const { title, color = 'red' } = props;
    const style = { color: color };

    return (
        <h1 className="title" style={style}>
            {title}
        </h1>
    );
}

export default MyTitle;
