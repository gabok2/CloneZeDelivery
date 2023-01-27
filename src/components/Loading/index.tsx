import { Container, LoadIndicator } from './styles';

export function Loading() {
  console.log("Render Loading...")
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
}