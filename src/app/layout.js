import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../src/app/theme'; // Ensure this file exists (see below)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
export const metadata = {
  title: "Vyapar Doot Spice Exim | Premium Indian Spices",
  description: "Your complete spice brokerage partner sourcing premium Indian spices for the global market.",
  icons: {
    icon: [
      { url: '/logotab.png' }, // Default
      { url: '/logotab.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/logotab.png' }, // For iPhone home screens
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline resets CSS and applies the background color from your theme */}
            <CssBaseline />
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: '100vh' 
            }}>
              <Navbar />
              
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>

              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}