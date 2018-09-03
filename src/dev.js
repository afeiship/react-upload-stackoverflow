import './dev.scss';
import ReactUploadStackoverflow from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
