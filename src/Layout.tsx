import * as React from 'react';

interface Props {
    children: any
}

/**
 * Common UI between all layouts
 */
const Layout = (props: Props) => (
    <div className="app-container">
        {props.children}
    </div>
);

export default Layout;
