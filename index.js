// https://www.electrical.com/Products/Bus-Plugs-BRAH-Electric/100A600VFC

// test conditions
const reviewBadgeComponent = document.querySelector('.bhfZaK');
const addToCartComponent = document.querySelector('.kKYEKR');

const buildTest = () => {
  const addToCart = document.querySelector('.kKYEKR');
  // get first review and clone it, adding class of .first-review
  const firstReview = document.querySelector('.dxrlfg');
  // get data from Badge
  const totalReviews = document.querySelector('.jFzngs').textContent;
  // get data from first Review
  const reviewDate = firstReview.querySelectorAll('.doNdYi')[1].innerHTML;
  const reviewContent = firstReview.querySelector('.cwBPgn').textContent;
  const reviewer = firstReview.querySelectorAll('.MbGlP > .doNdYi + .doNdYi')[1].innerHTML;
  const reviewStars = firstReview.querySelector('[class^="react-stars-wrapper"]');
  const starsParent = reviewStars.parentElement;
  const reviewBadge = `
    <div class="bhfZaK">
        <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img alt="reviewbadge" src="/_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1536&amp;q=75" decoding="async" data-nimg="fill" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain" sizes="100vw" srcset="/_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=320&amp;q=75 320w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=810&amp;q=75 810w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1536&amp;q=75 1536w"><noscript><img alt="reviewbadge" sizes="100vw" srcSet="/_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=320&amp;q=75 320w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=810&amp;q=75 810w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1536&amp;q=75 1536w" src="/_next/image?url=%2Fimages%2Fbadges%2Fbadge.png&amp;w=1536&amp;q=75" decoding="async" data-nimg="fill" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain" loading="lazy"/></noscript></span>
        <p class="jFzngs">${totalReviews}</p>
        <div class="styles__StyledTotalRating-sc-kimda4-3 bhYriR"><div class="react-stars-wrapper-02896388970770867" style="display:flex"><div aria-label="add rating by typing an integer from 0 to 5 or pressing arrow keys" class="undefined react-stars" style="overflow:hidden;position:relative"><style>
            .react-stars-02896388970770867:before {
            position: absolute;
            overflow: hidden;
            display: block;
            z-index: 1;
            top: 0; left: 0;
            width: 50%;
            content: attr(data-forhalf);
            color: rgb(255, 188, 11);</style><span class="" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 188, 11); font-size: 25px;" data-index="0" data-forhalf="★">★</span><span class="" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 188, 11); font-size: 25px;" data-index="1" data-forhalf="★">★</span><span class="" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 188, 11); font-size: 25px;" data-index="2" data-forhalf="★">★</span><span class="" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 188, 11); font-size: 25px;" data-index="3" data-forhalf="★">★</span><span class="" style="position: relative; overflow: hidden; cursor: default; display: block; float: left; color: rgb(255, 188, 11); font-size: 25px;" data-index="4" data-forhalf="★">★</span><p style="position:absolute;left:-200rem" role="status">5</p></div></div></div>
        <p class="hsZBbW">CERTIFIED REVIEWS</p>
    </div>
  `;

  const trustAdditionHTML = `
    <div class="trust-addition">
      <div class="jTNnNQ review-badge">
        <div class="bhfZaK">
          ${reviewBadge}
        </div>
      </div>
      <div class="first-review">
        <div class="date">${reviewDate}</div>
        <div class="num-stars">${reviewContent} Stars</div>
        <div class="stars-imgs">${starsParent.innerHTML}</div>
        <div class="reviewer">${reviewer}</div>
      </div>
    </div>
  `;

  const css = `
    <style>
      .trust-addition {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1.5rem 5.5%;
      }
      .trust-addition .review-badge,
      .trust-addition .first-review {
        width: 100%;
      }
      .review-badge {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        flex-direction: row;
      }
      .first-review {
        text-align: center;
      }
      .first-review .date,
      .first-review .num-stars,
      .first-review .reviewer {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 1.5;
        color: rgb(27, 41, 59);
        font-family: Poppins;
      }
      .first-review .date {
        margin-bottom: .5rem;
      }
      .first-review .reviewer  {
        font-weight: 700;
      }
      [class^="react-stars-wrapper"] {
        justify-content: center;
      }
      @media (min-width: 640px) {
        .trust-addition .review-badge,
        .trust-addition .first-review {
          width: 50%;
        }
      }
    </style>
  `;
  addToCart.insertAdjacentHTML('afterend', css);
  addToCart.insertAdjacentHTML('afterend', trustAdditionHTML);
};

const options = {
  childList: true,
  subtree: true,
  reviewBadgeComponent: reviewBadgeComponent,
  addToCartComponent: addToCartComponent
}

let previousUrl = '';
const monitorUrls = () => {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      observer.observe(document, options);
  }
};

const testInit = (mutations) => {
  if (reviewBadgeComponent && addToCartComponent) {
    observer.disconnect();
    if (!document.querySelector('.trust-addition')) {
      buildTest();
    }
  }
}

const observer = new MutationObserver(testInit);
observer.observe(document, options);

// Global Observer that will check for a page change and start the other observer
// seems redundant as the other observer could always be running, but if there is a global observer, this would be effective for managing over tests
const globalObserver = new MutationObserver(monitorUrls);
globalObserver.observe(document, options);






  

