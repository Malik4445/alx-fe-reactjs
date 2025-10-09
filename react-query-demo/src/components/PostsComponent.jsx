

const PostsComponent = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error, 
    refetch, 
    isFetching 
  } = useQuery('postsData', fetchPosts, {
      // 1. ADD CACHING OPTIONS HERE:
      // These options demonstrate knowledge of React Query's cache controls.
      staleTime: 60000,           // Data is considered fresh for 1 minute (60 seconds)
      cacheTime: 300000,          // Data will stay in the cache for 5 minutes (300 seconds) after the last component unmounts
      refetchOnWindowFocus: true, // Auto-refetch when the browser window regains focus
      keepPreviousData: false,    // Set to false for a clean fetch, or true if required

      // You can remove or comment out options previously set in App.jsx if you used defaultOptions there.
  }); 
  
  // ... (rest of the component logic remains the same) ...
};

export default PostsComponent;