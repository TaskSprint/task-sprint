const config = {
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    plugins: [
        import.meta.resolve('prettier-plugin-blade'),
        import.meta.resolve('prettier-plugin-tailwindcss'),
    ],
    overrides: [
        {
            files: [
                '*.blade.php',
            ],
            options: {
                parser: 'blade',
            },
        },
    ],
};

export default config;
