import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render
    const { container } = render(<Main />)

    // search element and verify it
    expect(
      screen.getByRole('heading', { name: /boilerplate phoenix/i })
    ).toBeInTheDocument()

    // generate a container
    expect(container.firstChild).toMatchSnapshot()
  })
})
