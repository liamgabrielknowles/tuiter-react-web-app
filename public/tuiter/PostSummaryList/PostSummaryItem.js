const PostSummaryItem = (post) => {
  return `    
    <li class="list-group-item position-relative" style="min-height: 115px;">
    <div class="container ml-1 mt-2 d-inline-flex">
        <div class="container ml-0 mt-0 mb-0 p-0" style="margin-right: 100px;">
        <p class="fs-6 text-secondary p-0 m-0">${post.topic}</p>
        <div class="d-flex p-0">
            <b>${post.userName} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg></b>
            <p class="fs-6 text-secondary m-0 ps-1"> - ${post.time}</p>
        </div>
        <p class="fs-6"><b>${post.title}</b>
        </p>    
    </div>                
        <img src="${post.image}" class=" end-0 top-50 p-1" style="height:100px; width: 100px; border-radius: 15px;">
    </div>
</li>
      `;
};
export default PostSummaryItem;
