import React from "react";

export interface Theme {
	isDark: boolean;
	toggle: () => void;
}

export const ThemeContext = React.createContext<Theme>({
	isDark: false,
	toggle: () => {
	},
})