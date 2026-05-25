import { Ubuntu } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
	variable: "--font-ubuntu",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${ubuntu.variable} h-full antialiased text-foreground`}>
			<body className="min-h-full">
				{children}
				<Footer />
			</body>
		</html>
	);
}
