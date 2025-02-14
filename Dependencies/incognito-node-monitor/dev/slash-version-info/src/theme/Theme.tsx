import React, { useMemo } from 'react';
import styled, {
    ITheme,
    ThemeProvider as StyledComponentsThemeProvider,
    createGlobalStyle,
    css,
} from 'styled-components';
import { useSelector } from 'react-redux';
import { Text, TextProps } from 'rebass';
import { Colors } from './Theme.styled';
import { darkModeSelector } from './Theme.selector';
import { appDomain } from '../configs/Configs.Envs';

const MEDIA_WIDTHS = {
    upToExtraSmall: 500,
    upToSmall: 720,
    upToMedium: 960,
    upToLarge: 1280,
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
    (accumulator, size) => {
        (accumulator as any)[size] = (a: any, b: any, c: any) => css`
            @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
                ${css(a, b, c)}
            }
        `;
        return accumulator;
    },
    {},
) as any;

const white = '#FFFFFF';
const black = '#000000';

export function colors(darkMode: boolean): Colors {
    return {
        // base
        white,
        black,

        // table
        headerRow: darkMode ? '#f5f5f5' : '#f5f5f5',
        hoverRow: darkMode ? '#e0e0e0' : '#e0e0e0',
        darkRow: darkMode ? '#F5F5F5' : '#F5F5F5',
        lightRow: darkMode ? white : white,

        // modal
        modalBg: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',

        border1: darkMode ? '#CBCBCB' : '#CBCBCB',
        border2: darkMode ? '#E0E0E0' : '#E0E0E0',

        // text
        text1: darkMode ? white : black,
        text2: darkMode ? '#9e9e9e' : '#9e9e9e',
        text3: darkMode ? '#616161' : '#616161',
        text4: darkMode ? '#797979' : '#797979',
        text5: darkMode ? '#595959' : '#595959',

        green1: darkMode ? '#34C759' : '#34C759',
        red1: darkMode ? '#FE4D4D' : '#FE4D4D',
        gray1: darkMode ? '#D8D8D8' : '#D8D8D8',

        tooltipBg: black,
        tooltipText: white,
    };
}

export function appTheme(darkMode: boolean): ITheme {
    return {
        ...colors(darkMode),

        grids: {
            sm: 8,
            md: 12,
            lg: 24,
        },

        // media queries
        mediaWidth: mediaWidthTemplates,

        // css snippets
        flexColumnNoWrap: css`
            display: flex;
            flex-flow: column nowrap;
        `,
        flexRowNoWrap: css`
            display: flex;
            flex-flow: row nowrap;
        `,
    };
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
    color: ${({ color, theme }) => (theme as any)[color]};
`;

export const TYPE = {
    main(props: TextProps) {
        return <TextWrapper fontWeight={500} color="black" {...props} />;
    },
    link(props: TextProps) {
        return <TextWrapper fontWeight={500} color="black" {...props} />;
    },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useSelector(darkModeSelector);

    const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
};

export const FixedGlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(false).black}; 
 }
.modified-item:hover {
    border-bottom: 2px solid transparent !important;
    color: inherit !important;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
}
`;

export const ThemedGlobalStyle = createGlobalStyle`
    * {
        font-family: 'SF-Pro-Display';
        font-display: swap;
    }
    body {
      min-height: 100vh;
      box-sizing: border-box;
    }

    @font-face {
        font-family: 'SF-Pro-Display';
        src: url('${appDomain}/assets/fonts/SF-Pro-Display/SF-Pro-Display-Bold.otf');
        font-style: normal;
        font-display: swap;
        font-weight: 700;
    }

    @font-face {
        font-family: 'SF-Pro-Display';
        src: url('${appDomain}/assets/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf');
        font-style: normal;
        font-display: swap;
        font-weight: 500;
    }
    
    @font-face {
        font-family: 'SF-Pro-Display';
        src: url('${appDomain}/assets/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf');
        font-style: normal;
        font-display: swap;
        font-weight: 400;
    }

    .table-row {
        text-align: center;
        font-weight: 500;
    }
    
    .table-row-light {
        background-color: ${({ theme }: { theme: ITheme }) => theme.lightRow};
    }
    
    .table-row-dark {
        background-color: ${({ theme }: { theme: ITheme }) => theme.darkRow};
    }
    
    .ant-pagination-item-active {
        border-color: black;
    }
    
    .ant-pagination-item-active a {
        color: black;
    }
`;
