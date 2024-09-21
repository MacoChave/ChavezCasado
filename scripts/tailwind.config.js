tailwind.config = {
    theme: {
      colors: {
        oldgold: "#CFB53B"
      },
      extend: {
        colors: {},
        fontFamily: {
          handwrite: "Tangerine, cursive",
          sans: [
            'Lato',
            ...defaultTheme.fontFamily.sans,
          ]
        }
      },
    },
  };