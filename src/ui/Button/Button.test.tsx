import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render', () => {
    render(<Button />)
  })
})
