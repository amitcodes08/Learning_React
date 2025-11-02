const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;