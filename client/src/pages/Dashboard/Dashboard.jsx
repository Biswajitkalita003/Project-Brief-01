import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Dashboard() {
  const handleClick = () => {
    alert("Dashboard button clicked!");
  };

 return (
  <section>
    <PageTitle title="Campus Connect Dashboard" />

    <div className="card-grid">
      <Card
        title="Dashboard Overview"
        description="Overview of the campus activities and information."
      >
        <Button text="View Details" onClick={handleClick} />
      </Card>
    </div>
  </section>
);
}

export default Dashboard;