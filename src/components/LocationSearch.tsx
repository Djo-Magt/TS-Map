import { useState } from "react"
import type { Place } from "../api/place"
import { search } from "../api/search"

interface LocationSearchProps {
    onPlaceClick :(place: Place) => void
}

export default function LocationSearch({onPlaceClick} : LocationSearchProps) {


    const [places, setPlaces] = useState <Place[]>([]);
    const [term, setTerm] = useState ('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await search(term)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="term">
                Search
            </label>
            <input
                className="border border-gray-300 rounded-md focus:border-indigo-500 px-4 w-full"
                id="term"
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </form>
    </div>
}
