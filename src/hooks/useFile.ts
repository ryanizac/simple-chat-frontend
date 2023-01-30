import { MutableRefObject, useEffect, useRef, useState } from 'react'

export function useFile(): [
  MutableRefObject<HTMLInputElement | null>,
  File | null
] {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    function event() {
      const input = inputRef.current
      if (!input || !input.files) return

      const foundFile = input.files.item(0)
      setFile(foundFile)
    }

    input.addEventListener('change', event)

    return () => {
      input.removeEventListener('change', event)
    }
  }, [])

  return [inputRef, file]
}
