# portfolio

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Tailwind setup

### Add tailwind
yarn add -D tailwindcss

### Add tailwind.config.js
npx tailwind init

```
// tailwind.config.js

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

### Add postcss.config.js
touch postcss.config.js

```
// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
 		require('autoprefixer')(),
  ]
}
```

### Add tailwind.css
src/assets/css/tailwind.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import tailwind.css
```
// main.js

import '@/assets/css/tailwind.css';
```

### Restart server after you make changes in tailwind.css


## Sal setup
yarn add -D sal.js


```
// App.vue

mounted() {
  sal();
}

@import './node_modules/sal.js/dist/sal.css';
```


## Fontawesome setup

```
yarn add -D @fortawesome/fontawesome-svg-core
yarn add -D @fortawesome/free-solid-svg-icons
yarn add -D @fortawesome/free-brands-svg-icons
yarn add -D @fortawesome/vue-fontawesome
```