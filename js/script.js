'use strict'

import { cardComponent } from "../components/cardComponent.js"

import { products } from "../data/products.js"

const renderArea = document.querySelector("#render-area")

products.map((product) => {
    renderArea.innerHTML += cardComponent(product);
}) 




