import React from 'react';
import Img from './styled-components/Img';
import Popup from './styled-components/Popup';
import { useSelector } from 'react-redux';
import { getModalState } from '../../../redux/slices/modal/modalSlice';

const Image = (props) => {
  const { showPopup } = useSelector(getModalState);

  return (
    <Popup showPopup={showPopup}>
      <div className={'fade-in'}>
        <Img
          src={props.link}
          alt={'house'}
          style={{ maxHeight: props.height <= 500 && '100vh' }}
        />
      </div>
    </Popup>
  );
};

export default Image;
