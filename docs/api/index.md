---
sidebar_position: 1
title: Overview
---

# API Reference Overview

This section provides a comprehensive reference for the Proxy402 API. Our API allows you to programmatically interact with the Linkshrink service, enabling you to create and manage paid routes, handle payments, and integrate Linkshrink functionalities into your applications.

## Authentication

Most API endpoints require authentication. Authentication is handled via JWT tokens passed as cookies. Specific authentication details are provided for each endpoint.

## Base URL

All API calls are relative to the base URL of your Linkshrink instance. For example: `https://your-linkshrink-domain.com/`.

## Conventions

-   **Request and Response Bodies:** Typically JSON.
-   **Error Handling:** Standard HTTP status codes are used. Error responses usually include a JSON body with an `error` field describing the issue.

Use the sidebar to navigate through the different API modules:
-   **Authentication:** Endpoints related to user login and session management.
-   **Users:** Endpoints for managing user profiles and settings.
-   **Routes:** Endpoints for creating, listing, and managing paid routes.
-   **Purchases:** Endpoints for retrieving purchase data and statistics. 