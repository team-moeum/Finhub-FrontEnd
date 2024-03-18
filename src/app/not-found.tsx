'use client';

import LinkButton from '@/components/Button/LinkButton';
import styled from '@emotion/styled';
 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

export default function NotFound() {
  return (
    <Container>
      <p style={{fontSize:'1.5em', fontWeight:'700'}}>Not Found</p>
      <p>Could not find requested resource</p>
      <LinkButton tag="button" type="contained" href="/home" width={150} height={40} ripple animate>Return Home</LinkButton>
    </Container>
  )
}