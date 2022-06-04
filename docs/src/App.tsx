import { Button, useThemeContext, Loader } from "@poke-ui/core";

function App() {
  const { theme, changeTheme } = useThemeContext();
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <p>Theme is: {theme}</p>
        <Button
          css={{
            marginRight: "$md",
          }}
          onClick={() => changeTheme("grass")}
        >
          Grass Theme
        </Button>
        <Button onClick={() => changeTheme("fire")}>Fire Theme</Button>
      </header>
    </div>
  );
}

export default App;
