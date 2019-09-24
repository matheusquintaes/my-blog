import React, { useState, useEffect } from "react"
import { Lightbulb } from "styled-icons/fa-solid/Lightbulb"


import * as S from "./styled"

const TopMenuBar = () => {
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
        className={theme}>  <S.IconWrapper> <Lightbulb /> </S.IconWrapper>  </S.Button>
   
    )
}

export default TopMenuBar