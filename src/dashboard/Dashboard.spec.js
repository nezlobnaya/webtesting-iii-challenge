// Test away
import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

afterEach(rtl.cleanup)

describe('<Dashboard />', () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
