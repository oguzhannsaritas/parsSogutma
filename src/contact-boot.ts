import { initializeAnalytics } from './lib/analytics';
import { installContactTracking } from './lib/contactTracking';

// A separate, small entry protects contact conversions while the much larger
// application is still downloading. Both entries share the same GA4 instance.
initializeAnalytics();
installContactTracking(document);
