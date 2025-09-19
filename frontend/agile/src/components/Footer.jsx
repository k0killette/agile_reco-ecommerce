import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Informations</h3>
                    <p>Numéro factice</p>
                    <p>Mail factice</p>
                </div>

                <div className="footer-section">
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><a href="#">Politique de cookies</a></li>
                        <li><a href="#">Retour et remboursement</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">CGV</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <div className="newsletter">
                        <input type="email" placeholder="Adresse mail" />
                        <button className="btn-primary">S'inscrire</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;