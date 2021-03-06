import * as React from 'react';
import { Link } from 'react-router';
import { connector } from './Store';
// const { Link } = ReactRouter;

interface SearchEventHandler {
    (e: any): void
}

interface HeaderProps {
    searchTerm?: string,
    showSearch?: boolean,
    setSearchTerm?: SearchEventHandler
}

class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props);
        this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
    }
    handleSearchTermEvent(e: any) {
        this.props.setSearchTerm(e.target.value);
    }
    render() {
        let utilSpace;
        if (this.props.showSearch) {
            utilSpace = (
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={this.props.searchTerm}
                    onChange={this.handleSearchTermEvent}
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

export default connector(Header);
