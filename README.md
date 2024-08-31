# devwit_quotes

`devwit_quotes` is a lightweight Node.js package that provides a collection of witty and insightful quotes specifically curated for developers. Whether you need some inspiration, humor, or just a good quote to share, `devwit_quotes` has you covered.

## Installation

Install the package via npm:

```bash
npm install devwit_quotes
 ```

### Important: Configure as ES Module

After installing the package, ensure your project is set up to use ES modules by adding the following to your `package.json`:

```json
{
  "type": "module"
}
```

## Usage

Here's how you can use `devwit_quotes` in your project:

```javascript
import { fetchQuote } from "devwit_quotes";

console.log("A thought for developers: ");
console.log(fetchQuote());

