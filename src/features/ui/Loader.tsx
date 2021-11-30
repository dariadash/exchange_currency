import React from 'react'
import styled from 'styled-components'

export const Loader = () => (
  <LoaderWrapper>
    <LoaderIcon />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
`

const LoaderIcon = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #7314EC44; /* Blue */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`