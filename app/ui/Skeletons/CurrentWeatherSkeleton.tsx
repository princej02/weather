const CurrentWeatherSkeleton = () => {
  return (
    <div className="p-4 rounded-md shadow-md border">
      <div className="flex">
        <div>
          <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-32 bg-gray-200 rounded-md mt-2"></div>
        </div>
        <div className="ml-auto relative flex w-14 h-14 bg-gray-200 rounded-full"></div>
      </div>
      <div className="flex mt-4">
        <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
        <div className="ml-auto flex flex-col justify-between text-sm text-gray-400">
          <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
          <div className="h-4 w-16 bg-gray-200 rounded-md mt-2"></div>
        </div>
      </div>
      <div className="h-4 w-40 bg-gray-200 rounded-md mt-4"></div>
    </div>
  )
}

export default CurrentWeatherSkeleton