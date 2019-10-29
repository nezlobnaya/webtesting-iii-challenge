// Test away!
import React from 'react';
import Display from './Display';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import { fireEvent, act, findByText } from '@testing-library/react'



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
  
    it('displays `Closed` and `Locked` if the `closed` and `locked`props are `true`', () => {
        const { getByText } = rtl.render(<Display closed={true} locked={true}/>)
        expect(getByText('Locked'))
        expect(getByText('Closed'))        
    })
    it('displays `Open` and `Unlocked` if props are false', () => {
        const { getByText } = rtl.render(<Display closed={false} locked={false}/>)
        expect(getByText('Unlocked'))
        expect(getByText('Open')) 
    })

})