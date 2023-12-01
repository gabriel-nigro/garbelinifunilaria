import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Home from './Home.jsx';

// Utils 
import { onClick } from "./Home.utils";

window.open = vi.fn();

test('should render a home component', () => {
    const onClick = vi.fn()
    const home = render(<Home onClick={onClick}/>)
    
    const homeElement = home.container.querySelector('#home')
    expect(homeElement).toBeInTheDocument()
})

test('deve chamar window.open com os parâmetros corretos', () => {
    onClick(); // Chama a função onClick

    // Verifica se window.open foi chamado
    expect(global.open).toHaveBeenCalledWith(
      'https://api.whatsapp.com/send?phone=551120212289&text=Ol%C3%A1!%0AGostaria%20de%20realizar%20um%20or%C3%A7amento%20:)',
      '_blank',
      'noopener,noreferrer',
    );

    window.open.mockClear(); // Limpa o mock
  });
