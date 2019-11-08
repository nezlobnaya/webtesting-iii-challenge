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
    it('when locked or closed use the red-led class', () => {
        const {container} = rtl.render(<Display locked={true} closed={true} />)
        const item = container.querySelector('.red-led');
        expect(item).toBeTruthy();
    });
    it('when unlocked or open use the green-led class', () => {
        const {container} = rtl.render(<Display locked={false} closed={false} />)
        const item = container.querySelector('.green-led');
        expect(item).toBeTruthy();
    });
})