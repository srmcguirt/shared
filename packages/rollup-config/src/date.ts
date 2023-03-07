export const date = (utc?: string | Date): string => {
  if (!utc)
    utc = new Date()

  const time = new Date(utc).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const addOrdinal = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd']
    if (isNaN(n))
      return String(n)
    else
      return n + (s[((n % 100) - 20) % 10] || s[n % 100] || s[0])
  }

  return time.replace(/([0-9]+)/, n => addOrdinal(+n))
}
