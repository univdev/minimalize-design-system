# Minimalize Design System

The Minimalize Design System is a minimal React-based design system created as a technical assignment for a job application. It is inspired by the Material-UI (MUI) design system and aims to provide a simple, yet effective set of components and tools for building user interfaces.

## Table of Contents

- [Minimalize Design System](#minimalize-design-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
    - [Core Dependencies](#core-dependencies)
    - [Dev Dependencies](#dev-dependencies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Minimal and lightweight design system
- Built with React and Emotion for styling
- Storybook integration for easy component development and documentation
- ESLint and Prettier for code quality and consistency
- Inspired by Material-UI (MUI)

## Usage

To use the components from the Minimalize Design System, import them into your project:

```jsx
import { Button } from 'minimalize-design-system';

const App = () => (
  <div>
    <Button>Click Me</Button>
  </div>
);

export default App;
```

## Scripts

The following scripts are available in the project:

- `lint`: Runs ESLint to lint the codebase.
- `storybook`: Starts the Storybook development server on port 6006.
- `build-storybook`: Builds the Storybook static site.

You can run these scripts using pnpm:

```sh
pnpm run lint
pnpm run storybook
pnpm run build-storybook
```

## Dependencies

The Minimalize Design System has the following core dependencies and peer dependencies:

### Core Dependencies

- @emotion/react
- @emotion/styled
- react
- react-dom
- clsx
- normalize.css

### Dev Dependencies

- @storybook/react
- eslint
- prettier
- husky
- lint-staged

## Contributing

We welcome contributions to the Minimalize Design System. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure that your code adheres to the established coding standards and includes appropriate tests.

## License

The Minimalize Design System is licensed under the ISC License. You may use this library for both commercial and non-commercial purposes. However, the library itself cannot be used for commercial purposes on its own.

---

**Author**: [univdev](mailto:pcydeveloper@gmail.com)