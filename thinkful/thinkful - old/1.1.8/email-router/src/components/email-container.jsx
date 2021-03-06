
import React from 'react';
import PropTypes from 'prop-types';

import EMAILS from '../emails';
import EmailDetailed from './email-detailed';

function EmailContainer(props) {
  const type = props.match.params.mailbox_name;
  const item = EMAILS[type][props.match.params.id];
  return (<EmailDetailed
    type={type}
    id={item.id}
    from={item.from}
    to={item.to}
    title={item.title}
    content={item.content}
  />);
}

EmailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      mailbox_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EmailContainer;
