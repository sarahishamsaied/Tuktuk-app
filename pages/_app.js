import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { BrowserRouter } from "react-router-dom";
function MyApp({ Component, pageProps }) {
  return (
    <BrowserRouter>
      <Component {...pageProps} />;
    </BrowserRouter>
  );
}

export default MyApp;
