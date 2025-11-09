const Contact = () => {
    return (
      <div>
        <h2 className="font-bold text-2xl p-4 m-4">Contact Us</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              className="border border-blackp-2 m-2 rounded-lg"
              name="name"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              className="border border-blackp-2 m-2 rounded-lg"
              type="email"
              name="email"
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              className="border border-blackp-2 m-2 rounded-lg"
              name="message"
            ></textarea>
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
}

export default Contact;