import React from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const matchQueryList = window?.matchMedia(query);
    function handleChange() {
      setMatches(matchQueryList.matches);
    }
    handleChange();
    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
