import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Button, Checkbox } from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <div style={{ padding: "1rem" }}>
          <Button variant="contained" color="primary">
            Botão variant="contained" color="primary"
          </Button>
        </div>

        <div style={{ padding: "1rem" }}>
          <Button variant="outlined" color="primary">
            Botão variant="outlined" color="primary"
          </Button>
        </div>

        <div style={{ padding: "1rem" }}>
          <Button variant="outlined" color="secondary">
            Botão variant="outlined" color="secondary"
          </Button>
        </div>

        <div style={{ padding: "1rem" }}>
          <Button variant="text" color="primary">
            Botão variant="text" color="primary"
          </Button>
        </div>

        <div style={{ padding: "1rem" }}>
          <Checkbox color="primary" />
          <Checkbox color="secondary" />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
