import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            accent: string;
            success: string;
            info: string;
            warning: string;
            background: string;
        },

        text: {
            light: string;
            dark: string;
        }
    }
}
