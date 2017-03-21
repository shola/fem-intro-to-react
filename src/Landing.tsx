import * as React from 'react';
import { Link, hashHistory } from 'react-router';
import MyTitle from './MyTitle';
import { connector } from './Store';

interface SearchEventHandler {
    (e: any): void
}

interface LandingProps {
    searchTerm?: string,
    setSearchTerm?: SearchEventHandler
}

class Landing extends React.Component<LandingProps, {}> {
    constructor(props: any) {
        super(props);
        this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
        this.gotoSearch = this.gotoSearch.bind(this);
    }
    handleSearchTermEvent(e: any) {
        this.props.setSearchTerm(e.target.value);
    }
    gotoSearch(e: any) {
        e.preventDefault();
        hashHistory.push('search');
    }
    render() {
        return (
            <div className="home-info">
                <MyTitle title="Welcome to my App!" />
                <form onSubmit={this.gotoSearch}>
                    <input
                        className="search"
                        type="text"
                        value={this.props.searchTerm}
                        onChange={this.handleSearchTermEvent}
                        placeholder="search"
                    />
                </form>
                <Link to="/search" className="browse-all"> or Browse All</Link>
            </div>
        );
    }
}

// connector enables sending props down to every component that connects to the store.
// but the connector does not allow the component to change the store directly, an action
// must be dispatched.
export default connector(Landing);
