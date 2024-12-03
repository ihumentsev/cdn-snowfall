# Snowfall
## _Add some New Year's cheer to your page_
- ✨Magic ✨



## Use with HTML

If you're using a regular HTML file 

```sh
<script src="https://cdn.jsdelivr.net/gh/ihumentsev/cdn-snowfall/snowfall.js" data-flake="circle" ></script>
```

In the data-flake attribute, you can specify the type of snowflakes. 

```sh
data-flake="circle" - "round snowflakes"
data-flake="circle" - "star-shaped snowflakes"
data-flake="circle" - "standard snowflakes"
```
If you do not specify a date-attribute when connecting the script, the default version of the standard snowflake will be used 


## Use with React

Connect the script in the `index.html` file in the `public` folder
```sh
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>APP</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/gh/ihumentsev/cdn-snowfall/snowfall.js"></script>
  </body>
</html>
```

##  Use with Next.js

Connect the script in the  `_document.tsx` file



First step:

```sh
import Script from "next/script";
```

Second step:

```sh
<Script src="/snowfall.js"   strategy="afterInteractive"/>
```

Example:

```sh
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
  
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- data-flake= "snowflake", "circle", "star" --> */}
        <Script src="/snowfall.js"   strategy="afterInteractive"/>
      </body>
    </Html>
 
  );
}
```

#### You can also copy the code and use as you wish

