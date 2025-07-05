import React from 'react'

const useDropdown = <T extends HTMLElement>() => {
  const [anchorEl, setAnchorEl] = React.useState<T | null>(null)
  const [anchorElWidth, setAnchorElWidth] = React.useState<number | null>(null)

  const handleToggle = (event: React.SyntheticEvent<T>) => {
    if (anchorEl) {
      setAnchorEl(null)
      // setAnchorElWidth(null)
    } else {
      setAnchorEl(event.currentTarget)
      setAnchorElWidth(event.currentTarget.clientWidth)
    }
  }

  const handleClose = (event?: Event | React.SyntheticEvent) => {
    if (anchorEl && anchorEl.contains(event?.target as HTMLElement)) return
    setAnchorEl(null)
    // setAnchorElWidth(null)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault()
      setAnchorEl(null)
      // setAnchorElWidth(null)
    }
  }

  const prevAnchorEl = React.useRef(anchorEl)
  React.useEffect(() => {
    if (prevAnchorEl.current && !anchorEl) prevAnchorEl.current.focus()
    prevAnchorEl.current = anchorEl
  }, [anchorEl])

  return {
    anchorEl,
    anchorElWidth,
    open: Boolean(anchorEl),
    handleToggle,
    handleClose,
    handleListKeyDown,
  }
}

export default useDropdown
