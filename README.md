# React + Vite + Bun + Tailwind + Biome

Personal starter for experiments

Install [bun](https://bun.sh/)

Then run:

```
bun i
```

```
bun dev
```

## Optional sync with OpenAPI (Swagger)

Included is a way to generate a [TanStack query](https://tanstack.com/query/latest) client from your schema for type-safe integration with your backend, using [OpenAPI TypeScript](https://openapi-ts.dev/)

Adjust synchronization script and `fetchClient` to point to your OpenAPI spec before running the sync:

```json
// package.json

{
  "scripts": {
    // Update this
    "sync": "bun run openapi-typescript http://localhost:8888/openapi.json -o ./src/api/schema.d.ts"
  }
}
```

```tsx
// src/api/index.tsx

const fetchClient = createFetchClient<paths>({
  // Update this
  baseUrl: "http://localhost:8888/",
});
```


```
bun sync
```
