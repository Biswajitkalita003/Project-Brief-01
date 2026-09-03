import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Dashboard() {
  const [notifications, setNotifications] = useState(0);
  const [studentName, setStudentName] = useState("");

  const handleClick = () => {
    alert("Dashboard button clicked!");
  };

  const handleNotification = () => {
    setNotifications((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section>
      <PageTitle
        title="Campus Connect Dashboard"
        description="Overview of campus activities and information."
      />
      <div className="input-section">
        <h3>Student Name</h3>

        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <p>
          Hello, {studentName || "Student"}!
        </p>
      </div>

      <div className="card-grid">
        <Card
          title="Dashboard Overview"
          description="Overview of the campus activities and information."
        >
          <Button text="View Details" onClick={handleClick} />
        </Card>

        <Card
          title="Notifications"
          description={
            notifications > 0
              ? `You have ${notifications} new notification${notifications !== 1 ? "s" : ""
              }.`
              : "You have no new notifications."
          }
        >
          <Button
            text="Mark as Read"
            onClick={handleNotification}
          />
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;