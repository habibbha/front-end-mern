import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import ProductSlice from "./slices/ProductSlice";
import PanierSlice from "./slices/PanierSlice";

export default configureStore({reducer:{user:UserSlice,products:ProductSlice,panier:PanierSlice}})