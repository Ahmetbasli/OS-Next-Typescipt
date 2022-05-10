type theme = {
  default: {
    colors: {
      primary: string;
    };
  };
};

type StyledAppProps = {
  children: JSX.Element;
  theme?: theme;
};

export default StyledAppProps;
