// Test away!
import React from 'react';
import Display from './Display';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import { fireEvent, act } from '@testing-library/react'


afterEach(rtl.cleanup)

test('should match the snapshot', () => {
    const tree = renderer.create(<Display />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('a gate should default to `unlocked` and `open`', () => {
    const tree = renderer.create(<Display closed={false} locked={false}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

describe('Display component', () => {
    it('displays if gate is open/closed and if it is locked/unlocked', async () => {
        const { getByText, findByText } = rtl.render(<Display />)
        // getByText(/open/i && /unlocked/i)
        act(() => {
            fireEvent.click(getByText(/open/i))
        })
        findByText(/closed/i)
        act(() => {
            fireEvent.click(getByText(/unlocked/i))
        })
        findByText(/locked/i)
    })
})