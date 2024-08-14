
const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin" style={{ borderTopColor: '#3498db' }}></div>
    </div>
  );
};

export default Spinner;
