import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Cleanup DOM after each test to avoid state leak across tests.
afterEach(() => {
  cleanup()
})
