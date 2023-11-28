import { Button, Container, Content, Header, Image, Text } from "./styled";

export const Error = () => {
  return (
    <Container>
      <Content>
        <Image />
        <Header>Ooops! Something went wrong... </Header>
        <Text>Please check your network connection and try again</Text>
        <Button to="/movies">Back to home page</Button>
      </Content>
    </Container>
  );
};
