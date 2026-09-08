import { Link } from "react-router-dom";

import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <section>
      <PageTitle title="Login" />

      <div className="card-grid">
        <Card
          title="Welcome Back"
          description="Login to continue to Campus Connect."
        >
          <Button text="Login" />

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/student-registration">
              Register as a Student
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Login;