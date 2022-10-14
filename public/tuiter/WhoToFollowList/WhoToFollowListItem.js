const WhoToFollowList = (who) => {
  return `    
  <li class="list-group-item wd-list-item-min-height">
                    <img src="${who.avatarIcon}" class="wd-rounded-circle wd-list-item-side-img d-inline">
                    <div class="top-10 position-absolute d-inline p-1"  style="margin-right: 120px">
                        <b>${who.userName} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg></b>
                        <br />
                        <p class="d-lg-none d-xl-inline" style="font-size:13px;">@${who.handle}</p>
                    </div>
                    <button class="btn btn-primary rounded-pill position-absolute top-50 translate-middle-y d-inline"
                        style="right: 5%">
                        Follow
                    </button>
                </li>
    
    `;
};
export default WhoToFollowList;
