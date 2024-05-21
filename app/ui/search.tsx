'use client'

import { useGeolocation } from '@/hooks/useGeolocation';
import MagnifyingGlassIcon from '@/icons/MagnifyingGlassIcon';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('city') || '');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading } = useGeolocation(searchTerm)

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('city', term);
    } else {
      params.delete('city')
    }
    replace(`${pathname}?${params.toString()}`);
    setSearchTerm(term)
    setShowOptions(!!term)
  }, 300)

  const handleOptionClick = (option: { name: string, state: string, lon: number, lat: number }) => {
    setSearchTerm(option.name);
    setShowOptions(false);
    console.log(option.lat, option.lon)
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (data && data.length > 0) {
      if (e.key === 'ArrowDown' && selectedOptionIndex !== null && selectedOptionIndex < data.length - 1) {
        setSelectedOptionIndex(selectedOptionIndex + 1);
      } else if (e.key === 'ArrowUp' && selectedOptionIndex !== null && selectedOptionIndex > 0) {
        setSelectedOptionIndex(selectedOptionIndex - 1);
      } else if (e.key === 'Enter' && selectedOptionIndex !== null) {
        setSearchTerm(data[selectedOptionIndex].name);
        setShowOptions(false);
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    setSelectedOptionIndex(index);
  };

  return (
    <>
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id='search'
        ref={inputRef}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        defaultValue={searchTerm}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
    {showOptions && data && data.length > 0 && (
      <ul className="mt-2 flex flex-col bg-white border border-gray-200 rounded-md shadow-lg">
        {isLoading && <li className="p-2">Loading...</li>}
        {data?.map((d, i) => (
          <li 
            key={i} 
            className={`p-2 cursor-pointer ${i === selectedOptionIndex ? 'bg-gray-100' : ''}`}
            onClick={() => handleOptionClick(d)}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {d.name}, {d.state}
          </li>
        ))}
      </ul>
    )}
    </>
  );
}