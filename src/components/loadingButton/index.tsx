import { Button, ButtonProps, Spinner } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'

interface LoadingButtonProps extends ButtonProps {
  children: ReactNode
  onClick?: () => Promise<void> | void
}

export function LoadingButton({
  children,
  onClick,
  ...rest
}: LoadingButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (!onClick) return

    try {
      setLoading(true)
      await onClick()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      {...rest}
      onClick={handleClick}
      isLoading={loading}
      spinner={<Spinner size="sm" />}
      loadingText="Carregando"
    >
      {children}
    </Button>
  )
}
