import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";

export default function Page({ id, options, count = 0, color, data }) {
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
    >
      I'm text from a component
    </MyWonderfulComponent>
  );
}

export async function getServerSideProps() {
  const data = `Hello from SSR`;

  return { props: { data } };
}

function MyWonderfulComponent({ id, options, children, ...other }) {
  const { count, data } = other;
  const [summ, setSumm] = useState(count);

  useEffect(() => {
    if (id && options) {
      setSumm(summ + 1);
    }
  }, []);
  console.log(summ);

  const theme = createMuiTheme({
    typography: {
      h1: {
        color: "tomato",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Hello World!</Typography>
      <Grid container>
        <Grid item xs={12}>
          {children}
          <p>{data}</p>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
