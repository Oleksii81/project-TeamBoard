import { useSelector } from 'react-redux';
import { getUserData } from '../../../redux/auth/authSelectors';
import userFoto from 'assets/img/userWhite.png';
import {
  StyledBtnProfile,
  StyledImgProfile,
  StyledProfileName,
} from './User.styled';

export const User = ({ handleOpenModal }) => {
  const { name, avatarURL } = useSelector(getUserData);
const editString = name => {
    if (name) {
      const arrFromStr = name.split(' ');
      const res = arrFromStr.map(el => el && el[0].toUpperCase() + el.slice(1));

      return res.join(' ');
    }
  };
  return (
    <>
      <StyledBtnProfile onClick={handleOpenModal}>
        {(avatarURL && <StyledImgProfile src={avatarURL} alt="Foto" />) || (
          <StyledImgProfile src={userFoto} alt="Default Foto" />
        )}

        <StyledProfileName>{editString(name)}</StyledProfileName>
      </StyledBtnProfile>
    </>
  );
};
