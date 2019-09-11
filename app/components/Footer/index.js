import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FooterLink to="/">
          <FormattedMessage {...messages.home} />
        </FooterLink>
        <FooterLink to="/productivity">
          <FormattedMessage {...messages.productivity} />
        </FooterLink>
      </section>
    </Wrapper>
  );
}

export default Footer;
