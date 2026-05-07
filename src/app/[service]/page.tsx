import Home from "../page";

// We render the Home page exactly as is. The `ServicesSection` component
// checks `window.location.pathname` on mount to automatically open
// the correct accordion and scroll down.
export default function ServicePage() {
  return <Home />;
}
