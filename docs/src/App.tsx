import { Button, useThemeContext, Loader, styled } from "@poke-ui/core";

const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  const { theme, changeTheme } = useThemeContext();
  return (
    <Box>
      <Loader />
      <p>Theme is: {theme}</p>
      <Button
        shape="pill"
        css={{
          marginBottom: "$md",
        }}
        onClick={() => changeTheme("grass")}
        color="success"
      >
        Grass Theme
      </Button>
      <Button shape="squared" onClick={() => changeTheme("fire")} color="error">
        Fire Theme
      </Button>
    </Box>
  );
}

export default App;
