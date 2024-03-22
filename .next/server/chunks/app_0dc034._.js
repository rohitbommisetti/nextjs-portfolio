module.exports = {

"[project]/app/components/sandpack-files.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CSS": ()=>CSS,
    "HTML": ()=>HTML,
    "Tailwind": ()=>Tailwind,
    "stylexApp": ()=>stylexApp,
    "stylexIndex": ()=>stylexIndex,
    "stylexTokens": ()=>stylexTokens,
    "stylexViteConfig": ()=>stylexViteConfig
});
const HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal Blog</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header class="blog-header">
      <h1>Minimal Blog</h1>
    </header>
    <main>
      <article class="blog-post">
        <h2 class="post-title">The Art of CSS</h2>
        <p class="post-content">
          Discovering the latest features in CSS can transform the way we design
          and interact with web content.
        </p>
      </article>
      <article class="blog-post">
        <h2 class="post-title">Exploring Web Design</h2>
        <p class="post-content">
          A journey through the evolution of web design, from static pages to
          dynamic, responsive experiences.
        </p>
      </article>
    </main>
    <footer class="blog-footer">
      <p>&copy; 2023 Minimal Blog</p>
    </footer>
  </body>
</html>`;
const CSS = `:root {
  --main-bg-color: #f3f4f6;
  --title-color: #262626;
  --text-color: #525252;
  --font-family: "Arial", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--main-bg-color);
  font-family: var(--font-family);
}

.blog-header,
.blog-footer {
  text-align: center;
  padding: 1rem;
  background-color: var(--title-color);
  color: white;
}

.blog-post {
  container-type: inline-size;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & .post-title {
    color: var(--title-color);
    margin: 0 0 1rem 0;
    text-wrap: balance;
    font-size: 1em;
  }

  & .post-content {
    color: var(--text-color);
  }
}

@container (min-inline-size: 500px) {
  .blog-post {
    padding: 1.5rem;

    & .post-title {
      font-size: 1.25em;
    }
  }
}`;
const Tailwind = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal Blog</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 font-sans">
    <header class="text-center text-3xl font-bold py-8 bg-neutral-800 text-white">
      <h1>Minimal Blog</h1>
    </header>
    <main class="w-full px-4">
      <article class="my-4 p-4 bg-white shadow-md">
        <h2 class="text-neutral-800 mb-4 font-bold">The Art of CSS</h2>
        <p class="text-neutral-600 leading-5">
          Discovering the latest features in CSS can transform the way we design
          and interact with web content.
        </p>
      </article>
      <article class="my-4 p-4 bg-white shadow-md">
        <h2 class="text-neutral-800 mb-4 font-bold">Exploring Web Design</h2>
        <p class="text-neutral-600 leading-5">
          A journey through the evolution of web design, from static pages to
          dynamic, responsive experiences.
        </p>
      </article>
    </main>
    <footer class="text-center py-8 bg-neutral-800 text-white">
      <p>&copy; 2023 Minimal Blog</p>
    </footer>
  </body>
</html>`;
const stylexIndex = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal Blog</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
`;
const stylexViteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { stylexPlugin } from "vite-plugin-stylex-dev";

export default defineConfig({
  plugins: [react(), stylexPlugin()],
});
`;
const stylexTokens = `import * as stylex from "@stylexjs/stylex";

export const tokens = stylex.defineVars({
  bgColor: "#f3f4f6",
  titleColor: "#262626",
  textColor: "#525252",
  fontFamily: 'Arial, sans-serif',
});
`;
const stylexApp = `import React from "react";
import * as stylex from "@stylexjs/stylex";
import { tokens } from "./tokens.stylex";

const styles = stylex.create({
  body: {
    backgroundColor: tokens.bgColor,
    fontFamily: tokens.fontFamily,
    margin: 0,
    padding: 0,
  },
  header: {
    fontSize: "2rem"
  },
  headerFooter: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: tokens.titleColor,
    color: "white",
  },
  blogPost: {
    margin: "1rem",
    padding: "1rem",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  postTitle: {
    color: tokens.titleColor,
    marginBottom: "1rem",
    fontSize: "1em",
    textWrap: "balance"
  },
  postContent: {
    color: tokens.textColor,
  },
});

export default function App() {
  return (
    <body {...stylex.props(styles.body)}>
      <header {...stylex.props(styles.headerFooter)}>
        <h1 {...stylex.props(styles.header)}>Minimal Blog</h1>
      </header>
      <main>
        <article {...stylex.props(styles.blogPost)}>
          <h2 {...stylex.props(styles.postTitle)}>The Art of CSS</h2>
          <p {...stylex.props(styles.postContent)}>
            Discovering the latest features in CSS can transform the way we
            design and interact with web content.
          </p>
        </article>
        <article {...stylex.props(styles.blogPost)}>
          <h2 {...stylex.props(styles.postTitle)}>Exploring Web Design</h2>
          <p {...stylex.props(styles.postContent)}>
            A journey through the evolution of web design, from static pages to
            dynamic, responsive experiences.
          </p>
        </article>
      </main>
      <footer {...stylex.props(styles.headerFooter)}>
        <p>&copy; 2023 Minimal Blog</p>
      </footer>
    </body>
  );
}`;

})()),
"[project]/app/components/sandpack.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LiveCode": ()=>LiveCode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@codesandbox/sandpack-react/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/sandpack-files.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "px-4 py-3 border border-red-700 bg-red-200 rounded p-1 text-sm flex items-center text-red-900 mb-8",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "w-full callout",
                    children: this.props.fallback
                }, void 0, false, {
                    fileName: "<[project]/app/components/sandpack.tsx>",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/components/sandpack.tsx>",
                lineNumber: 31,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
function LiveCode({ example }) {
    let files;
    if (example === 'html') {
        files = {
            '/styles.css': {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"],
                active: true
            },
            '/index.html': __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HTML"]
        };
    } else if (example === 'tailwind') {
        files = {
            '/index.html': __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tailwind"]
        };
    } else if (example === 'stylex') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](ErrorBoundary, {
                fallback: 'Oops, there was an error loading the CodeSandbox',
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sandpack"], {
                    theme: "auto",
                    files: {
                        'App.tsx': {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylexApp"],
                            active: true
                        },
                        '/tokens.stylex.js': __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylexTokens"],
                        '/vite.config.ts': __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylexViteConfig"],
                        '/index.html': {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sandpack$2d$files$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylexIndex"],
                            hidden: true
                        }
                    },
                    template: "vite-react-ts",
                    customSetup: {
                        dependencies: {
                            '@stylexjs/stylex': '^0.3.0'
                        },
                        devDependencies: {
                            'vite-plugin-stylex-dev': 'latest'
                        }
                    }
                }, void 0, false, {
                    fileName: "<[project]/app/components/sandpack.tsx>",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/components/sandpack.tsx>",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/components/sandpack.tsx>",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](ErrorBoundary, {
            fallback: 'Oops, there was an error loading the CodeSandbox.',
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$codesandbox$2f$sandpack$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sandpack"], {
                theme: "auto",
                template: "static",
                files: files
            }, void 0, false, {
                fileName: "<[project]/app/components/sandpack.tsx>",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/app/components/sandpack.tsx>",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/components/sandpack.tsx>",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=app_0dc034._.js.map