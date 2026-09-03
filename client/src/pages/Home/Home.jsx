import PageTitle from "../../components/ui/PageTitle";
import Welcome from "../../components/ui/Welcome";
import Card from "../../components/ui/Card";


function Home() {
  return (
    <section>
      <PageTitle
        title="Campus Connect Home"
        description="Welcome to Campus Connect, a platform for accessing campus information and activities."
      />
      <div className="card-grid">
        <Card
          title="Welcome"
          description="Welcome to Campus Connect, a platform for accessing campus information and activities."
        />
        <Welcome
          name="Student"
          project="Campus Connect"
        />

        <Card
          title="Campus Events"
          description="Stay updated with upcoming campus events and activities."
        />

        <Card
          title="Announcements"
          description="View important announcements and updates from the campus."
        />
      </div>
    </section>
  );
}

export default Home;