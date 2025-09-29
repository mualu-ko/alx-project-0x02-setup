import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
const Home: React.FC = () => {
  return (
    <div>
        <Header></Header>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card Title" content="This is the card content." />
    </div>
    
  );
}


export default Home;