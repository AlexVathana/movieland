import "./App.css";

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        // Check username and password (replace this with your authentication logic)
        if (username === 'admin' && password === '123') {
            alert('Login successful!');
            window.location.href = '/home'; // Redirect to the home page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const handlePlaceholderClick = (e) => {
        const input = e.target;
        input.placeholder = ''; // Clear the placeholder when clicked
    };

    return (
        <div id="login-form-container" className="login-form-container">
            <h2>Login</h2>
            <form id="login-form" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        className="form-input"
                        placeholder="Username"
                        onFocus={handlePlaceholderClick}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="form-input"
                        placeholder="Password"
                        onFocus={handlePlaceholderClick}
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
}
