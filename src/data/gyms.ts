const makePhotos = (name: string, count: number) =>
    Array.from({ length: count }, (_, i) => `/images/gym/${name}/${i + 1}.jpg`);

export const gyms = [
    {
        location: "Купчино",
        name: "kupchino",
        address: "ул. Будапештская 97к2",
        photos: makePhotos("kupchino", 7),
    },
    {
        location: "Шушары",
        name: "shushari",
        address: "ул. Окуловская 18к1",
        photos: makePhotos("shushari", 24),
    },
];