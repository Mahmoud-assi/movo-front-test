import { Box } from '@mui/material'
import { styled, type SxProps, type Theme } from '@mui/material/styles'

export type SvgColorProps = React.ComponentProps<'span'> & {
  src: string
  sx?: SxProps<Theme>
}

export function ColoredSvg({ src, sx, ...other }: SvgColorProps) {
  return (
    <SvgRoot
      sx={[
        {
          mask: `url(${src}) no-repeat center / contain`,
          WebkitMask: `url(${src}) no-repeat center / contain`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  )
}

export const Icon = (
  name: string,
  path: 'common' | 'sidebar' | 'appbar' = 'common',
  sx?: SxProps<Theme>,
) => <ColoredSvg src={`/assets/icons/${path}/${name}.svg`} sx={{ ...sx }} />

export const Img = (name: string, path: 'common' | 'sidebar' | 'appbar' = 'common') => (
  <Box component="img" sx={{ width: 24, height: 24 }} src={`/assets/icons/${path}/${name}.svg`} />
)

const SvgRoot = styled('span')(() => ({
  width: 24,
  height: 24,
  flexShrink: 0,
  display: 'inline-flex',
  backgroundColor: 'currentColor',
}))
