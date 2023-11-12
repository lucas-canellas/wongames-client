import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    const { container } = render(<Main />)
    // busca o elemento e verifica se ele existe
    expect(
      screen.getByRole('heading', { name: /Boilerplate NextJs Apps Router/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)

    //verifica se o background esta correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
