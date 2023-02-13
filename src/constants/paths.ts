const PATHS = {
    MAIN: () => '/',
    CHARACTER_DETAIL: (id: number | string) => `character/${ id }`,
}

export {
    PATHS,
}