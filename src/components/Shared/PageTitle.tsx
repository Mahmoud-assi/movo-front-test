import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'
import { useIntl } from 'react-intl'

export function PageTitle({ children }: PropsWithChildren) {
  const { formatMessage: f } = useIntl()
  return <Box component="title">{`${f({ id: 'movo' })} | ${children}`}</Box>
}
