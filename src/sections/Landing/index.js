import React, { useRef, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

import colors from "../../styles/colors";
import base from "../../styles/base";

import icon from "../../assets/images/icons/icon-loader.png";

const navDotStyling = currentValue => {
  const classes = [
    "landing",
    "footer",
    "web-app-container",
    "mobile-app-container",
    "emerging-app-container",
  ];

  classes.map(value => {
    if (currentValue === value) {
      document.body.classList.add(value);
    } else {
      document.body.classList.remove(value);
    }
    return false;
  });
};

const Landing = ({ currentThemeType, activeSection, activeSectionType, data }) => {
  const isActive = useRef();

  useEffect(() => {
    isActive.current = false;
  }, []);

  if (activeSectionType === "landing") {
    isActive.current = true;
    navDotStyling("landing");
  }

  function createMarkup(html) {
    return {
      __html: html,
    };
  }

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.background_text_wrapper)}>
        <span
          className={css(
            styles.background_text_port,
            currentThemeType === "dark"
              ? styles.background_text_dark
              : styles.background_text_light,
          )}
        >
          Port
        </span>
        <span
          className={css(
            styles.background_text_folio,
            currentThemeType === "dark"
              ? styles.background_text_dark
              : styles.background_text_light,
          )}
        >
          folio
        </span>
      </div>
      <div className={css(styles.content)}>
        <div className={css(styles.content_greeting)}>
          <div className={css(styles.greeting_main)}>
            <div className={css(styles.greeting_wrapper)}>
              <p
                className={css(
                  styles.greeting_main_hey,
                  currentThemeType === "dark" ? styles.light_text : styles.dark_text,
                )}
              >
                Hey
              </p>
              <p
                className={css(
                  styles.greeting_main_name,
                  currentThemeType === "dark"
                    ? styles.greeting_main_name_dark
                    : styles.greeting_main_name_light,
                )}
              >
                {data.title}
              </p>
            </div>
            <div className={css(styles.icon_wrapper)}>
              <img className={css(styles.icon)} src={icon} alt="Icon" />
              <span className={css(styles.icon_text)}>Octalogic</span>
            </div>
          </div>
        </div>
        <div className={css(styles.content_description)}>
          <div className={css(styles.description_wrapper)}>
            <p
              className={css(styles.description_text)}
              dangerouslySetInnerHTML={createMarkup(data.description)}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: base.container,
  background_text_wrapper: {
    position: "absolute",
    top: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  background_text_port: {
    position: "absolute",
    fontSize: "25rem",
    lineHeight: "1",
    top: "-8rem",
    left: "-3rem",
    fontFamily: "Poppins,Roboto",
    "@media only screen and (max-width: 600px)": {
      top: "-3rem",
      left: "-2rem",
      fontSize: "15rem",
    },
  },
  background_text_folio: {
    position: "absolute",
    fontSize: "25rem",
    lineHeight: "1",
    bottom: "-8rem",
    right: "-5rem",
    fontFamily: "Poppins,Roboto",
    "@media only screen and (max-width: 600px)": {
      bottom: "-4rem",
      right: "-4rem",
      fontSize: "13rem",
    },
  },
  background_text_light: {
    color: colors.gray.three,
    opacity: "0.5",
  },
  background_text_dark: {
    color: colors.gray.seven,
    opacity: "0.5",
  },
  content: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    "@media only screen and (max-width: 600px)": {
      flexDirection: "column",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flexDirection: "column",
    },
  },
  content_greeting: {
    height: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  content_description: {
    height: "100%",
    flex: "1",
    flexDirection: "column",
    "@media only screen and (max-width: 600px)": {
      flex: "2",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      flex: "2",
    },
  },
  light_text: {
    color: colors.gray.three,
  },
  dark_text: {
    color: colors.gray.six,
  },
  greeting_main: {
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "flex-end",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      justifyContent: "flex-end",
    },
  },
  greeting_main_hey: {
    margin: "0rem 2rem",
    fontSize: "6rem",
    lineHeight: "1",
    "@media only screen and (max-width: 600px)": {
      fontSize: "2rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "3rem",
    },
  },
  greeting_main_name: {
    margin: "0rem 2rem",
    fontSize: "8rem",
    lineHeight: "1",
    "@media only screen and (max-width: 600px)": {
      fontSize: "3rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "4rem",
    },
  },
  greeting_main_name_light: {
    color: colors.blue.teal,
  },
  greeting_main_name_dark: {
    color: colors.blue.aquamarine,
  },
  icon_wrapper: {
    margin: "0rem 2rem",
    display: "flex",
    alignContent: "flex-end",
    "@media only screen and (max-width: 600px)": {
      display: "none",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      display: "none",
    },
  },
  icon: {
    height: "30%",
    margin: "auto 0.5rem",
  },
  icon_text: {
    fontSize: "2rem",
    lineHeight: "1",
    color: colors.octalogic.base,
    margin: "auto 0.5rem",
  },
  description_wrapper: {
    margin: "8rem 5rem",
    "@media only screen and (max-width: 600px)": {
      margin: "0rem 2rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      margin: "0rem 2rem",
    },
  },
  description_text: {
    fontSize: "1.5rem",
    "@media only screen and (max-width: 600px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      fontSize: "1.5rem",
    },
  },
});

export default Landing;
