import Button from '../Button';
import Detail from '../Detail';
import Link from '../Link';
import Title from '../Title';
import './Card.css';

const Card = (props) => {
  console.log('Card', props);
  return (
    <div className={`card ${props.isImportant ? 'card--important' : ''}`}>
      <Title text={props.title}></Title>
      <Detail text={props.detail} />
      <div className="card__footer">
        <Button like={props.like}></Button>
        <Link redirect={props.redirectTo}></Link>
      </div>
    </div>
  );
};

export default Card;
