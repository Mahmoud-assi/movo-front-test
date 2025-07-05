import { Img } from '@/components/Shared/ColoredSvg'
import { CustomPopper } from '@/components/Shared/CustomPopper'
import useDropdown from '@/hooks/useDropdown'
import { useLocalization } from '@/providers'
import { typography } from '@/theme/core'
import type { LocaleType } from '@/types/custom'
import { rgba } from '@/utils/color'
import { Typography } from '@mui/material'
import { IconButton, MenuItem, MenuList, Stack } from '@mui/material'
import { Box } from '@mui/material'
import { useMemo } from 'react'

export function LanguageSelector() {
  const { locale, changeLanguage } = useLocalization()
  const { anchorEl, open, handleToggle, handleClose } = useDropdown()

  const options = useMemo(
    () => [
      {
        label: 'العربية',
        icon: Img('syria-flag', 'appbar'),
        locale: 'ar',
        fontFamily: 'Noto Kufi Arabic',
      },
      {
        label: 'English',
        icon: Img('uk-flag', 'appbar'),
        locale: 'en',
        fontFamily: 'Roboto',
      },
    ],
    [],
  )

  return (
    <Box>
      <IconButton
        sx={{
          p: 0.7,
          img: {
            width: 28,
            height: 28,
            borderRadius: 1,
          },
        }}
        onClick={handleToggle}
      >
        {Img(locale === 'en' ? 'uk-flag' : 'syria-flag', 'appbar')}
      </IconButton>
      <CustomPopper anchorEl={anchorEl} open={open} handleClose={handleClose}>
        <MenuList sx={{ p: 0.75 }}>
          <Stack spacing={0.75}>
            {options.map(item => (
              <MenuItem
                sx={({ palette: { secondary } }) => ({
                  borderRadius: 1,
                  minHeight: 34,
                  px: { xs: 1.5, sm: 2 },
                  py: 1,
                  ...(item.locale === locale && {
                    bgcolor: rgba(secondary.light, 0.25),
                    boxShadow: `0 0 0 1px ${secondary.dark}`,
                    [`.${typography.body1}`]: {
                      color: secondary.light,
                    },
                  }),
                })}
                key={item.locale}
                onClick={() => {
                  changeLanguage(item.locale as LocaleType)
                  handleClose()
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{ xs: 1, sm: 2 }}
                  sx={{
                    img: {
                      width: { xs: 26, sm: 28 },
                      height: { xs: 26, sm: 28 },
                      borderRadius: 1,
                    },
                  }}
                >
                  {item.icon}
                  <Typography variant="body1" sx={{ fontFamily: `${item.fontFamily} !important` }}>
                    {item.label}
                  </Typography>
                </Stack>
              </MenuItem>
            ))}
          </Stack>
        </MenuList>
      </CustomPopper>
    </Box>
  )
}
