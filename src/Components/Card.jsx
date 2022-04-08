import style from './Card.module.css';

export const suma = (a, b) => a + b;

export const Titulo = () => {
  return <h2 className="title">Soy un titulo</h2>;
};

const Card = () => {
  const suma = 15 + 12;
  return (
    <div>
      <Titulo></Titulo>
      <h3 className={style.titulo}>Hola Matias, tengo {suma}</h3>
    </div>
  );
};

export default Card;
