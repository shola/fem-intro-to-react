import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import Search from '../src/Search';

import ShowCard from '../src/ShowCard';
import data from '../public/data.js';

describe('Search Page', () => {
    it('should be the same as the last snapshot', () => {
        const component = Renderer.create(<Search />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render all show cards when the search term is empty', () => {
        // this test may not be needed since snapshots check the number of children...
        const component = Renderer.create(<Search />);
        const tree = component.toJSON();
        const header = tree.children[0];
        const shows = tree.children[1];

        expect(shows.children.length).toBe(data.shows.length);
    });

    it('should filter show cards based on search term (case insensitive)', () => {
        const component = Renderer.create(<Search />);
        let tree = component.toJSON();
        let shows = tree.children[1];
        const header = tree.children[0];
        const searchInput = header.children[1];

        // Manually trigger callback with new state
        searchInput.props.onChange({ target: { value: 'House of Cards' } });
        // Re-render
        tree = component.toJSON();
        shows = tree.children[1];
        expect(tree).toMatchSnapshot();
        expect(shows.children.length).toBe(1);

        // Manually trigger callback with new state
        searchInput.props.onChange({ target: { value: 'house OF caRDS' } });
        // Re-render
        tree = component.toJSON();
        shows = tree.children[1];
        expect(tree).toMatchSnapshot();
        expect(shows.children.length).toBe(1);

        // Manually trigger callback with new state
        searchInput.props.onChange({ target: { value: 'House' } });
        // Re-render
        tree = component.toJSON();
        shows = tree.children[1];
        expect(tree).toMatchSnapshot();
        expect(shows.children.length).toBe(2);
    });
});
