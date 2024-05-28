import React, {createContext, useState, useContext, ReactNode} from 'react';

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [themeColor, setThemeColor] = useState('#FF8F50'); // 기본 색상 설정

  return (
    <ThemeContext.Provider value={{themeColor, setThemeColor}}>
      {children}
    </ThemeContext.Provider>
  );
};
