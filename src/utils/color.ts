export function rgba(color: string, opacity: number = 1): string {
  if (!color) throw new Error('[rgba]: Color is undefined!')

  const isHex = color.startsWith('#')
  const isRGB = color.startsWith('rgb(')
  const isRGBA = color.startsWith('rgba(')

  if (isHex) {
    // Convert short hex to long
    const hex = color.length === 4 ? '#' + [...color.slice(1)].map(c => c + c).join('') : color

    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  if (isRGB) {
    const values = color.match(/\d+/g)
    if (!values || values.length !== 3) throw new Error('[rgba]: Invalid RGB color')
    return `rgba(${values.join(', ')}, ${opacity})`
  }

  if (isRGBA) {
    const values = color.match(/\d+(\.\d+)?/g)
    if (!values || values.length < 3) throw new Error('[rgba]: Invalid RGBA color')
    return `rgba(${values.slice(0, 3).join(', ')}, ${opacity})`
  }

  throw new Error(`[rgba]: Unsupported color format "${color}"`)
}
