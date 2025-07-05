import { useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L, { type LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Box, IconButton, Dialog } from '@mui/material'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import type { Coordinates } from '@/types/custom'
import { motion } from 'framer-motion'
import { rgba } from '@/utils/color'

export function Map({ height = 150, lat, lng }: { height?: number | string } & Coordinates) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box>
      <Box sx={{ position: 'relative', width: '100%', height }}>
        <IconButton
          onClick={() => setExpanded(true)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1000,
            bgcolor: ({ palette }) => rgba(palette.background.default, 0.925),
            ':hover': {
              bgcolor: ({ palette }) => palette.background.default,
            },
            svg: {
              fill: ({ palette }) => palette.text.secondary,
              width: 20,
              height: 20,
            },
          }}
        >
          <ZoomOutMapIcon />
        </IconButton>
        <MapContent lat={lat} lng={lng} height={height} />
      </Box>
      <Dialog
        open={expanded}
        onClose={() => setExpanded(false)}
        fullScreen
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              mt: 0,
              backdropFilter: 'blur(4px)',
              height: {
                xs: 'calc(100svh - 2rem)',
                sm: 'calc(100dvh - 2rem)',
                md: 'calc(100dvh - 3rem)',
              },
              width: {
                xs: 'calc(100svw - 2rem)',
                sm: 'calc(100dvw - 2rem)',
                md: 'calc(100dvw - 3rem)',
              },
              borderRadius: 1,
            },
          },
        }}
      >
        <MapContent
          lat={lat}
          lng={lng}
          height="inherit"
          showClose
          handleClose={() => setExpanded(false)}
        />
      </Dialog>
    </Box>
  )
}

const MapContent = ({
  lat,
  lng,
  height = 150,
  showClose = false,
  handleClose,
}: Coordinates & {
  height?: string | number
  showClose?: boolean
  handleClose?: () => void
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    sx={{
      position: 'relative',
      width: '100%',
      height,
    }}
  >
    {showClose && (
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 1200,
          bgcolor: ({ palette }) => rgba(palette.background.default, 0.925),
          ':hover': {
            bgcolor: ({ palette }) => palette.background.default,
          },
          svg: {
            fill: ({ palette }) => palette.text.secondary,
            width: 20,
            height: 20,
          },
        }}
      >
        <CloseFullscreenIcon />
      </IconButton>
    )}
    <Box
      component={MapContainer}
      center={[lat, lng] as LatLngExpression}
      zoom={13}
      scrollWheelZoom
      sx={{
        borderRadius: 1,
        height: '100%',
        width: '100%',
        '.leaflet-control-container > div > div > a': {
          bgcolor: ({ palette }) => rgba(palette.background.default, 0.925),
          ':hover': {
            bgcolor: ({ palette }) => palette.background.default,
          },
          '> span': {
            color: ({ palette }) => palette.text.secondary,
            fontSize: 20,
          },
        },
      }}
      attributionControl={false}
    >
      <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lat && lng && (
        <Marker
          position={[lat, lng] as LatLngExpression}
          icon={L.icon({
            iconUrl: '/movo.svg',
            iconSize: [32, 32],
          })}
        />
      )}
    </Box>
  </Box>
)
