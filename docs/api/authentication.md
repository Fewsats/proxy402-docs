---
sidebar_position: 2
title: Authentication
---

# Authentication API

This section describes the API endpoints related to user authentication, primarily using Google OAuth2.

## `GET /auth/login`

Initiates the Google OAuth2 login flow.

-   **Description:** If the user is not already authenticated (i.e., no valid `jwt` cookie), this endpoint redirects the user to Google's OAuth2 consent screen. If already authenticated, it redirects to `/dashboard`.
-   **Handler:** `OAuthHandler.Login`
-   **Request Parameters:** None
-   **Responses:**
    -   `302 Found` or `307 Temporary Redirect`: Redirects to Google OAuth service or to `/dashboard` if already logged in.
    -   `500 Internal Server Error`: If authentication is not configured on the server. (Renders `landing.html` with an error).

## `GET /auth/callback`

HHandles the callback from the Google OAuth2 service after the user grants or denies permission.

-   **Description:** This endpoint receives an authorization code from Google, exchanges it for an access token, retrieves user information from Google, finds or creates a user in the local database, generates a JWT, and sets it as an HTTP-only cookie (`jwt`). Finally, it redirects the user to the `/dashboard`.
-   **Handler:** `OAuthHandler.Callback`
-   **Request Parameters (Query):**
    -   `code`: The authorization code provided by Google. (Required)
    -   `state`: (Implicitly handled, corresponds to `state-token` set during login)
-   **Responses:**
    -   `302 Found`: Redirects to `/dashboard` on successful authentication and JWT creation.
    -   `400 Bad Request`: If the `code` parameter is missing. (Renders `landing.html` with an error).
    -   `500 Internal Server Error`: If token exchange, user info retrieval, user creation/lookup, or JWT generation fails. (Renders `landing.html` with an error).

## `GET /logout`

Logs the user out by clearing the JWT cookie.

-   **Description:** This endpoint clears the `jwt` cookie, effectively logging the user out, and then redirects the user to the landing page (`/`).
-   **Handler:** (Defined inline in `server/server.go`)
    ```go
    s.router.GET("/logout", func(c *gin.Context) {
        c.SetCookie("jwt", "", -1, "/", "", false, true)
        c.Redirect(http.StatusFound, "/")
    })
    ```
-   **Request Parameters:** None
-   **Responses:**
    -   `302 Found`: Redirects to `/`. 