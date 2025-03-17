import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/reset.css";
import "@/styles/tailwind.css";
import "@/styles/styles.css";
import App from "./App";

if (import.meta.env.DEV) {
	import("react-scan").then(({ scan }) => {
		scan();
	});
}

const root = document.getElementById("root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
