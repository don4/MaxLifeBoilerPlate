/**
 *
 * Productivity
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductivity from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Productivity() {
  useInjectReducer({ key: 'productivity', reducer });
  useInjectSaga({ key: 'productivity', saga });

  return (
    <div>
      <Helmet>
        <title>Productivity</title>
        <meta name="description" content="Description of Productivity" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Productivity.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productivity: makeSelectProductivity(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Productivity);
