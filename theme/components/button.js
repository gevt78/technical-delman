/* eslint-disable import/prefer-default-export */
export const buttonStyles = {
  components: {
    Button: {
      variants: {
        'no-hover': {
          bgColor: 'mandala-black.600',
          colorScheme: 'red.500',
          _hover: {
            boxShadow: 'none',
          },
        },
        'transparent-with-icon': {
          bg: 'transparent',
          fontWeight: 'bold',
          borderRadius: 'inherit',
          cursor: 'pointer',
          _hover: 'none',
          _active: {
            bg: 'transparent',
            transform: 'none',
            borderColor: 'transparent',
          },
          _focus: {
            boxShadow: 'none',
          },
        },
      },
      baseStyle: {
        colorScheme: 'mandala-black.800',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
}
