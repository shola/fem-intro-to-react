import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import Search from '../src/Search';
import { store, rootReducer } from '../src/Store';

import ShowCard from '../src/ShowCard';
import data from '../public/data.js';

describe('Store', () => {
    it('should bootstrap', () => {
        const state = rootReducer(undefined, { type: '@@redux/INIT' });
        expect(state).toEqual({ searchTerm: '' });
    });
    it('should handle searchTerm actions', () => {
        const state = rootReducer(
            { searchTerm: 'some random string' },
            { type: 'setSearchTerm', value: 'correct string' }
        );
        expect(state).toEqual({ searchTerm: 'correct string' });
    });
});
