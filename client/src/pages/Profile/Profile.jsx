import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Profile() {
  const handleClick = () => {
    alert("Profile button clicked!");
  };

  return (
  <section>
    <PageTitle title="User Profile" />

    <div className="card-grid">
      <Card
        title="Profile Information"
        description="View and manage your Campus Connect profile information."
      >
        <Button text="View Profile" onClick={handleClick} />
      </Card>
    </div>
  </section>
);
}

export default Profile;