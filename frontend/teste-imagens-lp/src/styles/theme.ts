type CustomTheme = {
  backgroundColor: string;
  containerWidth: number;
  input: {
    backgroundColor: string;
    color: string;
    borderRadius: number;
    fontSize: number;
  };
  header: {
    height: number;
    background: string;
  };
};

export type AppTheme = CustomTheme;

const theme: AppTheme = {
  backgroundColor: "#fafafa",
  containerWidth: 1024,
  input: {
    backgroundColor: "#eeeeee",
    color: "#2b2b2b",
    borderRadius: 10,
    fontSize: 1.5,
  },
  header: {
    height: 50,
    background: "#c3c3c3",
  },
};

export default theme;
