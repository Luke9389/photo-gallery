import { renderCardItem } from "./gallery.js";
import images from '../assets/images.js';
import htmlToDOM from './html-to-DOM.js';

const gallery = document.getElementById('gallery');

images.forEach(data => {
    const dom = htmlToDOM(renderCardItem(data));
    gallery.appendChild(dom);
});

