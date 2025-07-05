import type { RefObject } from 'react'
import { useRef, useState, useEffect, useCallback } from 'react'

type UseScrollOffsetTopReturn<T extends HTMLElement = HTMLElement> = {
  offsetTop: boolean
  elementRef: RefObject<T>
}

export function useScrollOffsetTop<T extends HTMLElement = HTMLElement>(
  defaultValue: number = 0,
): UseScrollOffsetTopReturn<T> {
  const elementRef = useRef<T>(null) as RefObject<T>
  const [offsetTop, setOffsetTop] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    const windowScrollY = window.scrollY
    if (elementRef.current) {
      const elementOffsetTop = elementRef.current.offsetTop
      // Track element offset top
      setOffsetTop(windowScrollY > elementOffsetTop - defaultValue)
    }
    // Track window offset top
    else setOffsetTop(windowScrollY > defaultValue)
  }, [defaultValue])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return {
    elementRef,
    offsetTop,
  }
}
