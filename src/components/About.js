import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a restaurant app built with React.</p>
      <User name={"John Doe"} email={"john.doe@example.com"} />
      <UserClass />
    </div>
  );
};
export default About;