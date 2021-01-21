import React from 'react';
import CloseButton from './CloseButton';
import ShareModalHeader from './ShareModalHeader';
import ShareModalContainer from '../styled-components/ShareModalContainer';
import ShareModalLinkContainer from '../styled-components/ShareModalLinkContainer';
import ShareModalLink from './ShareModalLink';
import Links from '../Links';

const ShareModalContent = (props) => (
	<ShareModalContainer
		width={props.width}
		onClick={(e) => e.stopPropagation()}
	>
		<CloseButton />
		<ShareModalHeader width={props.width} />
		<ShareModalLinkContainer width={props.width}>
			{Links.map((link, i) => (
				<ShareModalLink key={i} link={link} />
			))}
		</ShareModalLinkContainer>
	</ShareModalContainer>
);

export default ShareModalContent;