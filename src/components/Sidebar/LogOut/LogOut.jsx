import { useDispatch } from 'react-redux';
import icon from '../../../images/logout.svg';
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
        <StyledImg src={icon} alt="logout" />
        <p>Log Out</p>
      </StyledDiv>
    );
};

export default LogOut;