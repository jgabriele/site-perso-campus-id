import React from 'react'
import WorkPage from '.'
import { render, fireEvent } from '@testing-library/react'

describe('WorkPage Component', () => {
  it('renders something', () => {
    const { getByText } = render(<WorkPage />)

    getByText('Pokedex')
  })
  it('filters elements when typing something in the input', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<WorkPage />)

    getByText('Pokedex')

    fireEvent.change(
      getByPlaceholderText('Rechercher un projet'),
      {
        target: {
          value: 'Sit'
        }
      }
    )

    expect(queryByText('Pokedex')).toBeNull()
    getByText('Site Perso')
  })
})