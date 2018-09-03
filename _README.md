# react-upload-stackoverflow
> React upload for stackoverflow

## proxy:
```js
app.use(
  '/sa_api',
  proxy({
    target: 'https://stackoverflow.com',
    changeOrigin: true,
    pathRewrite: { '^/sa_api/': '/' }
  })
);
```


## properties:
```javascript
BACKUP_PROPERTIES
```

## install && import:
```bash
npm install --save afeiship/react-upload-stackoverflow --registry=https://registry.npm.taobao.org
```

```js
import ReactUploadStackoverflow from 'react-upload-stackoverflow';
```

```scss
// customize your styles:
$react-upload-stackoverflow-options:(
);

@import 'node_modules/react-upload-stackoverflow/dist/style.scss';
```


## usage:
```jsx
BACKUP_USAGE
```
