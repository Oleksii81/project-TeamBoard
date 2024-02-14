import { useSelector } from "react-redux";
import { getColumn } from "../../../redux/task/taskSelectors";
import { CardContainer } from "./CardList.styled";
// import tasks from 'components/ScreensPage/Card/CardsObj.json';

const CardList = ({ filterByPriority }) => {
  const columns = useSelector(getColumn);
  
  return (
    <CardContainer>
      <ul>
        {columns.map(el =>
          el?.tasks.length === 0
          ? 'Tasks list is empty'
          : el?.tasks
              .filter(task => task.priority===filterByPriority)
              .map(task => (
                <li key={task._id}>
                  <p>{task.title}</p>
                </li>
              )))}
      </ul>
    </CardContainer>
  );
};

export default CardList;