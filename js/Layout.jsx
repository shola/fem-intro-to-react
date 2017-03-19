// @flow
import React from 'react';

type Props = {
    children: React.Element<any>
};

/**
 * Common UI between all layouts
 */
const Layout = (props: Props) => (
    <div className="app-container">
        {props.children}
    </div>
);

export default Layout;
