import { InputHTMLAttributes } from 'react'
import { ChoosedImageText, Container, StyledInputImage } from './styles'
import { useFile } from '@/hooks/useFile'

type StaticProps = 'type' | 'accept'

type InputImageProps = Omit<InputHTMLAttributes<HTMLInputElement>, StaticProps>

export function InputImage({ children, ...props }: InputImageProps) {
  const [inputRef, image] = useFile()

  function clickDivToInput() {
    const input = inputRef.current
    if (!input) return

    input.click()
  }

  return (
    <Container onClick={clickDivToInput}>
      {!!image ? (
        <ChoosedImageText>
          <b>Image:</b> {image.name}
        </ChoosedImageText>
      ) : (
        children
      )}
      <StyledInputImage
        type="file"
        accept="image/*"
        ref={inputRef}
        {...props}
      />
    </Container>
  )
}
