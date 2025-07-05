const DEFAULT_FONT_FAMILY = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export function setFont(fontName?: string) {
  return fontName ? `"${fontName}", ${DEFAULT_FONT_FAMILY}` : DEFAULT_FONT_FAMILY
}

export function remToPx(value: string): number {
  const remValue = parseFloat(value)

  return Math.round(remValue * 16)
}

export function pxToRem(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(`Invalid pixel value: ${value}`)
  }

  return `${value / 16}rem`
}
