import { useDispatch } from 'react-redux';
import icons from '../../../images/sprite.svg';
import { StyledDiv, StyledImg } from './StyledLogOut';
import { logout } from '../../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';


const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onLogOut = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
      <StyledDiv onClick={onLogOut}>
        <StyledImg >
          <svg width="32" height="32">
            <use href={`${icons}#icon-logout`}></use>
          </svg>
        </StyledImg>
        <p>Log Out</p>
      </StyledDiv>
    );
};

export default LogOut;