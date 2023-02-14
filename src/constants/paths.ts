const PATHS = {
    MAIN: () => '/',
    CHARACTER_PAGE: (id: number | string) => `/character/${ id }`,
    LOCATION_PAGE: (id: number | string) => `/location/${ id }`,
}

export {
    PATHS,
}