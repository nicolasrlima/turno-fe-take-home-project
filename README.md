## Prerequisites

- Node.js (v18 or later)
- Ideally pnpm as this was created using it, but you can use npm, yarn, or bun as well.
- API Key

## Running the project

Populate the `.env` file with your API key. You can find the example in `.env.example`. Make sure to rename it to `.env` after copying.

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Go to [http://localhost:3000](http://localhost:3000) with your browser to see web app.

## Assumptions

- The API key is valid and has the necessary permissions to generate shipping labels.
- The API endpoint is reachable and responds correctly to the requests made by the application.

## What I'd do next

- Implement a more graceful error handling mechanism.
- Add some degree of automated testing
- Create a way to validate and pre-populate the address form fields to ensure only US addresses are used.
- Right now the "Country" field is pre-populated by the client using react hook form default fields, this is far from ideal, so I'd either populate it when calling the API or add a disabled input with US to make this information transparent.
