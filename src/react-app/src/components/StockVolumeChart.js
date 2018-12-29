import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    position: "relative"
  },
  chartContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    padding: "30px 30px 30px 10px"
  },
  chart: {
    height: "98%",
    position: "relative"
  }
};

const mapStateToProps = state => ({
  symbols: state.symbols
});

const mapDispatchToProps = dispatch => ({});

class StockVolumeChart extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h5">Volume</Typography>
        <div style={{ height: 10 }} />
        <Paper elevation={1} className={classes.paper}>
          <div className={classes.chartContainer} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StockVolumeChart)
);
