(() => {
  const userLang = navigator.language || navigator.userLanguage; // get the user's preferred language

  // define supported language routes
  const languageMap = {
    de: "/de",
    fr: "/fr",
    it: "/it",
  };

  const primaryLang = userLang.split("-")[0]; // extract the primary language code
  const currentPath = window.location.pathname;
  const isLocalized = Object.values(languageMap).some((path) =>
    currentPath.startsWith(path)
  );

  if (!isLocalized && languageMap[primaryLang]) {
    window.location.replace(languageMap[primaryLang]); // this will redirect to the corresponding language path
  }
})();
