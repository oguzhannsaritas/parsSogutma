import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ProductPageData } from '../lib/productData';

type InitialPage = { product?: ProductPageData; initialRender: boolean };
const InitialPageContext = createContext<InitialPage>({ initialRender: true });

export function InitialPageProvider({ product, children }: { product?: ProductPageData; children: ReactNode }) {
    const [initialRender, setInitialRender] = useState(true);
    useEffect(() => { setInitialRender(false); }, []);
    return <InitialPageContext.Provider value={{ product, initialRender }}>{children}</InitialPageContext.Provider>;
}

export const useInitialPage = () => useContext(InitialPageContext);
