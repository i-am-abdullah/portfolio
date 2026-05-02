import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    document.getElementById('initial-loader')?.remove();
  }, []);

  return (
    <div className="fixed inset-0 bg-[#010103] z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-400 border-t-teal-400 rounded-full animate-spin"></div>
        <div className="mt-4 text-gray-400 text-center font-generalsans">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;