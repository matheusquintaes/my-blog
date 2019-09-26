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

          <S.IconWrapper> 
            <Lightbulb title="Change theme"
              onClick={() => {
                window.__setPreferredTheme(isDarkMode ? "light" : "dark")
              }}
              className={theme}/> 
          </S.IconWrapper>  
   
    )
}

export default TopMenuBar