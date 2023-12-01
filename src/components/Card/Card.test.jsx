import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from "./Card.jsx"
import UserGear from "../../assets/UserGear.svg"

test('should render a card with an icon, title and description', () => {
  const icon = UserGear
  const title = "Equipe Qualificada"
  const description = "Nossa equipe de especialistas é o segredo por trás do nosso sucesso."

  render(<Card icon={icon} title={title} description={description} />)

  const iconElement = screen.getByAltText("logo")
  expect(iconElement).toBeInTheDocument()

  const titleElement = screen.getByText(title)
  expect(titleElement).toBeInTheDocument()

  const descriptionElement = screen.getByText(description)
  expect(descriptionElement).toBeInTheDocument()
})