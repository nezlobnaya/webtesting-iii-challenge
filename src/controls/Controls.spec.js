// Test away!
import React from 'react';
import Controls from './Controls';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

afterEach(rtl.cleanup)

test('should match the snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON()
    expect(tree).toMatchSnapshot()
})