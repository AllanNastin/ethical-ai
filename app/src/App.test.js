jest.mock('react-vis-network-graph', () => ({
  // Your mock implementation here
}));

import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});