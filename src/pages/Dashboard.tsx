import { Dashboard } from '@/components/Pages/Dashboard'
import { PageTitle } from '@/components/Shared/PageTitle'
import { Box } from '@mui/material'
import { useIntl } from 'react-intl'

export default function DashboardPage() {
  const { formatMessage: f } = useIntl()

  return (
    <Box overflow="hidden">
      <PageTitle>{f({ id: 'dashboard' })}</PageTitle>
      <Dashboard />
    </Box>
  )
}
