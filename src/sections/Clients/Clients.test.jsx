import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Clients from './Clients.jsx';

test('should render a clients component', () => {
   const clients = render(<Clients />)
    
    const clientsElement = clients.container.querySelector('#clients')
    expect(clientsElement).toBeInTheDocument()
})