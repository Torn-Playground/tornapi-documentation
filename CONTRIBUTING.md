# Contribution Guidelines

## How to Contribute

### Prerequisites

If you want to implement a change that has already been declineD, or is generally not
needed, [opening an issue](https://github.com/Torn-Playground/tornapi-documentation/issues) and describing the problem
you would like to solve will get clarity on it and avoid time loss.

### Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js 13 Beta](https://beta.nextjs.org/docs)
  - [app directory](https://beta.nextjs.org/docs/routing/fundamentals)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Floating UI](https://floating-ui.com/)

#### Developer Tools

- [BiomeJS](https://biomejs.dev)

### Setup you environment

- Fork the [tornapi-documentation repository](https://github.com/Torn-Playground/tornapi-documentation) to your own
  account and then clone it to your local device.
- Install the required dependencies using `npm ci`

### Run the project

Run the following command to run the project in development mode: `npm run dev`

### Making changes

Before making any changes, make sure you create a new branch: `git checkout -b your-branch-name`

When you're done making changes, commit them and push them to your fork:

```bash
git add .
git commit -m "your commit message"
git push
```

Then, [create a pull request](https://github.com/Torn-Playground/tornapi-documentation/pulls) from your fork to
the `main` branch of this repository.

## Code Style Guidelines

In order to maintain consistent and readable code, this project adheres to certain code style guidelines. Please follow
these guidelines when contributing to the project.

### Linting & Formatting

This project uses [BiomeJS](https://biomejs.dev) to format the code and as linter. It's recommended to configure your preferred development tool in a way
that it displays linting warnings.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
