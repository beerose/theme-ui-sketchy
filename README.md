![npm bundle size](https://img.shields.io/bundlephobia/min/theme-ui-sketchy-preset) ![npm](https://img.shields.io/npm/v/theme-ui-sketchy-preset)

# Theme UI Sketchy Preset

<p align="center">
<img width="500" alt="Screenshot 2020-04-28 at 21 13 52" src="https://user-images.githubusercontent.com/9019397/81507987-6fe8ce80-9301-11ea-8943-d385e5b9e5f9.png">
<p>

For detailed specification check out [the demo page](https://themeui-sketchy.netlify.app/).

Or try it out in [CodeSandbox](https://codesandbox.io/s/sketchy-theme-ui-demo-6mywo?file=/src/App.js).

## 💥 Installation

```sh
npm i theme-ui-sketchy-preset # yarn add theme-ui-sketchy-preset
```

## 🙇‍♀️ Usage

This library exports the theme object complaiant with [Theme UI theme specification](https://styled-system.com/theme-specification/) that can be passed to your theme provider.

```tsx
import { ThemeProvider } from "theme-ui"
import sketchy from "theme-ui-sketchy-preset"

const App = props => (
  <ThemeProvider theme={sketchy}>{props.children}</ThemeProvider>
)
```

It can be also extended or modified:

```ts
import sketchy from "theme-ui-sketchy-preset"

const myTheme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
}
```

This preset uses _Architects Daughter_ font, so you need to copy this code into the `<head>` of your HTML document:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Architects+Daughter"
/>
```

## 🚀 Development quick start

1.  **Clone the repository**

    ```sh
    git clone git@github.com:beerose/theme-ui-sketchy.git
    ```

1.  **Install dependencies and start the project**

    ```sh
    cd theme-ui-sketchy
    yarn
    yarn start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`LICENSE`**: Project's license.

7.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8.  **`README.md`**: A text file containing useful reference information about your project.
