import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="row">
                <div class="d-inline-flex mb-2">
                    <input type="text" class="form-control rounded-pill me-5" placeholder="Search Twitter">
                    <a class="wd-gear" href="explore-settings.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="2.8rem" fill="rgb(29,161,242)"
                            class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path
                                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fs-6" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-inline">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/space.jpeg" class="w-100"/>
                <h1 class="position-absolute text-white wd-text-position">SpaceX Starship</h1>
            </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
