/**
 * An array routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
*/
export const publicRoutes = [
    "/",
]

/**
 * An array routes that are accessible to authenticated users
 * These routes redirect logged in users to the /settings
 * @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * Prefix for all API routes that require authentication
 * @type {string}
*/
export const apiAuthPrefix = "/api/auth"

/**
 * Default login redirect path for authenticated users
 * @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings"