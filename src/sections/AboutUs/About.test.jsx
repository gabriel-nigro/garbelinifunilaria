import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs.jsx';

test('should render a about us component', () => {
   const aboutUs = render(<AboutUs />)
    
    const aboutElement = aboutUs.container.querySelector('#about-us')
    expect(aboutElement).toBeInTheDocument()
})