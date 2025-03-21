
import { useAuth } from '@/contexts/AuthContext';

export const useNavLinks = () => {
  const { isAuthenticated, isAdmin, isManager, isPemimpin, isKaryawan } = useAuth();
  
  const getNavLinks = () => {
    const links = [
      { path: '/', label: 'Dashboard' },
      { path: '/policies', label: 'Kebijakan' },
    ];
    
    if (isAuthenticated) {
      // All authenticated users can see Employees link
      links.push({ path: '/employees', label: 'Karyawan' });
      
      // All users can access documents page
      links.push({ path: '/documents', label: 'Dokumen' });
      
      if (isAdmin) {
        links.push({ path: '/criteria', label: 'Kriteria' });
        links.push({ path: '/evaluation', label: 'Penilaian' });
      } else if (isManager) {
        links.push({ path: '/evaluation', label: 'Penilaian' });
      }
      
      if (isPemimpin) {
        links.push({ path: '/manager-evaluations', label: 'Evaluasi Manager' });
      }
    }
    
    return links;
  };

  return getNavLinks();
};
