/**
 * Configuration file for the frontend
 * This file contains environment-specific settings
 */

// Determine the API URL based on the current environment
function getApiUrl() {
    // Check if we're in production (hosted on a real domain)
    const isProd = window.location.hostname !== 'localhost' && 
                  !window.location.hostname.includes('127.0.0.1') &&
                  !window.location.hostname.includes('.local');

    if (isProd) {
        // Production URL - change this to your actual deployed backend URL
        return 'https://hop-bunny-backend.vercel.app/api';
    } else {
        // Local development URL - default for development
        return 'http://localhost:3001/api';
    }
}

// Export the API URL for use in other scripts
const API_URL = getApiUrl();

// Log the current environment and API URL for debugging
console.log(`Environment: ${window.location.hostname !== 'localhost' ? 'Production' : 'Development'}`);
console.log(`API URL: ${API_URL}`); 