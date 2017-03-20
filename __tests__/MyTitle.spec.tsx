import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import MyTitle from '../src/MyTitle';

describe('MyTitle View', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<MyTitle />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
