import { useState } from 'react';
import { User } from './Header/User/User';
import { UserInfoModal } from './Header/UserInfoModal/UserInfoModal';
import  Header  from './Header/Header';

const UserModalTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
      <div>
          <Header/>
      <button onClick={handleOpenModal}>
        <User />
      </button>
      {isModalOpen && <UserInfoModal onClose={handleCloseModal} />}
    </div>
  );
};
 
export default UserModalTest 