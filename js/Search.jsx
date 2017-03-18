import React from 'react';
import shows from '../public/data';

export default function Search() {
    return (
        <pre>
            <code>
                {JSON.stringify(shows, null, 4)}
            </code>
        </pre>
    );
}
