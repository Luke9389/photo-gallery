export function renderCardItem(data) {
    const card = /*html*/ `
        <div class="card">
            <div class="badge">${data.horns}</div>
            <img class="gallery-image" src="${data.url}" alt="${data.title} image">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        </div>
    `;

    return card;
}