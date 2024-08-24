const ForecastSkeleton = () => {
  return (
    <div className="p-4 rounded-md shadow-md border">
      <div className="h-6 w-72 bg-gray-300 rounded-md"></div>
      <div className="flex overflow-x-auto space-x-2 py-2 flex-wrap mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-2 border-b-2 border-transparent">
            <div className="h-4 w-24 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-32 bg-gray-200 rounded-md mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastSkeleton