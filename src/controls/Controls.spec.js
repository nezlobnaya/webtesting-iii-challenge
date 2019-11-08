// Test away!
import React from 'react';
import Controls from './Controls';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import { fireEvent, getByRole } from '@testing-library/react'

afterEach(rtl.cleanup)

test('should match the snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it provides buttons to toggle the closed and locked states', () => {
    const { queryAllByRole, getByText, getNodeText } = rtl.render(<Controls />);
    const buttonArray = queryAllByRole('button')
    getByText('Lock Gate')
    expect(rtl.getNodeText(buttonArray[0])).toBe('Lock Gate')
    expect(buttonArray.length).toBe(2)
});

test('buttons text changes to reflect the state the door will be in if clicked', async () => {
    const wrapper = rtl.render(<Controls />)
    await wrapper.findByText(/close/i)
    const button = wrapper.getByText(/close/i)
    rtl.act(() => {
        fireEvent.click(button)
    })
    wrapper.findByText(/open gate/i)
})

test('buttons text changes to reflect the state the door will be in if clicked', async () => {
    const wrapper = rtl.render(<Controls />)
    await wrapper.findByText(/lock/i)
    const button = wrapper.getByText(/lock/i)
    rtl.act(() => {
        fireEvent.click(button)
    })
    wrapper.findByText(/unlock/i)
})
    

test('the closed toggle button is disabled if the gate is locked', () => {
    const {container} = rtl.render(<Controls locked={true}/>)
    const buttonProps = container.querySelector('button')
    expect(buttonProps.disabled).toBeTruthy();
});

test('the locked toggle button is disabled if the gate is open', () => {
    const {container} = rtl.render(<Controls closed={false}/>)
    const buttonProps = container.querySelector('button')
    expect(buttonProps).toBeDisabled();
});