# WebKit CZ 🇨🇿

Small, dependency-free TypeScript utilities for Czech web applications.

> **Status:** Early development (v0.1.0). Not published to npm yet.

## Features

- Czech IČO checksum validation
- Czech DIČ basic syntax validation (not a registry lookup)
- Czech postal code syntax validation and formatting
- Czech phone number syntax validation and formatting

## Getting started

Requires Node.js 20+.

```bash
npm install
npm test
npm run build
```

After building:

```js
import { isValidICO, formatPSC, formatCzechPhone } from "./dist/index.js";

console.log(isValidICO("27074358"));
console.log(formatPSC("11000"));
console.log(formatCzechPhone("777123456"));
```

## Limitations

Syntax checks do not prove an identifier exists, belongs to a person, or is registered. DIČ checking is intentionally limited to common numeric formats. Phone checks do not verify number allocation. Postal code checks do not confirm an assigned postal district. Do not use these utilities as identity verification or as a substitute for official registries.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and meaningful contributions are welcome.

## License

MIT — see [LICENSE](LICENSE).
