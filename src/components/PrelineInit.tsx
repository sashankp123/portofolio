import { useEffect } from 'react';

const PrelineInit = () => {
  useEffect(() => {
    import('preline')
  }, [])
  
  return null
}

export default PrelineInit; 