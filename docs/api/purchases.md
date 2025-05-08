---
sidebar_position: 5
title: Purchases
---

# Purchases API

This section covers API endpoints related to purchase data and statistics.

## `GET /dashboard/stats`

Retrieves aggregated purchase statistics for the authenticated user's dashboard.

-   **Handler:** `PurchaseHandler.GetDashboardStats`
-   **Authentication:** Required (JWT Cookie)
-   **Description:** Fetches daily purchase statistics for the last 7 days for the authenticated user, and aggregates them into totals for test and real transactions.
-   **Request Parameters:** None
-   **Responses:**
    -   `200 OK`:
        ```json
        {
          "total_earnings": "uint64 (deprecated, use test_earnings + real_earnings)",
          "total_purchases": "uint64 (deprecated, use test_purchases + real_purchases)",
          "test_earnings": "uint64 (total earnings from test transactions)",
          "test_purchases": "uint64 (total count of test transactions)",
          "real_earnings": "uint64 (total earnings from real transactions)",
          "real_purchases": "uint64 (total count of real transactions)",
          "daily_purchases": [
            {
              "date": "string (YYYY-MM-DD)",
              "test_earnings": "uint64",
              "test_count": "uint64",
              "real_earnings": "uint64",
              "real_count": "uint64"
            }
            // ... more daily stats for the last 7 days
          ]
        }
        ```
        *Note: The `DailyStats` structure within `daily_purchases` would need its exact fields confirmed from the `purchaseService.GetDashboardStats` return type, specifically the `DailyStats` struct definition within the `purchases` package. The example above assumes common fields.*
    -   `401 Unauthorized`:
        ```json
        { "error": "Authentication required" }
        ```
    -   `500 Internal Server Error`: If failed to retrieve purchase data.
        ```json
        { "error": "Failed to retrieve purchase data" }
        ``` 