import UserContext from "./UserContext";
import { useContext } from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: {
            name: "Dummy Name",
            location: "Dummy Location"
          }
          }
        }

   async componentDidMount() {
        console.log("UserClass component mounted");
        const data = await fetch("https://api.github.com/users/amitcodes08");
        const user = await data.json();
        console.log(user);

        this.setState({
            userInfo: user
        });
    }
    
  render() {
    const {name, location} = this.state.userInfo;
    return (
      <div>
        <div>
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => <span>{loggedInUser}</span>}
        </UserContext.Consumer>
        </div>
        <h2>User Component</h2>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    )
}
}


export default UserClass;