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
    it('shows the display and controls', () => {
        const { getByText } = rtl.render(<Dashboard />);
        getByText(/unlocked/i)
        getByText(/open/i)
        getByText(/lock gate/i)
        getByText(/close gate/i)
        });   
     it('closes the door', async () => {
         const wrapper = rtl.render(<Dashboard />)
         await wrapper.findByText(/open/i)
         const close = wrapper.getByText(/close/i)
         rtl.act(() => {
             rtl.fireEvent.click(close)
         })
         await wrapper.findByText(/closed/i)
     })   
    
})

