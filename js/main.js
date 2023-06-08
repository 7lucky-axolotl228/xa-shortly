const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results--open');
  });
}



const elCopyUrlShortLinkButton = document.querySelector('.js-copy-short-link-button');
const elUrlShortener = document.querySelector('.url-shortener');

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function(evt) {
    if (evt.target.matches('.js-copy-short-link-button')) {
      /* Change button text */
      evt.target.textContent = 'Copied!';

      /* Change button bgcolor */
      evt.target.classList.add('btn-black');

      /* Copy short link to clipboard */

      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

      /* Reset button text and class*/
      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('btn-black');
      }, 1400);
    }
  });
}
