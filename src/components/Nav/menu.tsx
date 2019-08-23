import * as React from 'react';

class MenuItem extends React.Component {
    render() {
        return (
            <div className="nav__items__menu">
                <ul className="navmenu">
                    <li className="navmenu__parent navmenu__parent--store navmenu__parent--with-childs">
                        <a className="navmenu__parent__anchor" href="/es/gardens/tienda-pan" target="_self">
                            <span className="navmenu__parent__anchor__icon icon__store">
                            </span>
                            <span className="navmenu__parent__anchor__text">TAQUILLA</span>
                        </a>
                        <ul className="navmenu__parent__child">
                            <li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/gardens/tienda-pan" target="_self">Taquilla</a>
                            </li><li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/movies" target="_self">Todos los géneros</a>
                            </li>
                            <li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/lists/estrenos-imprescindibles-en-taquilla" target="_self">Estrenos</a>
                            </li>
                            <li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/lists/peliculas-mas-vistas-en-alquiler" target="_self">Populares</a>
                            </li>
                            <li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/lists/cine-espanol" target="_self">Cine Español</a>
                            </li>
                            <li className="navmenu__parent__child__item">
                                <a className="navmenu__parent__child__item__anchor" href="/es/gardens/infantil-taquilla" target="_self">Family</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuItem