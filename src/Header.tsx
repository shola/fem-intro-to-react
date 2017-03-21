import * as React from 'react';
import { Link } from 'react-router';
// const { Link } = ReactRouter;

interface SearchEventHandler {
    (e: any): void
}

interface HeaderProps {
    searchTerm?: string,
    handleSearchTermEvent?: SearchEventHandler,
    showSearch?: boolean
}
export default class Header extends React.Component<HeaderProps, {}> {
    render() {
        let utilSpace;
        if (this.props.showSearch) {
            utilSpace = (
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={this.props.searchTerm}
                    onChange={this.props.handleSearchTermEvent}
                />
            );
        } else {
            utilSpace = (
                <h2 className="header-back">
                    <Link to="/search">
                        Back
                    </Link>
                </h2>
            );
        }
        return (
            <header className="header">
                <h1 className="brand">
                    <Link to="/" className="brand-link">
                        svideo
                    </Link>
                </h1>
                {utilSpace}
            </header>
        );
    }
}
