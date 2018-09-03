import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactUpload from 'react-upload';
import NxFileUpload from 'next-file-upload';


const SA_API = '/sa_api/upload/image?https=true';
const PICTURE_RE = /"(.*?)"/;
const FILETYPE_RE = /(\w+)$/;
const PICTURE_ID_RE = /\/(\w+?)\.\w+$/;

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    const apis = nx.map(value, (_, file) => {
      return NxFileUpload(SA_API, { file: file });
    });

    Promise.all(apis).then(reponses => {
      const _response = reponses.map(response => {
        const url = response.match(PICTURE_RE)[1];
        const type = url.match(FILETYPE_RE)[0];
        const pid = url.match(PICTURE_ID_RE)[1];
        return { url, type, pid };
      });
      onChange({ target: { value: _response } });
    });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <ReactUpload onChange={this._onChange} {...props} />
    );
  }
}
