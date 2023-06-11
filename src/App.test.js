import { render, screen, act} from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event'

describe('test for header', () => {
  test('header renders with correct text', () => {
    render(<App />)
    const headerEl = screen.getByRole("heading")
    expect(headerEl.textContent).toBe("Testing Playground")
  })
})

describe('test for the button', () =>{
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change to green")
  })
})

describe('tests related to checkbox and enabling/disabling button', () => {
  test("checkbox disables button when first clicked, then enables button on second click", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")
  
    userEvent.click(checkbox)
    expect(colorBtn).toBeDisabled()
  
    userEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })

  // Below test is for part 5
  test("if disabled display disabled, if enabled display enabled", () => {
    render(<App />)
    const checkbox = screen.getByRole("checkbox")
    const paragraphEl = screen.getByRole("paragraph")
  
    expect(paragraphEl.textContent).toBe("Button is enabled")
  
    act(() =>{
      userEvent.click(checkbox)
    })
  
    expect(paragraphEl.textContent).toBe("Button is disabled")
  
    act(() => {
      userEvent.click(checkbox)
    })
  
    expect(paragraphEl.textContent).toBe("Button is enabled")
  })
  // End test for part 5
})