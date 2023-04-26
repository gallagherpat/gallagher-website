<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
    // Your selected Skeleton theme:
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

    // This contains the bulk of Skeletons required styles:
    import '@skeletonlabs/skeleton/styles/all.css';


    import "../app.css";
						
  </script>
  
  <slot />