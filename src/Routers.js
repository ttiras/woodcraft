import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-top";

// home page
const HomeFashionFour = lazy(() => import("./pages/home/HomeFashionFour"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/memberZone/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const PaymentSuccess = lazy(() => import("./pages/other/PaymentSuccess"))
const PasswordReset = lazy(() => import("./pages/other/PasswordReset"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const Orders = lazy(() => import("./pages/managerZone/Orders"));
const ProductManage = lazy(() => import("./pages/managerZone/ProductManage"));

const Guvenlik = lazy(() => import("./pages/documents/Guvenlik"));
const Gizlilik = lazy(() => import("./pages/documents/Gizlilik"));
const Kullanim = lazy(() => import("./pages/documents/Kullanim"));
const Cerezler = lazy(() => import("./pages/documents/Cerezler"));
const Kvkk = lazy(() => import("./pages/documents/Kvkk"));

const NetworkError = lazy(() => import("./pages/other/NetworkError"));
const SomethingWentWrong = lazy(() => import("./pages/other/SomethingWentWrong"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

function Routers() {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className='flone-preloader-wrapper'>
              <div className='flone-preloader'>
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={HomeFashionFour}
            />

            {/* Homepages */}
            <Route
              path={process.env.PUBLIC_URL + "/home-fashion-four"}
              component={HomeFashionFour}
            />

            {/* Shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard"}
              component={ShopGridStandard}
            />

            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              render={(routeProps) => (
                <Product {...routeProps} key={routeProps.match.params.id} />
              )}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              component={ProductTabLeft}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
              component={ProductTabRight}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              component={ProductSticky}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-slider/:id"}
              component={ProductSlider}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              component={ProductFixedImage}
            />

            {/* Blog pages */}
            <Route
              path={process.env.PUBLIC_URL + "/blog-standard"}
              component={BlogStandard}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
              component={BlogNoSidebar}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog/:id"}
              component={BlogDetailsStandard}
            />

            {/* Other pages */}
            <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
            />
            <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              component={MyAccount}
            />
            <Route
              path={process.env.PUBLIC_URL + "/login-register"}
              component={LoginRegister}
            />

            <Route
              path={process.env.PUBLIC_URL + "/reset-password"}
              component={PasswordReset}
            />

            <Route path={process.env.PUBLIC_URL + "/cart"} component={Cart} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              component={Wishlist}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              component={Compare}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              component={Checkout}
            />

            <Route
              path={process.env.PUBLIC_URL + "/orders"}
              component={Orders}
            />

            <Route
              path={process.env.PUBLIC_URL + "/success/order/:id"}
              component={PaymentSuccess}
            />

              <Route
              path={process.env.PUBLIC_URL + "/guvenlik"}
              component={Guvenlik}
            />

<Route
              path={process.env.PUBLIC_URL + "/gizlilik"}
              component={Gizlilik}
            />

<Route
              path={process.env.PUBLIC_URL + "/kosullar"}
              component={Kullanim}
            />

<Route
              path={process.env.PUBLIC_URL + "/cerezler"}
              component={Cerezler}
            />

<Route
              path={process.env.PUBLIC_URL + "/kvkk"}
              component={Kvkk}
            />

<Route
              path={process.env.PUBLIC_URL + "/somethingwentwrong"}
              component={SomethingWentWrong}
            />

<Route
              path={process.env.PUBLIC_URL + "/networkerror"}
              component={NetworkError}
            />

            <Route
              path={process.env.PUBLIC_URL + "/not-found"}
              component={NotFound}
            />

<Route
              path={process.env.PUBLIC_URL + "/productmanage"}
              component={ProductManage}
            />

            <Route exact component={NotFound} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default Routers;
