const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          
          <a class="list-group-item" href="/">
          <i class="fa fa-house-user d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Home</p></a>

          <a class="list-group-item" href="/">
          <i class="fa fa-hashtag d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Explore</p></a>
          
          <a class="list-group-item" href="/">
          <i class="fa fa-bell d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Notifications</p></a>
          
          <a class="list-group-item" href="/">
          <i class="fa fa-envelope d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Messages</p></a>

          <a class="list-group-item" href="/">
          <i class="fa fa-bookmark d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Bookmarks</p></a>

          <a class="list-group-item" href="/">
          <i class="fa fa-list d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Lists</p></a>

          <a class="list-group-item" href="/">
          <i class="fa fa-user d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">Profile</p></a>

          <a class="list-group-item" href="/">
          <i class="fa fa-ellipsis-h d-inline"></i>
          <p class="d-sm-none d-md-none d-lg-none d-xl-inline">More</p></a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;