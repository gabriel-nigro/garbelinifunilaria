import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Features from './Features.jsx';

test('should render a features component', () => {
    const features = render(<Features />)
    
    const featuresElement = features.container.querySelector('#features')
    expect(featuresElement).toBeInTheDocument()
})