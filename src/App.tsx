import { LayoutProvider } from './providers/LayoutProvider';
import { AppLayout } from './components/layout/AppLayout';
import { PageRouter } from './router/PageRouter';
import './globals.css';

function App() {
  return (
    <LayoutProvider initialPage="overview">
      <AppLayout>
        <PageRouter />
      </AppLayout>
    </LayoutProvider>
  );
}

export default App;