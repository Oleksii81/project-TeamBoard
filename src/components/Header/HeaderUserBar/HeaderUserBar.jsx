import { useState } from 'react';
import { User } from '../User/User';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

const HeaderUserBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <User handleOpenModal={handleOpenModal} />

      {isModalOpen && <UserInfoModal onClose={handleCloseModal} />}
    </div>
  );
};

export default HeaderUserBar;
