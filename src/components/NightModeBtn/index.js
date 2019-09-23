import React, { useState, useEffect } from "react"

import * as S from "./styled"

const NightModeBtn = () => {
    const [theme, setTheme] = useState(null)
  
    const isDarkMode = theme === "dark"
  
    useEffect(() => {
      setTheme(window.__theme)
      window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.Button title="Mudar o tema"
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? "light" : "dark")
        }}
        className={theme}> Nigth Mode: {theme == "dark" ? "ON" : "OFF"} </S.Button>
    )
}

export default NightModeBtn