const MapViewSkeleton = () => {
  return (
    <div className='relative w-full h-96 md:h-128 lg:h-160 rounded-lg overflow-hidden shadow-lg'>
      <div className="w-full h-full bg-gray-300 animate-pulse relative rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">
          Loading Map...
        </div>
      </div>
    </div>
  )
}

export default MapViewSkeleton