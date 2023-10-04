export function myLoader(url: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
}
