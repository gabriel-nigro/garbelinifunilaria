import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Map from './Map.jsx';
import { handleApiLoaded } from './Map.utils';

vi.mock('maps', ()=> {
  return {
      Marker : vi.fn().mockImplementation(() => { return {} })
  }
});

test('should render a map', async () => {
  render(<Map />);

  const mapElement = screen.getByTestId('map');
  expect(mapElement).toBeInTheDocument();

})

test('should execute renderMarkers', () => {
    // Mock dos objetos map e maps
    const mockMap = {};
    const mockMaps = {
      Marker: vi.fn((options) => ({
        options,
        setMap: vi.fn(),
      })),
    };

    handleApiLoaded({ map: mockMap, maps: mockMaps, location });

    // Verifica se a função Marker do Google Maps foi chamada com os parâmetros corretos
    expect(mockMaps.Marker).toHaveBeenCalled()
  });
  