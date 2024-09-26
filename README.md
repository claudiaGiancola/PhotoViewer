# Photo Viewer

Building a Photo Viewer App displaying a selection of thumbnail images and a single full larger image.
Clicking on any of the thumbnails changes what is displayed in the larger image.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Development

React:
- Declarative Programming
- props
- hooks

Steps:
- Building the "PhotoViewer.tsx" component for displaying the large selected image at the top of the page + edit "App.tsx" to include the new component
- Add a prop to the "PhotoViewers.tsx" component so that it shows what we pass it in the "App.tsx"
- Create the "ImageSelector.tsx" component. It displays the thumbnail gallery and has a "useState" hook that holds the URL of the currently selected image.
- Add an "onClick" event handler that updates the state when you click on a thumbnail
- Change the appearance of the selected thumbnail by adding a new class to the selected thumbnail that makes a border appear around the selected thumbnail
- "Lift state up" into App.tsx so that PhotoViewer.tsx and ImageSelector.tsx can communicate and share data
- Add automated testing with Jest > use `npm run test`

Future testing implementations:
- A "Regression / Snapshot" test to confirm that the "PhotoViewer" component doesn’t accidentally change in the future.
- A "Component Test" to confirm that when I click a thumbnail, then the thumbnail becomes selected and the ImageViewer updates with the new image.