import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  const handleClick = () => {
    alert("Welcome to Campus Connect!");
  };

  return (
    <section>
      <PageTitle title="Campus Connect Home" />

      <Card
        title="Welcome"
        description="Welcome to Campus Connect, a platform for accessing campus information and activities."
      >
        <Button text="Get Started" onClick={handleClick} />
      </Card>
    </section>
  );
}

export default Home;