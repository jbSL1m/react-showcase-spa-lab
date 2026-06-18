import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('React Showcase SPA Lab', () => {
  it('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/Coffee R Us/i)).toBeInTheDocument()
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument()
    expect(screen.getByText(/Admin/i)).toBeInTheDocument()
  })
})
