// Test away!
import React from 'react';
import Display from './Display';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

afterEach(rtl.cleanup)

test('should match the snapshot', () => {
    const tree = renderer.create(<Display />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('a gate should default to `unlocked` and `open`', () => {
    const tree = renderer.create(<Display closed={false} locked={false}/>).toJSON()
    expect(tree).toMatchSnapshot()
})