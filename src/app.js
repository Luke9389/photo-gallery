import { renderCardItem } from "./gallery.js";
import images from '../assets/images.js';
import htmlToDOM from './html-to-DOM.js';

const gallery = document.getElementById('gallery');
const filter = document.getElementById('filter');
const sort = document.getElementById('sort');

//local array is a slice of images

populateGallery();
populateGallery('rhino');

// another event listener for sort

filter.addEventListener('change', () => {
    console.log(filter);

    populateGallery();
    // to do
    // apply styles
    // populate list
    // ignore first item in event listener
});

function populateGallery(input = '') {
    // if the filter is 'all' then local array is reset to images (array.slice)
    // else reduce local array by removing filtered items (array.filter)

    //sort the local array based on sort parameter (array.sort)

    images.forEach(data => {   //// will be localArray.foreach

        const dom = htmlToDOM(renderCardItem(data));
        gallery.appendChild(dom);
    });
}
