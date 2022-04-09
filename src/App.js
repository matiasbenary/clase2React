import Card from './Components/Card';

const App = () => {
  return (
    <div>
      <Card
        title="Novedades"
        detail="HOla Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        reprehenderit id necessitatibus mollitia libero, repellendus aliquam
        facere, illum expedita obcaecati tempora autem? A aliquid tempora
        blanditiis sequi commodi deserunt eveniet voluptate, id delectus
        laudantium nobis necessitatibus, mollitia impedit est earum veritatis quia
        beatae repellat optio quas accusamus nesciunt ipsam autem?"
        redirectTo="https://www.google.com.ar/"
        like={500}
      ></Card>
      <Card
        title="Prioridades"
        detail="HOla Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        m expedita obcaecati tempora autem? A aliquid tempora
        blanditiis sequi commodi deserunt eveniet voluptate, id delectus
        laudantium nobis necessitatibus, mollitia impedit est earum veritatis quia
        beatae repellat optio quas accusamus nesciunt ipsam autem?"
        redirectTo="https://www.youtube.com.ar/"
        like={200}
        isImportant
      ></Card>
    </div>
  );
};

export default App;
