
import React from 'react';
import PropTypes from 'prop-types';
import EMAILS from './emails';
import Email from './email';
import Utils from './utils';

class Mailbox extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // const a = props.match;
  //   // const b = props.match.params;
  //   // const c = props.match.params.mailbox_name;
  //   // this.state = { type: props.match.params.mailbox_name };
  // }

  render() {
    const type = this.props.match.params.mailbox_name;
    const emails = Object.keys(EMAILS[type]).map((id) => {
      const item = EMAILS[type][id];
      return (
        <li key={Utils.createId()}>
          <Email
            id={item.id}
            from={item.from}
            to={item.to}
            title={item.title}
            content={item.content}
          />
        </li>
      );
    });
    return (
      <div>
        <h2>Mailbox header - {type}</h2>
        <ul>
          {emails}
        </ul>
      </div>
    );
  }
}

Mailbox.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      mailbox_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Mailbox;
