import { AppBar } from '@/components/AppBar';
import { AppContainer, Container } from '@/components/Container';
import { NotifyScreen } from './_component/NotifyScreen';

export default function NotifyPage() {
  return (
    <AppContainer>
      <AppBar
        useLeftBack
        title='알림'
      />
      <Container mt={20}>
        <NotifyScreen />
      </Container>
    </AppContainer>
  )
} 