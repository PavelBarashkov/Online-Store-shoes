import React from 'react'
import './catalogContainer.css'

export const CatalogContainer = ({children}) => {
  return (
    <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {children}
    </section>
  )
}
