import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components';

export type Color = string;
export interface Colors {
    // base
    white: Color;
    black: Color;

    // table
    headerRow: Color;
    hoverRow: Color;
    darkRow: Color;
    lightRow: Color;

    // modal
    modalBg: Color;

    border1: Color;
    border2: Color;

    // Text
    text1: Color;
    text2: Color;
    text3: Color;
    text4: Color;
    text5: Color;

    // Colors
    green1: Color;
    red1: Color;
    gray1: Color;

    tooltipBg: string;
    tooltipText: string;
}

export interface Grids {
    sm: number;
    md: number;
    lg: number;
}

declare module 'styled-components' {
    export interface ITheme extends Colors {
        grids: Grids;

        // media queries
        mediaWidth: {
            upToExtraSmall: ThemedCssFunction<ITheme>;
            upToSmall: ThemedCssFunction<ITheme>;
            upToMedium: ThemedCssFunction<ITheme>;
            upToLarge: ThemedCssFunction<ITheme>;
        };

        // css snippets
        flexColumnNoWrap: FlattenSimpleInterpolation;
        flexRowNoWrap: FlattenSimpleInterpolation;
    }
}
