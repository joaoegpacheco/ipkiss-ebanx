# Ipkiss Ebanx API

A simple RESTful API for managing accounts and transactions (deposit, withdraw, transfer) with in-memory storage.

> **Note**: Monetary values (`amount`) can be sent as decimal numbers (e.g., `1.50`). They are automatically converted to integer cents internally for processing.

## Endpoints

- `POST /event`  
  Processes a financial event (`deposit`, `withdraw`, `transfer`).  
  **JSON body example:**  
  ```json
  {
    "type": "deposit" | "withdraw" | "transfer",
    "origin": "<id>",          // required for withdraw and transfer
    "destination": "<id>",     // required for deposit and transfer
    "amount": "<number>"
  }
  ```

- `GET /balance?account_id=<id>`  
  Retrieves the balance of the specified account.  
  - Existing account: `200 <balance>`  
  - Non-existing account: `404 0`

- `POST /reset`  
  Resets the application state (clears all accounts).  
  **Returns:** `200 OK` with an empty body

  
**Responses:**  
- Success:  
  Status code `201` with JSON of updated account(s)  
- Failure:  
  Status code `404` with body `0` (e.g., non-existing account, insufficient funds)

## How to run locally

```bash
npm install
node server.js
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## How to run with Ngrok in another terminal

```bash
npm install -g ngrok
ngrok config add-authtoken $YOUR_AUTHTOKEN
ngrok http 3000
```

## Testing

The API was validated using the official Ipkiss Tester [https://ipkiss.pragmazero.com/](https://ipkiss.pragmazero.com/), ensuring compliance with the requirements.
