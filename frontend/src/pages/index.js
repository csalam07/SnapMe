import Theme from '../components/Theme';
import Left from '../container/Left';
import Middle from '../container/Middle';
import Right from '../container/Right';

function Home() {
  return (
    <>
      <main>
        <div className="container">
          <Left />
          <Middle />
          <Right />
        </div>
      </main>
      <Theme />
    </>
  );
}

export default Home;
