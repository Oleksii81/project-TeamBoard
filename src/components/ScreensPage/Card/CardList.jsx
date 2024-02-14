import { useSelector } from "react-redux";
import { getColumn } from "../../../redux/task/taskSelectors";
import { CardContainer } from "./CardList.styled";
import Card from "./Card";

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
                  <Card key={task._id} task ={task} columnID={el._id} />
                </li>
              )))}
      </ul>
    </CardContainer>
  );
};

export default CardList;