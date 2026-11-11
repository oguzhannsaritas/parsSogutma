import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeAnalytics } from './lib/analytics';
import { seedProductPageData } from './lib/productData';
import { getPageName, pageLoaders } from './lib/pageModules';

initializeAnalytics();

async function start() {
  const container = document.getElementById('root')!;
  // A static 404 can be served at an arbitrary URL; hydrate only an exact route.
  const prerendered = container.dataset.rendered === 'true' && container.dataset.route === window.location.pathname;
  const productId = container.dataset.productId;
  const name = getPageName(window.location.pathname);
  const serializedProduct = document.getElementById('pars-page-data')?.textContent;
  const initialProduct = prerendered && productId
    ? seedProductPageData(JSON.parse(serializedProduct ?? ''), Number(productId)) : undefined;
  const module = await pageLoaders[name]();
  const app = <StrictMode><App initialProduct={initialProduct} initialPage={{ name, component: module.default }} /></StrictMode>;
  if (prerendered) hydrateRoot(container, app);
  else createRoot(container).render(app);
}

function showBootError() {
  // Keep the complete, readable page when a model request temporarily fails.
  if (document.getElementById('pars-boot-retry')) return;
  const notice = document.createElement('aside');
  notice.id = 'pars-boot-retry';
  notice.setAttribute('role', 'alert');
  notice.className = 'fixed bottom-4 left-4 right-4 z-[100] rounded-xl border border-gray-300 bg-white p-4 text-sm text-gray-900 shadow-lg';
  notice.append(document.createTextNode('Sayfa etkileşimleri yüklenemedi. '));
  const retry = document.createElement('a');
  retry.href = window.location.href;
  retry.className = 'font-semibold text-[#0083bb] underline';
  retry.textContent = 'Sayfayı yenileyin';
  notice.append(retry);
  document.body.append(notice);
}

void start().catch(showBootError);
