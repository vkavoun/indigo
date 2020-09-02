This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Indigo Assignment Documentation

So the initial work took me about thirty minutes. My goal was to finish all the requirements and leave time for documentation.

## Things I wish I had time to complete

- `window.onbeforeunload` event could be handled differently with a better styled dialog with a message instead of the default.
- To use an actual endpoint for the JSON data instead of using a localhost call. `https://jsonbox.io/` was erroring out so I opted out to use localhost call instead of spending time on trying to get the api to work.
  <br>

  **EDIT:** as I was writing this I tested out `https://jsonbin.io/` and added the API since I had time.

- The main assumption I made that the `window.onbeforeunload` the prompt that was displayed would be enough to satisfy the requirement.
- Add Jest to the project
