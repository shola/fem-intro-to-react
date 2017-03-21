import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import Header from '../src/Header';

describe('Header View', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<Header />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
