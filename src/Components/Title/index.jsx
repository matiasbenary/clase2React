import './Title.css';

const Title = (props) => {
  console.log('Title', props);
  return <h2 className="title">{props.text} </h2>;
};

export default Title;
