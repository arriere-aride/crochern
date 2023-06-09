// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",
  "*.{js,ts,jsx,tsx}": "vitest related --run",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
    `npm run lint`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `npx prettier --write ${filenames.join(" ")}`,
};
