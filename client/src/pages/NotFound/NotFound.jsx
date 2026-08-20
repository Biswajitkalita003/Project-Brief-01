import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function NotFound() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <section>
      <PageTitle title="Page Not Found" />

      <Card
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      >
        <Button text="Go Home" onClick={handleClick} />
      </Card>
    </section>
  );
}

export default NotFound;