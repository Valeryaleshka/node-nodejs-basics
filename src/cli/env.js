const parseEnv = () => {
  const rssEnvironments = Object.keys(process.env).filter(key => key.startsWith('RSS_'));
  const envList = rssEnvironments.map(key => `${key}=${process.env[key]}`).join('; ');
  console.log(envList);
};

parseEnv();
