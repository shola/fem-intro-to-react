import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import Details from '../src/Details';

xdescribe('TODO: Details View', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<Details />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
