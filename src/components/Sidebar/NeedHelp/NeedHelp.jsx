import { useState } from 'react';

import {
  ContainerHelp,
  ImgHelp,
  TextHelp,
  IconHelp,
  Span,
  QuestionHelp,
  BtnNeedHelp,
  ContainerText,
} from './NeedHelp.styled.js';

import ModalNeedHelp from '../../Modals/ModalNeedHelp/ModalNeedHelp.jsx';
import image from 'images/need-help.png';
import icons from '../../../images/sprite.svg';

const NeedHelp = ({onCloseSideBar}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverText, setHoverText] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
     const currentWidth = window.innerWidth;


  if (currentWidth <= 1439) {
    openModal();
    onCloseSideBar();
    
  } else {
    openModal();
    console.log("click")
  }

  }

  return (
    <ContainerHelp>

    <ContainerText isVisible={hoverText}>
      <ImgHelp src={image} alt="Help" />

      <TextHelp>
        If you need help with
        <Span> TaskPro</Span>, check out our
        support resources or reach out to our customer support team.
      </TextHelp>
       </ContainerText>

      <BtnNeedHelp onMouseEnter={() => setHoverText(true)} onMouseLeave={() => setHoverText(false)}>
        <IconHelp>
          <use href={`${icons}#icon-help`}></use>
        </IconHelp>
        <QuestionHelp onClick={handleButtonClick}> Need help? </QuestionHelp>
      </BtnNeedHelp>

      <ModalNeedHelp isOpen={isModalOpen} onClose={closeModal} />
    </ContainerHelp>
  );
};

export default NeedHelp;