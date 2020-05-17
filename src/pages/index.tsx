/** @jsx jsx */
import { jsx, Styled, components, useThemeUI, Container } from "theme-ui"
import { Helmet } from "react-helmet"

import {
  TypeScale,
  TypeStyle,
  ColorPalette,
  FontFamily,
} from "@theme-ui/style-guide"

import Components from "../components/components.mdx"

const ThemeJson = () => {
  const theme = useThemeUI()
  return (
    <textarea
      value={JSON.stringify(theme, null, 2)}
      rows={16}
      readOnly
      sx={{
        width: "100%",
        fontFamily: "monospace",
        bg: "highlight",
        p: 2,
        border: 0,
        borderRadius: "sketchy3",
      }}
    />
  )
}

export default () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Architects+Daughter|Montserrat:400,700|Poppins:400,700,900|Roboto:400,600"
        />
      </Helmet>
      <Container
        sx={{
          "*": {
            transition: "all .2s ease-out",
          },
          pt: 20,
        }}
      >
        <Styled.a
          sx={{ fontSize: "130%" }}
          href="https://github.com/beerose/theme-ui-sketchy"
        >
          GitHub
        </Styled.a>
        <Styled.root>
          <Styled.h1 sx={{ textAlign: "center", fontSize: "3em" }}>
            Sketchy Theme UI Preset
          </Styled.h1>
          <Styled.h1>Colors</Styled.h1>
          <ColorPalette omit={["modes", "header"]} />
          <Components />
          <Styled.h2>Typography</Styled.h2>
          <TypeStyle fontSize={1}>
            Body: <FontFamily name="body" />
          </TypeStyle>
          <Styled.h2>Type Scale</Styled.h2>
          <TypeScale />
          <Styled.h2>Raw JSON</Styled.h2>
          <ThemeJson />
        </Styled.root>
      </Container>
    </div>
  )
}
