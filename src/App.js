import { StyledHeader } from "./components/styles/StyledHeader";
import { StyledSubHeader } from "./components/styles/StyledSubHeader";
import { StyledText } from "./components/styles/StyledText";
import { StyledTextInput } from "./components/styles/StyledTextInput";
import { StyledButton } from "./components/styles/StyledButton";

function App() {
  return (
    <div className="App">
      <StyledHeader>
        Publish your podcasts <StyledSubHeader>everywhere.</StyledSubHeader>
      </StyledHeader>
      <StyledText>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </StyledText>
      <StyledTextInput placeholder="Email address" />
      <StyledButton>Request Access</StyledButton>
    </div>
  );
}

export default App;
