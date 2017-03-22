import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import ShowCard from '../src/ShowCard';

xdescribe('ShowCard View', () => {
    it('Check snapshot for unexpected changes', () => {
        const component = Renderer.create(<ShowCard />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
