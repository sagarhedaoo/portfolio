import * as Sentry from "@sentry/nextjs";

// Initialize Sentry based on the environment
// There's no direct "register" function to import but rather define a self-initiating setup
(async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Node.js-specific configurations for Sentry
    Sentry.init({
      dsn: "https://94dcc0b7995ad36e93cd9bbab24fd441@o4507290111180800.ingest.us.sentry.io/4507290113343488",
      tracesSampleRate: 1,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
      // Add any other Node.js-specific Sentry configurations here
    });
  } else if (process.env.NEXT_RUNTIME === "edge") {
    // Edge-specific configurations for Sentry
    Sentry.init({
      dsn: "https://94dcc0b7995ad36e93cd9bbab24fd441@o4507290111180800.ingest.us.sentry.io/4507290113343488",
      tracesSampleRate: 1,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
      // Add any other Edge-specific Sentry configurations here
    });
  }
})();
