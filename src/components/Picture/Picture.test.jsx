import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Picture from './Picture.jsx';
import CarRepairSmallPng from "../../assets/carRepairSmall.png";
import CarRepairSmallWebp from "../../assets/carRepairSmall.webp";


test('should render a picture with a src and fallback', () => {
  const src = CarRepairSmallWebp
  const fallback = CarRepairSmallPng
  const alt = "car-repair"

  render(<Picture src={src} fallback={fallback} alt={alt} />)

  const pictureElement = screen.getByRole('img', { name: alt })
  expect(pictureElement).toBeInTheDocument()
  expect(pictureElement).toHaveAttribute('src', fallback)
  expect(pictureElement).toHaveAttribute('alt', alt)
})