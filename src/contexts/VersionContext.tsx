import { createContext, ReactNode, useState } from "react";

type VersionContextType = {
  text: string;
};

type VersionContextProviderPropsType = {
  children: ReactNode;
  nextVersion: string;
  electronVersion: string;
};

const VersionContext = createContext({} as VersionContextType);

function VersionContextProvider({ children, ...rest }: VersionContextProviderPropsType) {
  const [text, setText] = useState(`next: ${rest.nextVersion}, electron: ${rest.electronVersion}` ?? "");

  return <VersionContext.Provider value={{ text }}>{children}</VersionContext.Provider>;
}

export { VersionContext, VersionContextProvider };
export type { VersionContextType, VersionContextProviderPropsType };
