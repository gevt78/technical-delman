/* eslint-disable import/prefer-default-export */
export const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733',
    },
  },
  styles: {
    global: () => ({
      body: {
        // bg: mode('gray.50', 'gray.800')(props),
        fontFamily: 'IBM Plex Sans',
      },
      html: {
        fontFamily: 'IBM Plex Sans',
      },
    }),
  },
}
