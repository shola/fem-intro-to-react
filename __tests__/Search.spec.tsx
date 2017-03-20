import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import Search from '../src/Search';

describe('Search Page', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<Search />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
