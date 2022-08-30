import React from 'react';
import { FcNightPortrait } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer-container container'>
          <Link to='/' className='footer-logo logo'>
          3D MAX
            <FcNightPortrait className='navbar-icon' />
             night
          </Link>
        <div className='footer-link-items'>
          <Link className='footer-link' to='/'>Kurs haqida</Link>
          <Link className='footer-link' to='/'>3D Max</Link>
          <Link className='footer-link' to='/'>Corona-render</Link>
        </div>
        <div className='footer-link-items'>
          <Link className='footer-link' to='/'>V-Ray render</Link>
          <Link className='footer-link' to='/'>Adobe PhotoShop</Link>
        </div>

        <div className='footer-right'>

      <div className='social-icons'>
          <a className='social-icon-link facebook' href='/' target='_blank' area-label='Facebook'>
          <svg className='social-icon-img' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M23.62 0H1.379A1.38 1.38 0 0 0 0 1.38v22.241A1.38 1.38 0 0 0 1.38 25h22.24A1.38 1.38 0 0 0 25 23.62V1.379A1.38 1.38 0 0 0 23.62 0Z" fill="#4267B2"/><path d="M17.26 25v-9.668h3.26l.488-3.784h-3.747v-2.41c0-1.093.303-1.838 1.87-1.838h1.987V3.924c-.345-.046-1.531-.148-2.911-.148-2.88 0-4.853 1.757-4.853 4.987v2.785h-3.247v3.784h3.248V25h3.906Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>
          </a>
          <a className='social-icon-link telegram' href='https://t.me/ds_max_3dd' target='_blank' rel='noreferrer' area-label='Telegram'>
          <svg className='social-icon-img' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25Z" fill="#039BE5"/><path d="m5.72 12.23 12.052-4.648c.56-.202 1.048.137.866.983l.002-.001-2.053 9.667c-.152.686-.559.852-1.129.53l-3.125-2.304-1.507 1.452c-.167.167-.307.308-.63.308l.222-3.18 5.791-5.233c.252-.222-.056-.347-.388-.126l-7.158 4.506-3.085-.962c-.67-.213-.684-.67.142-.993Z" fill="#fff"/></svg>
          </a>
          <a className='social-icon-link youtube' href='/' target='_blank'  rel='noreferrer' area-label='Youtube'>
          <svg className='social-icon-img' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.485 6.499a3.132 3.132 0 0 0-2.203-2.204C20.325 3.76 12.5 3.76 12.5 3.76s-7.825 0-9.782.515A3.196 3.196 0 0 0 .515 6.499C0 8.455 0 12.512 0 12.512s0 4.077.515 6.013a3.133 3.133 0 0 0 2.203 2.203c1.977.536 9.782.536 9.782.536s7.825 0 9.782-.515a3.132 3.132 0 0 0 2.203-2.203C25 16.588 25 12.532 25 12.532s.02-4.077-.515-6.033Z" fill="red"/><path d="m10.004 16.26 6.507-3.747-6.507-3.748v7.495Z" fill="#fff"/></svg>
          </a>
          <a className='social-icon-link instagram' href='/' target='_blank' area-label='instagram'>
          <svg className='social-icon-img' width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M1.562 1.701C-.402 3.741 0 5.91 0 12.495c0 5.469-.954 10.951 4.04 12.242 1.559.4 15.376.4 16.933-.002 2.079-.537 3.77-2.223 4.002-5.164.032-.41.032-13.734-.001-14.153C24.728 2.286 22.8.48 20.259.115 19.677.03 19.56.005 16.573 0 5.976.005 3.653-.466 1.563 1.701Z" fill="url(#b)"/><path d="M12.498 3.27c-3.782 0-7.374-.337-8.746 3.184-.567 1.454-.484 3.343-.484 6.047 0 2.373-.076 4.603.484 6.046 1.369 3.523 4.99 3.185 8.744 3.185 3.622 0 7.356.377 8.745-3.185.567-1.469.484-3.33.484-6.046 0-3.606.199-5.934-1.55-7.682-1.77-1.771-4.166-1.55-7.681-1.55h.004Zm-.827 1.663c7.89-.012 8.894-.89 8.34 11.295-.197 4.31-3.479 3.836-7.512 3.836-7.354 0-7.566-.21-7.566-7.567 0-7.443.584-7.56 6.738-7.566v.002Zm5.754 1.532a1.107 1.107 0 1 0 0 2.215 1.107 1.107 0 0 0 0-2.215ZM12.498 7.76a4.74 4.74 0 1 0 .001 9.48 4.74 4.74 0 0 0-.001-9.48Zm0 1.664c4.068 0 4.073 6.154 0 6.154-4.067 0-4.073-6.154 0-6.154Z" fill="#fff"/></g><defs><linearGradient id="b" x1="1.61" y1="23.403" x2="24.845" y2="3.294" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>
          </a>
        </div>

        <small className='website-bottom'>3D MAX night</small>
      </div>
      </div>

    </section>

  )
}

export default Footer;