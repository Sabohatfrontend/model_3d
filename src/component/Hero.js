import React from 'react'
import './Hero.css';
import heroImg from '../img/hero.jpg';


function Hero() {
  return (
    <>
      <div className='content'>
        <h2 className='hero-header'><span className='color-text'>3D MAX</span> kursida online O'qing</h2>
        <a className='button' href='https://t.me/ds_max_3dd' target='_blank' rel='noreferrer' area-label='Telegram'>Online o'qish</a>
      </div>
      <div className='container'>
        <div className='hero'>
          <h2 className='hero-header'>3ds Max, VRay, Photoshoplarni masofaviy o'qish</h2>
          <div className='hero-content'>
            <img className='heroImg' src={heroImg} alt='' width={500} height={500} />
            <div className='hero-wrap'>
              <p className='hero-text'>Masofaviy kurslar 3ds Max, VRay, AutoCAD, Photoshop ta'limning qulay zamonaviy shaklidir. Masofaviy ta'lim sizga istalgan joyda, istalgan vaqtda individual jadval bo'yicha o'qish imkonini beradi. Hech qayerga borishingiz shart emas. Siz bugun o'rganishni boshlashingiz mumkin!
              </p>
              <p className='hero-text'>Masofaviy ta'lim - bu yuzma-yuz o'qitishning o'ziga xos muqobili! Ammo shuni unutmangki, taqdim etilgan sifatli o'quv materiallari sizni muntazam uy vazifasini bajarish zaruratidan xalos qilmaydi.</p>
              <a className='button' href='https://t.me/ds_max_3dd' target='_blank' rel='noreferrer' area-label='Telegram'>Online o'qish</a>
            </div>
          </div>
        </div>

        <div className='about'>
          <h2 className='hero-header'>Online kurs narxi</h2>
          <p className='hero-text'>
            Kurs davomiyligi 3 oy va haftada 3 kun. Seshanba, Payshanba va shanba kunlari soat 22:00 dan 23:40 gacha davom etadi. Narxi oyiga atigi 400 ming so'm.
          </p>
          <a className='button' href='https://t.me/ds_max_3dd' target='_blank' rel='noreferrer' area-label='Telegram'>Online o'qish</a>
        </div>

        <div className='feature feature-container'>
          <h2 className='hero-header'>3d grafika uchun kompyuter tanlash</h2>
          <table className='tbl'>
            <thead>
              <tr>
                <th>Harakteristikasi</th>
                <th>Minimal</th>
                <th>Yaxshi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='td'>Operation sistema</td>
                <td>	Windows 10 (64-razryadli)</td>
                <td>	Windows 10 (64-razryadli)</td>
              </tr>
              <tr>
                <td className='td'>protsessor</td>
                <td>Intel i5 (yoki yaxshirog'i minimum 4 yadroli)</td>
                <td>Intel i7 (yoki yaxshirog'i minimum 6 yadroli va undan yuqori)</td>
              </tr>
              <tr>
                <td className='td'>Xotira</td>
                <td>Minimum 4Gb (Kengaytirish imkoniyatiga ega bo'lishi kerak)</td>
                <td>Minimum 16 Gb (32-48 Gbgacha kengaytirish imkoniyatiga ega bo'lishi kerak)</td>
              </tr>
              <tr>
                <td className='td'>VideoKarta</td>
                <td>	nVidia GeForce 750/950/1050 yoki yaxshirog'i</td>
                <td>nVidia GeForce 760/960/1060 yoki yana ham yaxshirog'i 780/980/1080/2080</td>
              </tr>
              <tr>
                <td className='td'>Xotira</td>
                <td>Minimum 4Gb (Kengaytirish imkoniyatiga ega bo'lishi kerak)</td>
                <td>Minimum 16 Gb (32-48 Gbgacha kengaytirish imkoniyatiga ega bo'lishi kerak)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Hero;
