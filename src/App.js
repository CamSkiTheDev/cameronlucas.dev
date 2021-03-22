import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import LandingPage from "./pages/landing";
import GoogleFontLoader from "react-google-font-loader";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "NTB";
  src: url("/assets/fonts/NeutraText-Bold.otf") format("opentype");
}

* {
  box-sizing: border-box;
  font-family: 'Open Sans';
  -webkit-font-smoothing: 'antialiased'
}

:root {
  font-size: 16px;
  line-height: 150%;

  --JS-Yellow: 240, 219, 79;
  --JS-Gray: 51, 51, 51;
  --CL-Blue: 34, 40, 49;
  --CL-Blue-Dark: 24, 28, 34;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: rgb(34, 40, 49)
}

.wrapper {
  width: 100%;
  max-width: 64em;
}
`;

const App = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Open Sans",
            weights: [
              300,
              "300i",
              400,
              "400i",
              500,
              600,
              "600i",
              700,
              800,
              900,
              "900i",
            ],
          },
        ]}
      />
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;
