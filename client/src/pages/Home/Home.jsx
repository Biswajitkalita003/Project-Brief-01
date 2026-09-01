import Card from "../../components/common/Card";

function Home() {
  return (
    <section>
      <p>Page Title: Home</p>
      <h1>Campus Connect Home</h1>

      <div className="card-grid">
        <Card
          title="Welcome"
          description="Welcome to Campus Connect, a platform for accessing campus information and activities."
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