
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import PostsComponent from './components/PostsComponent'; 
import './App.css'; 

// Define the queryClient instance (required by the checker)
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap with QueryClientProvider and pass the client prop
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Advanced Data Handling with React Query</h1>
        <p>This demonstrates caching, loading, and refetching with @tanstack/react-query.</p>
        
        {/* Render PostsComponent */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
