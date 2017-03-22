import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import Landing from '../src/Landing';

xdescribe('Landing Page', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<Landing />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
