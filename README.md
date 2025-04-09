# Hop Bunny Frontend

This is the frontend for the Hop Bunny Game application, providing login, registration, user dashboard and leaderboard functionality.

## Structure

- HTML files (index.html, login.html, register.html, dashboard.html, users.html)
- CSS files (styles.css)
- JavaScript files (in the js/ directory)
- Configuration file (js/config.js) for environment-dependent settings

## Quick Start

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open in your browser:
   ```
   http://localhost:5000
   ```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```
   vercel
   ```

3. For production deployment:
   ```
   vercel --prod
   ```

### Netlify

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Deploy to Netlify:
   ```
   netlify deploy
   ```

3. For production deployment:
   ```
   netlify deploy --prod
   ```

### GitHub Pages

1. Create a GitHub repository
2. Push this frontend directory to the repository
3. Enable GitHub Pages in repository settings

## Configuration

Update the API URL in `js/config.js` to point to your deployed backend:

```javascript
// Production URL - change this to your actual deployed backend URL
return 'https://your-backend-url.com/api';
```

## Pages

- **Home (index.html)**: Welcome page with links to login, register, and view users
- **Login (login.html)**: User login form
- **Register (register.html)**: New user registration form
- **Dashboard (dashboard.html)**: User profile page showing user stats
- **Users (users.html)**: List of all registered users with search and pagination

## API Integration

The frontend communicates with the backend API endpoints:

- **POST /api/register**: Create a new user account
- **POST /api/login**: Authenticate a user
- **GET /api/user-profile**: Fetch user details
- **GET /api/users**: List all users with pagination and filtering

## Security

This frontend uses local storage for maintaining login state:
- userId
- token
- username

For production, consider implementing more secure authentication methods like JWT with proper expiration and refresh token handling. 