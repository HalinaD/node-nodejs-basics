const parseEnv = () => {
    const rssVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'));

    const rssVariablesOutput = rssVariables
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

console.log(rssVariablesOutput);
};

parseEnv();