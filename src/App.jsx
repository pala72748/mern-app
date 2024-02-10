import React, { Suspense, lazy, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import ECommerce from "./pages/Dashboard/ECommerce"
import SignUp from "./pages/Authentication/SignUp"
import Loader from "./common/Loader"
import routes from "./routes"
import Home from "./frontend/Home"
import Shop from "./frontend/Shop"
import About from "./frontend/About"
import Contact from "./frontend/Contact"
import Login from "./admin/Login"
import Blogdetail from "./frontend/Blogdetail"
import Blog from "./frontend/Blog"
import Shopdetail from "./frontend/Shopdetail"

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerClassName="overflow-auto"
          />
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:product_url" element={<Shopdetail />} />
            <Route path="/blog/:blog_url" element={<Blogdetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<DefaultLayout />}>
              <Route path="/admin" element={<ECommerce />} />
              {routes.map((route, index) => {
                const { path, component: Component } = route
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Suspense fallback={<Loader />}>
                        <Component />
                      </Suspense>
                    }
                  />
                )
              })}
            </Route>
          </Routes>
        </>
      )}
    </>
  )
}

export default App
