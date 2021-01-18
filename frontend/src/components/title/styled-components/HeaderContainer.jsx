import styled from 'styled-components';
import { Flex } from '../../photos/styles';

export default styled(Flex)`
  grid-row: 2 / 2;
  padding: ${(props) => (props.width > 1128 ? '0px 80px' : '0px 40px')};
`;
