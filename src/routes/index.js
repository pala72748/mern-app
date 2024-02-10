import { lazy } from "react"
import { useParams } from "react-router-dom"

const Calendar = lazy(() => import("../pages/Calendar"))
const AddProduct = lazy(() => import("../pages/Product/AddProduct"))
const AllProduct = lazy(() => import("../pages/Product/AllProduct"))
const Updateproduct = lazy(() => import("../pages/Product/Updateproduct"))
const Allblog = lazy(() => import("../pages/blog/Allblog"))
const Addblog = lazy(() => import("../pages/blog/Addblog"))
const AddProductCategory = lazy(() => import("../pages/ProductCategory/AddProductCategory"))
const UpdateProductCategory = lazy(() => import("../pages/ProductCategory/UpdateProductCategory"))
const AllProductCategory = lazy(() => import("../pages/ProductCategory/AllProductCategory"))
const Addblogcategory = lazy(() => import("../pages/blogCategory/Addblogcategory"))
const Allblogcategory = lazy(() => import("../pages/blogCategory/Allblogcategory"))
const UpdateBlogCategory = lazy(() => import("../pages/blogCategory/UpdateBlogCategory"))
const Chart = lazy(() => import("../pages/Chart"))
const FormElements = lazy(() => import("../pages/Form/FormElements"))
const FormLayout = lazy(() => import("../pages/Form/FormLayout"))
const Profile = lazy(() => import("../pages/Profile"))
const Settings = lazy(() => import("../pages/Settings"))
const Tables = lazy(() => import("../pages/Tables"))
const Alerts = lazy(() => import("../pages/UiElements/Alerts"))
const Buttons = lazy(() => import("../pages/UiElements/Buttons"))

const coreRoutes = [
  {
    path: "/add-product",
    title: "Add Product",
    component: AddProduct
  },
  {
    path: "/all-product",
    title: "All Product",
    component: AllProduct
  },
  {
    path: "/update-product/:aid",
    title: "Edit Product",
    component: Updateproduct
  },
  {
    path: "/all-blog",
    title: "All Blog",
    component: Allblog
  },
  {
    path: "/add-blog",
    title: "Add Blog",
    component: Addblog
  },
  {
    path: "/add-product-category",
    title: "Add Product Category",
    component: AddProductCategory
  },
  {
    path: "/update-product-category/:aid",
    title: "Edit Product Category",
    component: UpdateProductCategory
  },
  {
    path: "/all-product-category",
    title: "All Product Category",
    component: AllProductCategory
  },
  {
    path: "/add-blog-category",
    title: "Add Blog Category",
    component: Addblogcategory
  },
  {
    path: "/all-blog-category",
    title: "All Blog Category",
    component: Allblogcategory
  },
  {
    path: "/update-blog-category/:aid",
    title: "Edit Blog Category",
    component: UpdateBlogCategory
  },
  {
    path: "/profile",
    title: "Profile",
    component: Profile
  },
  {
    path: "/forms/form-elements",
    title: "Forms Elements",
    component: FormElements
  },
  {
    path: "/forms/form-layout",
    title: "Form Layouts",
    component: FormLayout
  },
  {
    path: "/tables",
    title: "Tables",
    component: Tables
  },
  {
    path: "/settings",
    title: "Settings",
    component: Settings
  },
  {
    path: "/chart",
    title: "Chart",
    component: Chart
  },
  {
    path: "/ui/alerts",
    title: "Alerts",
    component: Alerts
  },
  {
    path: "/ui/buttons",
    title: "Buttons",
    component: Buttons
  },
]

const routes = [...coreRoutes]
export default routes
