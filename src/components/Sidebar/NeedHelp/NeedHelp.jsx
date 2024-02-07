import { useState } from 'react';

import {
  ContainerHelp,
  ImgHelp,
  TextHelp,
  IconHelp,
  Span,
  QuestionHelp,
  BtnNeedHelp,
} from './NeedHelp.styled.js';

import ModalNeedHelp from '../../Modals/ModalNeedHelp/ModalNeedHelp.jsx';
import image from 'images/2.png';
import icons from '../../../images/sprite.svg';

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContainerHelp>
      <ImgHelp src={image} alt="Help" />

      <TextHelp>
        If you need help with
        <Span> TaskPro</Span>, check out our
        support resources or reach out to our customer support team.
      </TextHelp>

      <BtnNeedHelp>
        <IconHelp>
          <use href={`${icons}#icon-help`}></use>
        </IconHelp>
        <QuestionHelp onClick={openModal}> Need help? </QuestionHelp>
      </BtnNeedHelp>

      <ModalNeedHelp isOpen={isModalOpen} onClose={closeModal} />
    </ContainerHelp>
  );
};

export default NeedHelp;