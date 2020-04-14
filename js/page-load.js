document.write(<header>
  <div id="homeHeader">
    <div class="row" id="topRow">
      <div class="col-sm-4">
        <a href="home.html"><img src="../Images/notableWholesaleLogo.png" id="mainLogo" alt=""></a>
      </div>

      <div class="col-sm-4" id="searchForm">
        <form class="form-inline-custom">
          <input class="searchWidth mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="headerButton btn my-2 my-sm-0" id="searchBtn" type="submit">Search</button>
        </form>
      </div>

      <div class="col-sm-4">
        <div class="leftHeader">
          <span class="glyphicon glyphicon-shopping-cart"></span>
          <a class="headerButton btn" href="#" role="button">Cart</a>
          <a class="headerButton btn" href="#" role="button">My Account</a>
        </div>
      </div>
    </div>
  </div>
  <div class="productMenu">
    <div class="d-flex justify-content-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Groceries
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="groceries.html">All Groceries</a>
          <a class="dropdown-item" href="meatSticks.html">Meat Sticks</a>
          <a class="dropdown-item" href="crackers.html">Crackers</a>
          <a class="dropdown-item" href="tofu.html">Free-range Tofu</a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Clothing
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
          <a class="dropdown-item" href="clothing.html">All Clothing</a>
          <a class="dropdown-item" href="romphim.html">Romphim</a>
          <a class="dropdown-item" href="onesie.html">Onesie</a>
          <a class="dropdown-item" href="snuggy.html">Snuggy</a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Electronics
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="electronics.html">All Electronics</a>
          <a class="dropdown-item" href="computer.html">Computer</a>
          <a class="dropdown-item" href="HDMI.html">HDMI Cable</a>
          <a class="dropdown-item" href="TV.html">Television</a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sporting Goods
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="sporting-goods.html">All Sporting Goods</a>
          <a class="dropdown-item" href="nunchucks.html">Nunchucks</a>
          <a class="dropdown-item" href="javelin.html">Javelin</a>
          <a class="dropdown-item" href="skates.html">Rocket Skates</a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink5" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Office Supplies
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="office-supplies.html">All Office Supplies</a>
          <a class="dropdown-item" href="stapler.html">Stapler</a>
          <a class="dropdown-item" href="shredder.html">Paper Shredder</a>
          <a class="dropdown-item" href="3dprinter.html">3D Printer</a>
        </div>
      </nav>
    </div>
  </div>
</header>);

document.write(<footer>
            <nav class="" id="footer">
              <div class="container">
                <div class="row">
                  <div class="col-sm-4 mx-auto">
                    <h5 class="font-weight-bold text-uppercase mt-3">About</h5>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#!">Contact Us</a>
                      </li>
                      <li>
                        <a href="#!">About Us</a>
                      </li>
                      <li>
                        <a href="#!">Careers</a>
                      </li>
                      <li>
                        <a href="#!">User Stories</a>
                      </li>
                      <li>
                        <a href="#!">Testimonials</a>
                      </li>
                      <li>
                        <a href="#!">Press</a>
                      </li>
                      <li>
                        <a href="#!">Photos</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4 mx-auto">
                    <h5 class="font-weight-bold text-uppercase mt-3">Help</h5>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#!">Payments</a>
                      </li>
                      <li>
                        <a href="#!">Shipping</a>
                      </li>
                      <li>
                        <a href="#!">Cancellation & Returns</a>
                      </li>
                      <li>
                        <a href="#!">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4" id="socialMediaIcons">
                    <h5 class="font-weight-bold text-uppercase mt-1">Social</h5>
                    <span>
                      <a class="fb-ic mr-3" role="button"><i class="fa fa-lg fa-facebook-f"></i></a>
                      <a class="tw-ic mr-3" role="button"><i class="fa fa-lg fa-twitter"></i></a>
                      <a class="ins-ic mr-3" role="button"><i class="fa fa-lg fa-instagram"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
            <div id="footer-copyright" class="footer-copyright text-center py-3">© 2020 Notable Wholesale
            </div>
          </footer>)
