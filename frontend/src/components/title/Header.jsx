import React from 'react';
import Icons from './Icons';
import Details from './details/Details';
import Left from './styled-components/Left';
import Right from './styled-components/Right';
import HeaderFlex from './styled-components/HeaderFlex';
import HeaderContainer from './styled-components/HeaderContainer';

const Header = (props) => (
  <HeaderContainer width={props.width}>
    <HeaderFlex>
      <Left>
        <Details />
      </Left>
      <Right>
        <Icons />
      </Right>
    </HeaderFlex>
  </HeaderContainer>
);

export default Header;