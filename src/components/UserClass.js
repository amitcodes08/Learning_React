class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

   async componentDidMount() {
        console.log("UserClass component mounted");

    }
    
  render() {
    return (
      <div>
         <button onClick={() => {
            // Never do this.state.count = 1
            this.setState({
                count: this.state.count + 1
            });
         }}>Count - {this.state.count}</button>
        <h2>User Component</h2>
        <p>This is a user component rendered from a class-based component.</p>
      </div>
    );
  }
}

export default UserClass;