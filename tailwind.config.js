/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkmode: ["class"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "var(--accent1)",
        },
        whiteCustom: "var(--whiteCustom)",
        grayCustom: "var(--grayCustom)",
        redCustom: "var(--redCustom)",
        blueCustom: "var(--blueCustom)",
        hoverCustom: "var(--hoverCustom)",
        placeholderCustom: "var(--placeholderCustom)",
        btnCustom: "var(--btnCustom)",
        btnHoverCustom: "var(--btnHoverCustom)",
        blackCustom: "var(--blackCustom)",
        blackHoverCustom: "var(--blackHoverCustom)",
        blackValueCustom: "var(--blackValueCustom)",
        blackPlaceholderCustom: "var(--blackPlaceholderCustom)",
        blackGenretitleCustom: "var(--blackGenretitleCustom)",
        shadowCustom: "var(--shadowCustom)",
        blackShadowCustom: "var(--blackShadowCustom)",
        blackCaptionFooterCustom: "var(--blackCaptionFooterCustom)",
        blackHeaderCustom: "var(--blackHeaderCustom)",
        headerCustom: "var(--headerCustom)",
        bgNoneCardCustom: "var(--bgNoneCardCustom)",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'play': ['Play', 'sans-serif'],
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  safelist: [
    "border",
    "border-whiteCustom",
    "border-grayCustom",
    "border-redCustom",
    "border-blueCustom",
    "border-hoverCustom",
    "border-placeholderCustom",
    "border-btnCustom",
    "border-btnHoverCustom",
    "border-blackCustom",
    "border-blackHoverCustom",
    "border-blackValueCustom",
    "border-blackPlaceholderCustom",
    "shadow-shadowCustom", 
    "shadow-blackShadowCustom",
    "blackCaptionFooterCustom",
    "blackHeaderCustom",
    "headerCustom",
    "bgNoneCardCustom",
  ],
  plugins: [
    plugin(({ addVariant }) => {
      // Hover media queries
      addVariant("has-hover", "@media (hover: hover)")
      addVariant("no-hover", "@media (hover: none)")
      // Applied on hover if supported, never applied otherwise
      addVariant("hover-never", "@media (hover: hover) { &:hover }")
      addVariant("group-hover-never", "@media (hover: hover) { :merge(.group):hover & }")
      addVariant("peer-hover-never", "@media (hover: hover) { :merge(.peer):hover & }")
      // Applied on hover if supported, always applied otherwise
      addVariant("hover-always", ["@media (hover: hover) { &:hover }", "@media (hover: none)"])
      addVariant("group-hover-always", ["@media (hover: hover) { :merge(.group):hover & }", "@media (hover: none)"])
      addVariant("peer-hover-always", ["@media (hover: hover) { :merge(.peer):hover & }", "@media (hover: none)"])

  }),
  ],
}

