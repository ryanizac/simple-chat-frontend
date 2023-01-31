import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #262222;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  :has(input[type='radio']:checked) {
    background-color: #3b3838;
  }
`
