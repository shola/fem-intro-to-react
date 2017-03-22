import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import Layout from '../src/Layout';

xdescribe('Reusable layout component', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<Layout />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
