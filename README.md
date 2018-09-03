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

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  
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

// install: npm install afeiship/react-upload-stackoverflow --save
// import : import ReactUploadStackoverflow from 'react-upload-stackoverflow'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = inEvent =>{
    const { value } = inEvent.target;
    console.log(value);
  };

  render(){
    return (
      <div className="hello-react-upload-stackoverflow">
        <ReactUploadStackoverflow onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
