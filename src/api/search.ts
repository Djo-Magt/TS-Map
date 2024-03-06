export const search = async (term: string) => {
    const resp = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
    );
    const data = await resp.json()
    console.log(resp)
    console.log(data)
}
