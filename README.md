# SWC JSX parser error - minmal reproduction example

This example produces an error log in the console in SWC version 1.16.12.
> ERROR  Syntax error called from /Users/runner/.cargo/registry/src/index.crates.io-6f17d22bba15001f/swc_ecma_parser-0.146.11/src/parser/typescript.rs:151:13
>
> Current token = Some(/)

Run the example: 
```bash
deno run -A test.ts
```

