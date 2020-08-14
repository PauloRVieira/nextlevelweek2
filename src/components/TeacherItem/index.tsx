import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/46491565?s=460&u=899eab7e3c34f7097e7fca34187c18fd984a64bc&v=4" alt="Paulo Vieira" />
                <div>
                    <strong>Paulo Vieira</strong>
                    <span>Programação e Fotografia</span>
                </div>
            </header>

            <p>
                asdasd adsas asaasd sa as sa
                <br /><br />
                asdsasdasda
                asddsassadssa
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 55,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entre em contato" />
                    Entre em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;