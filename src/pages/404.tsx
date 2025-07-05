import { PageTitle } from '@/components/Shared/PageTitle'
import { useRouter } from '@/hooks/useRouter'
import routes from '@/router/routes'
import { Paper } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import { Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

export default function NotFound() {
  const { formatMessage: f } = useIntl()
  const router = useRouter()

  return (
    <Box>
      <PageTitle>{f({ id: 'notFound' })}</PageTitle>
      <Stack justifyContent="center" alignItems="center" minHeight="100dvh">
        <Stack spacing={2} component={Paper} p={3}>
          <Typography>{f({ id: 'notFoundTitle' })}</Typography>
          <Typography>{f({ id: 'notFoundDescription' })}</Typography>
          <Button onClick={() => router.push(routes.dashboard)}>{f({ id: 'backHome' })}</Button>
        </Stack>
      </Stack>
    </Box>
  )
}
