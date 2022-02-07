# [THIMBLE](https://powerful-crag-58139.herokuapp.com/)

Click title above to go to page.

dev branch forked 7 Feb 2022

## Change Log

### 7 Feb 2022

- Changed `README.md` file to record changes.
- Installed express.js as a dependency and nodemon as a dev-dependency.
- Added dev start script to `package.json`
- Added `server.js` file to root directory.
- Encountered bug during build. Solved with recommended solution from Stack Overflow (https://stackoverflow.com/questions/70715794/typeerror-minicssextractplugin-is-not-a-constructor/70716720)

Fix for local development...

```javascript
// /node_modules/react-scripts/config/webpack.config.js
// add .default to end

const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
```

Fix for deployment and automatic build...

```json

"dependencies": {
    "mini-css-extract-plugin": "2.4.5",
  },
```

- Added node version to `package.json`

```json
"engines":{
  "node": "16.13.0"
}
```

- Removed default React comments from `index.html`
- Change title element to 'Thimble' in `index.html`
- Commented out code to clear linter warnings in `src/routes/Keyboard/components/WholeKey/index.tsx`
- Successfully deployed with Heroku https://powerful-crag-58139.herokuapp.com/
