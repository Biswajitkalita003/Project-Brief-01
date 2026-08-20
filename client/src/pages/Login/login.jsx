import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Login() {
  const handleClick = () => {
    alert("Login button clicked!");
  };

  return (
    <section>
      <PageTitle title="Login" />

      <Card
        title="Welcome Back"
        description="Please use the login option to access your Campus Connect account."
      >
        <Button text="Login" onClick={handleClick} />
      </Card>
    </section>
  );
}

export default Login;