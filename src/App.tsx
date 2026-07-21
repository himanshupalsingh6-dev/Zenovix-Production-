import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import PageLayout from '@/components/layout/PageLayout';
import Home from '@/pages/home';
import About from '@/pages/about';
import Services from '@/pages/services';
import ServiceDetail from '@/pages/services/detail';
import Portfolio from '@/pages/portfolio';
import Process from '@/pages/process';
import Technologies from '@/pages/technologies';
import FAQ from '@/pages/faq';
import Contact from '@/pages/contact';
import Admin from '@/pages/admin';
import PrivacyPolicy from '@/pages/privacy-policy';
import TermsConditions from '@/pages/terms-conditions';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Admin dashboard — no site header/footer */}
      <Route path="/admin" component={Admin} />

      {/* Public site */}
      <Route>
        <PageLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services/:slug" component={ServiceDetail} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/process" component={Process} />
            <Route path="/technologies" component={Technologies} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route component={NotFound} />
          </Switch>
        </PageLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
