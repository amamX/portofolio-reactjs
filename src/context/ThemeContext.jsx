import { createContext, useContext, useState, useEffect } from "react";

// Context untuk manajemen tema gelap (Dark Mode) dan terang (Light Mode)
const ThemeContext = createContext();

/**
 * Provider untuk tema tampilan aplikasi portofolio.
 * Standar bawaan (default) aplikasi dibuka dalam mode gelap (dark).
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Ambil preferensi tema dari localStorage jika ada, default "dark"
    const savedTheme = localStorage.getItem("portfolio_theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Simpan pilihan pengguna ke localStorage
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  /**
   * Fungsi untuk mengganti tema antara mode gelap dan mode terang.
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook untuk mengakses state tema dan fungsi pengubah tema.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
