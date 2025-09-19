import React, { useState } from 'react';
import { ShoppingCart, Search, User, ChevronDown, Menu, LogOut } from 'lucide-react';
import './Header.css';

const Header = ({ currentPage, onNavigate, isLoggedIn, isAdmin, onLogout }) => {
    // const [mobileMenuOpen, setMobileMenuOpen] = usestate(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo" onClick={() => onNavigate('home')}>
                        <span className="logo-text">LaSape</span>
                    </div>

                    <nav className='nav'>
                        <a className={currentPage == 'home' ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate('home')}>Accueil</a>
                        <div className="nav-dropdown">
                            <a className='nav-link' onClick={() => setDropDownOpen(!dropdownOpen)}>
                                Boutique <ChevronDown size={16} />
                            </a>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <a onClick={() => { onNavigate('product');
                                        setDropdownOpen(false);
                                    }}>Doudounes
                                    </a>
                                    <a onClick={() => { onNavigate('product');
                                        setDropdownOpen(false);
                                    }}>Chaussures
                                    </a>
                                    <a onClick={() => { onNavigate('product');
                                        setDropdownOpen(false);
                                    }}>Accessoires
                                    </a>
                                </div>
                            )}
                        </div>
                        <a className='nav-link'>Collection</a>
                        <a className='nav-link'>Contact</a>
                    </nav>

                    <div className="header-actions">
                        <Search className="header-icon" />
                        {isLoggedIn ? (
                            <>
                                {isAdmin && (
                                    <User className="header-icon admin-icon"
                                    onClick={() => onNavigate('dashboard')} />
                                )}
                                <LogOut className="header-icon"
                                onClick={onLogout} />
                            </>
                        ) : (
                            <User className="header-icon" onClick={() => onNavigate('login')} />
                        )}
                        <ShoppingCart className="header-icon" />
                    </div>

                    {/* <Menu className="mobile-menu-icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/> */}
                </div>
            </div>
        </header>
    );
};

export default Header;