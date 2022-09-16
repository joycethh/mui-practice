/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Tabs, Tab, Button, Link as MuiLink } from "@mui/material";
import styled from "@emotion/styled";

import { Link } from "react-scroll";

const useStyles = styled((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  tabs: {
    marginRight: theme.spacing(4),
  },
  navMenuItem: {
    marginRight: theme.spacing(1),
  },
}));

const StyledTabs = styled({
  indicator: {
    "& > span": {
      maxWidth: 20,
    },
  },
})((props) => (
  <Tabs
    {...props}
    variant="fullWidth"
    TabIndicatorProps={{ children: <span /> }}
  />
));

const StyledTab = styled((theme) => ({
  root: {
    transition: ".2s",
    minWidth: 120,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  const handleChange = (e, newValue) => {
    console.log(e);
    setValue(newValue);
  };
  return (
    <div className={classes.wrapper}>
      <StyledTabs
        className={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <StyledTab
          component={Link}
          to="about"
          label="About"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </StyledTab>

        <StyledTab
          component={Link}
          to="projects"
          label="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </StyledTab>

        <StyledTab
          component={Link}
          to="contact"
          label="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </StyledTab>
      </StyledTabs>
      <Button
        component={MuiLink}
        href="/resume.pdf"
        variant="outlined"
        color="primary"
        underline="none"
      >
        Resume
      </Button>
    </div>
  );
};

export default Menu;
