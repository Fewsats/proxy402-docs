---
sidebar_position: 4
title: Routes
---

# Routes API

These endpoints are for creating, managing, and accessing paid routes (short links).

## `POST /links/shrink`

Creates a new paid route.

-   **Handler:** `PaidRouteHandler.CreatePaidRouteHandler`
-   **Authentication:** Required (JWT Cookie)
-   **Request Body:** `application/json`
    ```json
    {
      "target_url": "string (required, valid URL)",
      "method": "string (required, e.g., GET, POST)",
      "price": "string (required, numeric, e.g., \"0.010000\")",
      "is_test": "boolean (optional, defaults to false)"
    }
    ```
-   **Responses:**
    -   `201 Created`:
        ```json
        {
          "id": "uint64",
          "short_code": "string",
          "access_url": "string (full URL to access the short link)",
          "target_url": "string",
          "method": "string",
          "price": "string (formatted price)",
          "is_test": "boolean",
          "is_enabled": "boolean",
          "attempt_count": "uint64",
          "payment_count": "uint64",
          "access_count": "uint64",
          "created_at": "string (timestamp)"
        }
        ```
    -   `400 Bad Request`: Invalid request body or validation error (e.g., invalid URL, non-numeric price).
        ```json
        { "error": "string (description of error)" }
        ```
    -   `401 Unauthorized`:
        ```json
        { "error": "Authentication required" }
        ```

## `GET /links`

Retrieves all paid routes for the authenticated user.

-   **Handler:** `PaidRouteHandler.GetUserPaidRoutes`
-   **Authentication:** Required (JWT Cookie)
-   **Responses:**
    -   `200 OK`:
        ```json
        [
          {
            "id": "uint64",
            "short_code": "string",
            "access_url": "string",
            "target_url": "string",
            "method": "string",
            "price": "string",
            "is_test": "boolean",
            "is_enabled": "boolean",
            "attempt_count": "uint64",
            "payment_count": "uint64",
            "access_count": "uint64",
            "created_at": "string (timestamp)",
            "updated_at": "string (timestamp)"
          }
          // ... more routes
        ]
        ```
    -   `401 Unauthorized`:
        ```json
        { "error": "Authentication required" }
        ```
    -   `500 Internal Server Error`: If failed to retrieve routes.
        ```json
        { "error": "Failed to retrieve user routes" }
        ```

## `DELETE /links/:linkID`

Deletes a specific paid route owned by the authenticated user.

-   **Handler:** `PaidRouteHandler.DeleteUserPaidRoute`
-   **Authentication:** Required (JWT Cookie)
-   **Path Parameters:**
    -   `linkID` (string): The ID of the paid route to delete.
-   **Responses:**
    -   `200 OK`: Successfully deleted (empty body, compatible with HTMX swaps).
    -   `400 Bad Request`: Invalid `linkID` format.
        ```json
        { "error": "Invalid route ID format" }
        ```
    -   `401 Unauthorized`:
        ```json
        { "error": "Authentication required" }
        ```
    -   `403 Forbidden`: User does not have permission to delete the route.
        ```json
        { "error": "Route not found or you do not have permission to delete it" }
        ```
    -   `404 Not Found`: Route with the given ID not found.
        ```json
        { "error": "Route not found" }
        ```
    -   `500 Internal Server Error`: If deletion fails for other reasons.
        ```json
        { "error": "Failed to delete route" }
        ```

<!-- ## `ANY /:shortCode`

Accesses/proxies a paid route after payment verification.
This is the public-facing endpoint for the short links.

-   **Handler:** `PaidRouteHandler.HandlePaidRoute`
-   **Authentication:** Not directly required for this endpoint itself, but payment (X402) is.
-   **Path Parameters:**
    -   `shortCode` (string): The short code of the paid route.
-   **HTTP Methods:** Matches the `method` configured for the specific `shortCode` (e.g., GET, POST).
-   **Behavior:**
    1.  Finds the route by `shortCode`.
    2.  Checks if the request method matches the route's configured method.
    3.  Performs X402 payment verification.
        -   If payment is required, returns `402 Payment Required` with L402 headers.
        -   The `Proxy402-Secret` header will be added to the upstream request if the route owner has a secret configured.
    4.  If payment is successful (or not required/already made), it proxies the request to the `target_url`.
-   **Responses:**
    -   Proxied response from the `target_url` on successful payment and proxying.
    -   `402 Payment Required`: If payment is needed. Headers will contain L402 challenge.
    -   `404 Not Found`: If `shortCode` does not exist or route is disabled.
        ```json
        { "error": "Route not found or is disabled." }
        ```
    -   `405 Method Not Allowed`: If request method does not match the route's configured method.
        ```json
        { "error": "Method [METHOD] not allowed for this route. Allowed: [ALLOWED_METHOD]" }
        ```
    -   `500 Internal Server Error`: For issues like route configuration errors, failure to save purchase records, or proxy setup failures.
    -   `502 Bad Gateway`: If the reverse proxy encounters an error contacting the target server. -->
