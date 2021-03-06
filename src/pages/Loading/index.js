import React from "react";
import { StyleSheet, css } from "aphrodite";
import { withStyles } from "@material-ui/core/styles";
import colors from "../../styles/colors";
import LoadingComponent from "../../components/Loading";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    borderRadius: 20,
    height: 5,
    backgroundColor: colors.gray.nine,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  bar: {
    borderRadius: 20,
    backgroundColor: colors.octalogic.base,
  },
})(LinearProgress);

const Loading = props => {
  return (
    <div className={css(styles.content_horizontal)}>
      <div className={css(styles.content_vertical)}>
        <div className={css(styles.loader_wrapper)}>
          <LoadingComponent spin={false} />
          <div className={css(styles.loader_text_wrapper)}>
            <span className={css(styles.loader_text)}>octalogic</span>
          </div>
          <br></br>
          <br></br>
          <BorderLinearProgress />
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  content_horizontal: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content_vertical: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loader_wrapper: {
    width: "12rem",
    height: "12rem",
    "@media only screen and (max-width: 600px)": {
      height: "5rem",
      width: "5rem",
    },
    "@media only screen and (min-width:601px) and  (max-width: 769px)": {
      height: "10rem",
      width: "10rem",
    },
  },
  loader_text_wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  loader_text: {
    fontSize: "2.3rem",
    color: colors.octalogic.base,
  },
});

export default Loading;
