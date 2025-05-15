---
sidebar_position: 4
title: Routes
---

# Routes API

These endpoints are for creating, managing, and accessing paid routes (short links).

*Note: A "one-time purchase" for a resource (URL or file) is implemented by setting its `type` to `"credit"` and `credits` to `1` during creation.*

## `POST /links/shrink`

Creates a new paid route for a URL.

-   **Handler:** `PaidRouteHandler.CreateURLRouteHandler`
-   **Authentication:** Required (JWT Cookie)
-   **Request Body:** `application/json`
    ```json
    {
      "target_url": "string (required, valid URL)",
      "method": "string (required, e.g., GET, POST)",
      "price": "string (required, numeric, e.g., \"0.010000\")",
      "is_test": "boolean (optional, defaults to false)",
      "type": "string (optional, defaults to 'credit', e.g., 'credit', 'subscription')",
      "credits": "integer (optional, defaults to 1, number of times the resource can be accessed per payment)"
    }
    ```
-   **Responses:**
    -   `201 Created`:
        ```json
        {
          "id": "uint64",
          "short_code": "string",
          "target": "string (the original target URL)",
          "method": "string",
          "resource_type": "string (will be 'url')",
          "access_url": "string (full URL to access the short link)",
          "price": "string (formatted price)",
          "type": "string (e.g., 'credit')",
          "credits": "integer (number of accesses per payment)",
          "is_test": "boolean",
          "is_enabled": "boolean",
          "attempt_count": "uint64",
          "payment_count": "uint64",
          "access_count": "uint64",
          "created_at": "string (timestamp)",
          "updated_at": "string (timestamp)"
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

## `POST /files/upload`

Initiates the process for monetizing a file upload. This endpoint doesn't receive the file itself. Instead, it registers the file's metadata and returns a pre-signed URL that the client must use to upload the file directly to cloud storage. This is a 3-step flow:

1.  **Client to Server**: Client sends a `POST` request to `/files/upload` with file metadata (filename, price, credits, etc.).
2.  **Server to Client**: Server creates a route entry, generates a pre-signed URL for direct file upload, and returns this URL to the client.
3.  **Client to Cloud Storage**: Client uses the received pre-signed URL to `PUT` the file directly to the cloud storage provider (e.g., Cloudflare R2).

-   **Handler:** `PaidRouteHandler.CreateFileRouteHandler`
-   **Authentication:** Required (JWT Cookie)
-   **Request Body:** `application/json`
    ```json
    {
      "original_filename": "string (required, the name of the file to be uploaded)",
      "price": "string (required, numeric, e.g., \"0.010000\")",
      "is_test": "boolean (optional, defaults to false)",
      "type": "string (optional, defaults to 'credit', e.g., 'credit', 'subscription')",
      "credits": "integer (optional, defaults to 1, number of times the resource can be accessed per payment)"
    }
    ```
    *Note: For file downloads, the access method is implicitly GET.*
-   **Responses:**
    -   `201 Created`: Successfully initiated file monetization and pre-signed URL generated.
        ```json
        {
          "upload_url": "string (pre-signed URL for the client to PUT the file to)"
        }
        ```
    -   `400 Bad Request`: Invalid request body or validation error (e.g., missing `original_filename`, invalid price format).
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
            "access_url": "string (full URL to access the short link)",
            "method": "string",
            "resource_type": "string (e.g., 'url', 'file')",
            "price": "string (formatted price)",
            "type": "string (e.g., 'credit')",
            "credits": "integer (number of accesses per payment)",
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
