A simple static website.
To run this app clone this repository and then run these commands:

```bash
npm i
npm run build
npm run start
```

This app has only two pages that are implemented with two server components and one client component for interactivity with select boxes.

React Suspense is not needed here as almost all the pages are prebuilt with the generateStaticParams() function which makes switching between different pages instant.
