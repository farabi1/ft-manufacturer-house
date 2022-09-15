import Basecamp from "./Basecamp/Basecamp";
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Basecamp></Basecamp>
      </QueryClientProvider>

    </div>
  );
}

export default App;
