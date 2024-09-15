const pallet = {
    primary: {
        light: 'lightgreen',
        default: 'green',
        darker: 'darkgreen',
    },
    onSurface: {
        light: 'grey',
        default: 'black',
    },
    surface: {
        default: '#F7F9FD',
    },
    base: {
        white: 'white',
        black: 'black',
    }
}
const lightTheme = {
    border: pallet.primary.default,
    text: pallet.onSurface.default,
    placeholder: pallet.onSurface.light,
    screenBackground: pallet.surface.default,
    title: pallet.primary.default,
    button: pallet.primary.default,
    textButton: pallet.base.white,
    loading: pallet.primary.default,
}

export const Colors = lightTheme