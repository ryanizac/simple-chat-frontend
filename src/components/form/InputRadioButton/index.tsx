import { ReactNode, useRef } from 'react'
import { Container } from './styles'

type InputRadioButtonProps = {
  name: string
  value: string
  checked?: boolean
  defaultChecked?: boolean
  onCheck?: () => void
  children: ReactNode
}

export function InputRadioButton(props: InputRadioButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function onClickContainer() {
    const input = inputRef.current
    if (!input) return

    input.click()
    props.onCheck?.()
  }

  return (
    <Container onClick={onClickContainer}>
      <input
        ref={inputRef}
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        hidden
      />
      {props.children}
    </Container>
  )
}
