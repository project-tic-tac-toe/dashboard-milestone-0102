import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <div id="page" class="page">
        <div id="header" class="header show-header">
          <div class="row-main">
            <div class="menubar menubar-overlay">
              <div class="menubar-cell menubar-header">
                <div class="logo logo-image">
                  <a
                    class="logo-element"
                    href="https://www.vermont.eu"
                    title="Vermont"
                  >
                    <span>
                      <img
                        src="https://www.vermont.eu/files/453-logo-vermont-v1-barva-black.svg"
                        alt="Vermont"
                        class="is-loaded"
                      />
                    </span>
                  </a>
                </div>
              </div>

              <div class="menubar-cell menubar-primary" data-nav="priority">
                <div class="menubar-container">
                  <button
                    type="button"
                    data-toggle="nav"
                    data-target="#menu-main"
                    class="nav-toggle"
                    aria-expanded="false"
                  >
                    <span class="nav-toggle-icon"></span>{" "}
                    <span class="nav-toggle-label">Menu</span>
                  </button>

                  <nav id="menu-main" class="nav">
                    <ul id="menu-1" class=" reset">
                      <li class="color-pink">
                        <a href="https://www.vermont.eu/znacky" class="">
                          <span>Značky</span>
                        </a>
                      </li>
                      <li class="color-blue">
                        <a href="https://www.vermont.eu/o-nas" class="">
                          <span>O nás</span>
                        </a>
                      </li>
                      <li class="color-green">
                        <a href="https://www.vermont.eu/club" class="">
                          <span>Club</span>
                        </a>
                      </li>
                      <li class="color-pink">
                        <a href="https://www.vermont.eu/inspirace" class="">
                          <span>Inspirace</span>
                        </a>
                      </li>
                      <li class="color-yellow">
                        <a href="https://www.vermont.eu/kariera" class="">
                          <span>Kariéra</span>
                        </a>
                      </li>

                      <li class="color-orange is-last">
                        <a href="https://www.vermont.eu/kontakt" class="">
                          <span>Kontakt</span>
                        </a>
                      </li>
                      <li
                        data-nav-priority-menu=""
                        class="nav-priority-dropdown dropdown"
                        aria-hidden="true"
                      >
                        <a
                          id="nav-link-more-0"
                          href="#"
                          class="nav-priority-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-nav-priority-toggle=""
                        >
                          Další <i class="icon icon-caret-down"></i>
                        </a>
                        <div class="submenu">
                          <ul
                            class="reset"
                            aria-labelledby="nav-link-more-0"
                          ></ul>
                        </div>
                      </li>
                      <li class="highlight is-excluded only-mobile">
                        <a href="https://www.gant.cz/" class="" target="_blank">
                          <span>Eshop</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="menubar-cell menubar-language">
                <nav
                  id="dropdown-lang"
                  class="nav language-switcher language-switcher-dropdown"
                  aria-label="Přepnout jazyk"
                >
                  <a
                    href="#dropdown-lang"
                    class="no-scroll"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Aktivní jazyk"
                  >
                    <abbr title="Český">cs</abbr>
                  </a>
                  <div id="menu-lang" class="submenu">
                    <ul>
                      <li class="is-active">
                        <a href="https://www.vermont.eu/cs">
                          <abbr title="Český">cs</abbr>
                        </a>
                      </li>
                      <li class="">
                        <a href="https://www.vermont.eu/sk/home">
                          <abbr title="Slovenský">sk</abbr>
                        </a>
                      </li>
                      <li class="">
                        <a href="https://www.vermont.eu/en/home-kopie">
                          <abbr title="English">en</abbr>
                        </a>
                      </li>
                      <li class="">
                        <a href="https://www.vermont.eu/hu/home">
                          <abbr title="Magyar">hu</abbr>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="menubar-cell menubar-right">
                <div class="menubar-container">
                  <ul id="menu-169" class=" reset">
                    <li class="highlight">
                      <a href="https://www.gant.cz/" class="" target="_blank">
                        <span>Eshop</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main" class="main">
          <div class="section section-has-background section-height-fullscreen section-align-bottom section-color-inverse">
            <div class="section-body in-viewport">
              <div class="row-main in-viewport">
                <div class="col col-1-12 grid-6-12">
                  <div class="row">
                    <div class="col col-1-12 grid-9-12">
                      <div
                        class="block block-inline"
                        data-lb="region"
                        data-lb-id="row-0-column-0-region-0"
                      >
                        {" "}
                        <h1>Zažijte s&nbsp;námi náš svět&nbsp;</h1>
                      </div>
                    </div>
                    <div class="col col-10-12 grid-3-12">
                      <div
                        class="block block-spacer"
                        data-lb="region"
                        data-lb-id="row-0-column-1-region-0"
                      >
                        {" "}
                        <div
                          class="block-spacer-element"
                          style={{height: "50px"}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col col-1-12 grid-12-12">
                      <div
                        class="block block-inline"
                        data-lb="region"
                        data-lb-id="row-1-column-0-region-0"
                      >
                        {" "}
                        <h4>
                          <a class="link-plain u-text-color" href="#mapa">
                            NAŠE OBCHODY
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-7-12 grid-6-12">
                  <div
                    class="block block-spacer"
                    data-lb="region"
                    data-lb-id="row-0-column-1-region-0"
                  >
                    {" "}
                    <div
                      class="block-spacer-element"
                      style={{height: "54px"}}
                    ></div>
                  </div>
                  <div
                    class="block block-button"
                    data-lb="region"
                    data-lb-id="row-0-column-1-region-1"
                  >
                    {" "}
                    <div class="left">
                      <a
                        class="btn btn-a btn-default btn-play js-play-video"
                        href="https://www.youtube.com/embed/ZUsRPSP4MvE?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
                      >
                        <span>Přehrát video</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row-main in-viewport">
                <div class="col col-1-12 grid-12-12">
                  <div
                    class="block block-spacer"
                    data-lb="region"
                    data-lb-id="row-1-column-0-region-0"
                  >
                    {" "}
                    <div
                      class="block-spacer-element"
                      // style="height: 50px;"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="row-main in-viewport">
                <div class="col col-1-12 grid-6-12">
                  <div
                    class="block block-spacer"
                    data-lb="region"
                    data-lb-id="row-2-column-0-region-0"
                  >
                    {" "}
                    <div
                      class="block-spacer-element"
                      // style="height: 35px;"
                    ></div>
                  </div>
                  <div
                    class="block block-image"
                    data-lb="region"
                    data-lb-id="row-2-column-0-region-1"
                  >
                    {" "}
                    <div class="flexcard flexcard-icon flexcard-none size-sm align-left">
                      <a
                        class="flexcard-media"
                        href="https://www.vermont.eu#section-content-brand"
                      >
                        <div class="image-icon-wrapper">
                          <div class="image-icon">
                            <img
                              src="https://www.vermont.eu/files/989-untitled-2.png"
                              class="is-loaded"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col col-7-12 grid-6-12">
                  <div
                    class="block block-inline"
                    data-lb="region"
                    data-lb-id="row-2-column-1-region-0"
                  >
                    {" "}
                    <p class="right">
                      NAŠÍ INSPIRACÍ JE MÓDA
                      <br />A NAŠÍ MISÍ JE INSPIROVAT OSTATNÍ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="section-background section-background-cover"
                data-cover-video="https://www.youtube.com/watch?v=0wkfVKUBthY"
                data-cover-video-audio="false"
              >
                <img
                  class="section-background-video is-loaded"
                  // style="object-position:67% 0%;font-family:'object-fit:cover;object-position:67% 0%'"
                  srcset="https://www.vermont.eu/files/responsive/360/0/gant-fw19-outerwear-w-cocoon-1.jpg 360w,https://www.vermont.eu/files/responsive/640/0/gant-fw19-outerwear-w-cocoon-1.jpg 640w,https://www.vermont.eu/files/responsive/980/0/gant-fw19-outerwear-w-cocoon-1.jpg 980w,https://www.vermont.eu/files/responsive/1280/0/gant-fw19-outerwear-w-cocoon-1.jpg 1280w,https://www.vermont.eu/files/responsive/1920/0/gant-fw19-outerwear-w-cocoon-1.jpg 1920w,https://www.vermont.eu/files/responsive/2600/0/gant-fw19-outerwear-w-cocoon-1.jpg 1920w"
                  sizes="(orientation: portrait) 265.50vw, 100vw"
                />
                <iframe
                  title="Youtube video"
                  id="player-youtube-0"
                  src="//www.youtube.com/embed/0wkfVKUBthY?autoplay=1&amp;controls=0&amp;showinfo=0&amp;playsinline=0&amp;loop=1&amp;rel=0&amp;suggestedQuality=hd1080&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.vermont.eu&amp;playlist=0wkfVKUBthY"
                  width="1120"
                  height="630"
                  frameborder="0"
                  allowfullscreen="1"
                  class="is-loaded"
                  // style="width: 1519px; height: 854.438px;"
                ></iframe>
              </div>
              <div
                class="section-overlay"
                // style="background-color:rgba(0,0,0,0.18666666666666665)"
              ></div>
            </div>
          </div>
          <div
            id="section-content-brand"
            class="section section-height-normal section-align-middle section-color-default"
          >
            <div class="section-body in-viewport">
              <div class="row-main in-viewport">
                <div class="col col-1-12 grid-12-12">
                  <div
                    class="block block-spacer"
                    data-lb="region"
                    data-lb-id="row-0-column-0-region-0"
                  >
                    {" "}
                    <div
                      class="block-spacer-element"
                      // style="height: 72px;"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="row-main in-viewport">
                <div class="col col-1-12 grid-2-12">
                  <div
                    class="block block-divider"
                    data-lb="region"
                    data-lb-id="row-1-column-0-region-0"
                  >
                    {" "}
                    <hr />
                  </div>
                  <div
                    class="block block-inline"
                    data-lb="region"
                    data-lb-id="row-1-column-0-region-1"
                  >
                    {" "}
                    <h4>OBJEVUJTE</h4>
                  </div>
                </div>
                <div class="col col-3-12 grid-10-12">
                  <div
                    class="block block-gallery gallery-centered gallery-no-overlay"
                    data-lb="region"
                    data-lb-id="row-1-column-1-region-0"
                  >
                    {" "}
                    <div
                      class="grid gallery-container"
                      // style="margin: 0 -70px -70px 0;"
                    >
                      <div
                        class="gallery-item grid-col-3 in-viewport"
                        // style="padding: 0px 70px 70px 0px;"
                      >
                        <a
                          class="image image-width-original"
                          href="https://www.vermont.eu/gant"
                        >
                          <img
                            class=" is-loaded"
                            src="https://www.vermont.eu/files/logo-gant.svg"
                            alt="Logo GANT. Černobílé logo GANT."
                          />
                          <noscript>
                            <img src="https://www.vermont.eu/files/logo-gant.svg" />
                          </noscript>
                        </a>
                      </div>
                      <div
                        class="gallery-item grid-col-3 in-viewport"
                        // style="padding: 0px 70px 70px 0px;"
                      >
                        <a
                          class="image image-width-original"
                          href="https://www.vermont.eu/karl-lagerfeld"
                        >
                          <img
                            class=" is-loaded"
                            src="https://www.vermont.eu/files/logo-karl.svg"
                            alt="Černobílé logo Karl Lagerfeld"
                          />
                          <noscript>
                            <img src="https://www.vermont.eu/files/logo-karl.svg" />
                          </noscript>
                        </a>
                      </div>
                      <div
                        class="gallery-item grid-col-3 in-viewport"
                        // style="padding: 0px 70px 70px 0px;"
                      />
                      <a
                        class="image image-width-original"
                        href="https://www.vermont.eu/nautica"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/logo-nautica.svg"
                          alt="Černobílé logo Nautica"
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/logo-nautica.svg" />
                        </noscript>
                      </a>
                    </div>
                    <div
                      class="gallery-item grid-col-3 in-viewport"
                      // style="padding: 0px 70px 70px 0px;"
                    >
                      <a
                        class="image image-width-original"
                        href="https://www.vermont.eu/la-martina"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/logo-lamartina.svg"
                          alt="Černobílé logo La Martina."
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/logo-lamartina.svg" />
                        </noscript>
                      </a>
                    </div>
                    <div
                      class="gallery-item grid-col-3 in-viewport"
                      // style="padding: 0px 70px 70px 0px;"
                    >
                      <a
                        class="image image-width-original"
                        href="https://www.vermont.eu/odd-molly"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/logo-oddmolly-s-04.svg"
                          alt="Černobílé logo Odd Molly"
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/logo-oddmolly-s-04.svg" />
                        </noscript>
                      </a>
                    </div>
                    <div
                      class="gallery-item grid-col-3 in-viewport"
                      // style="padding: 0px 70px 70px 0px;"
                    >
                      <a
                        class="image image-width-original"
                        href="https://www.vermont.eu/peak-performance"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/logo-peak.svg"
                          alt="Černobílé logo Peak Performance."
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/logo-peak.svg" />
                        </noscript>
                      </a>
                    </div>
                    <div
                      class="gallery-item grid-col-3 in-viewport"
                      // style="padding: 0px 70px 70px 0px;"
                    >
                      <a
                        class="image image-width-original"
                        href="https://www.vermont.eu/camel-active"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/1687-camel-active-black.svg"
                          alt="Černobílé logo Camel Active"
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/1687-camel-active-black.svg" />
                        </noscript>
                      </a>
                    </div>
                    <div
                      class="gallery-item grid-col-3 in-viewport"
                      // style="padding: 0px 70px 70px 0px;"
                    >
                      <a
                        class="image image-width-original"
                        href="/brooks-brothers"
                      >
                        <img
                          class=" is-loaded"
                          src="https://www.vermont.eu/files/bb-logo-black.svg"
                          alt="Černobílé logo Brooks Brothers"
                        />
                        <noscript>
                          <img src="https://www.vermont.eu/files/bb-logo-black.svg" />
                        </noscript>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="section section-height-medium section-align-middle section-color-default">
<div class="section-body in-viewport">
<div class="row-main in-viewport"> 
<div class="col col-1-12 grid-5-12"> 
<div class="block block-inline" data-lb="region" data-lb-id="row-0-column-0-region-0"> <h2>Naše obchody</h2>

<p>Každý den se o Vás stará více jak 500 zaměstnanců, kteří dbají na to, aby bylo správné zboží na prodejnách, a aby naše prodejny, byly místem, kam se chcete vracet.&nbsp;</p>

</div> 
<div class="block block-button" data-lb="region" data-lb-id="row-0-column-0-region-1"> <div class="left"><a class="btn btn-a btn-default" href="#mapa"><span>Kde nakupovat</span></a></div>
</div></div> 
<div class="col col-6-12 grid-7-12"> 
<div class="block block-gallery gallery-overlap-3" data-lb="region" data-lb-id="row-0-column-1-region-0"> <div class="grid gallery-container" style="margin: 0 -0px -0px 0;"><div class="gallery-item grid-col-1 in-viewport" style="padding: 0px;"><div class="image image-width-stretch image-mask ratio-original" style="padding-bottom: 142.857%;"><img class=" is-loaded" data-srcset="https://www.vermont.eu/files/responsive/360/0/hp-01.jpg 350w" data-sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" alt="Ukázka prodejny Gant" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" srcset="https://www.vermont.eu/files/responsive/360/0/hp-01.jpg 350w"/><noscript><img srcset="https://www.vermont.eu/files/responsive/360/0/hp-01.jpg 350w" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw"/></noscript></div></div><div class="gallery-item grid-col-1 in-viewport" style="padding: 0px;"><div class="image image-width-stretch image-mask ratio-original" style="padding-bottom: 129.953%;"><img class=" is-loaded" data-srcset="https://www.vermont.eu/files/responsive/360/0/hp-02.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-02.jpg 424w" data-sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" alt="Ukázka prodejny Gant" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" srcset="https://www.vermont.eu/files/responsive/360/0/hp-02.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-02.jpg 424w"><noscript><img srcset="https://www.vermont.eu/files/responsive/360/0/hp-02.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-02.jpg 424w" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw"></noscript></div></div><div class="gallery-item grid-col-1 in-viewport" style="padding: 0px;"><div class="image image-width-stretch image-mask ratio-original" style="padding-bottom: 85.595%;"><img class=" is-loaded" data-srcset="https://www.vermont.eu/files/responsive/360/0/hp-03.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-03.jpg 479w" data-sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" alt="Ukázka prodejny Gant" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw" srcset="https://www.vermont.eu/files/responsive/360/0/hp-03.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-03.jpg 479w"><noscript><img srcset="https://www.vermont.eu/files/responsive/360/0/hp-03.jpg 360w,https://www.vermont.eu/files/responsive/640/0/hp-03.jpg 479w" sizes="(min-width:1290px) 753px, (min-width:640px) 58.33vw, 100.00vw"/></noscript></div></div></div>
</div></div></div></div>
</div> */}
        <div class="section section-has-background section-height-medium section-align-middle section-color-inverse section-bg-left">
          <div class="section-body in-viewport">
            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-image"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  <div class="flexcard flexcard-card valign-center align-left">
                    <div class="flexcard-media">
                      <div class="image-wrapper">
                        <div
                          // style="padding-bottom:108.91891891891892%"
                          class="image ratio-original image-mask"
                        >
                          <img
                            class=" is-loaded"
                            alt="Náhled E-shopu v notebooku"
                            data-srcset="https://www.vermont.eu/files/responsive/360/0/hp-04.png 360w,https://www.vermont.eu/files/responsive/640/0/hp-04.png 640w,https://www.vermont.eu/files/responsive/980/0/hp-04.png 740w"
                            data-sizes="(min-width:1290px) 645px, (min-width:640px) 50.00vw, 100.00vw"
                            sizes="(min-width:1290px) 645px, (min-width:640px) 50.00vw, 100.00vw"
                            srcset="https://www.vermont.eu/files/responsive/360/0/hp-04.png 360w,https://www.vermont.eu/files/responsive/640/0/hp-04.png 640w,https://www.vermont.eu/files/responsive/980/0/hp-04.png 740w"
                          />
                          <noscript>
                            <img
                              srcset="https://www.vermont.eu/files/responsive/360/0/hp-04.png 360w,https://www.vermont.eu/files/responsive/640/0/hp-04.png 640w,https://www.vermont.eu/files/responsive/980/0/hp-04.png 740w"
                              sizes="(min-width:1290px) 645px, (min-width:640px) 50.00vw, 100.00vw"
                            />
                          </noscript>
                        </div>
                      </div>
                    </div>
                    <div class="flexcard-content">
                      <div class="flexcard-content-wrapper">
                        <div>
                          <h2>GANT E-shop</h2>

                          <p>
                            Značka GANT je protkaná bohatou tradicí výroby
                            neformálního oblečení vysoké kvality. V našem
                            e-shopu máte zaručenou originalitu zboží, vše máme
                            skladem a dopravu i vrácení máte od nás zdarma!
                          </p>

                          <p>
                            <a
                              class="btn btn-inverse"
                              href="https://www.gant.cz/"
                              target="_blank"
                            >
                              NAKUPUJTE ZDE
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="section-background"
            // style="background-color:rgba(16,17,17,1)"
          ></div>
        </div>
        <div class="section section-has-background section-height-normal section-align-middle section-color-default section-bg-top-right">
          <div class="section-body in-viewport">
            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-image card-boxed"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <div class="flexcard flexcard-overlay valign-middle align-center">
                    <div class="flexcard-media">
                      <div class="image-wrapper">
                        <div
                          // style="padding-bottom:73.52941176470588%"
                          class="image ratio-original image-mask"
                        >
                          <img
                            class=" is-loaded"
                            alt="Imageová fotka muže v bílé košili hledícího do dálky sedícího ve člunu na moři s horizontem v pozadí"
                            data-srcset="https://www.vermont.eu/files/responsive/360/0/voucher-01.jpg 360w,https://www.vermont.eu/files/responsive/640/0/voucher-01.jpg 640w,https://www.vermont.eu/files/responsive/980/0/voucher-01.jpg 680w"
                            data-sizes="(min-width:1290px) 1032px, (min-width:640px) 80.00vw, 100.00vw"
                            sizes="(min-width:1290px) 1032px, (min-width:640px) 80.00vw, 100.00vw"
                            srcset="https://www.vermont.eu/files/responsive/360/0/voucher-01.jpg 360w,https://www.vermont.eu/files/responsive/640/0/voucher-01.jpg 640w,https://www.vermont.eu/files/responsive/980/0/voucher-01.jpg 680w"
                          />
                          <noscript>
                            <img
                              srcset="https://www.vermont.eu/files/responsive/360/0/voucher-01.jpg 360w,https://www.vermont.eu/files/responsive/640/0/voucher-01.jpg 640w,https://www.vermont.eu/files/responsive/980/0/voucher-01.jpg 680w"
                              sizes="(min-width:1290px) 1032px, (min-width:640px) 80.00vw, 100.00vw"
                            />
                          </noscript>
                        </div>
                      </div>
                    </div>
                    <div class="flexcard-content">
                      <div class="flexcard-content-wrapper">
                        <div>
                          <h3 class="text-large">VERMONT Club</h3>

                          <p>
                            Styl, kvalita a ještě něco navíc. Členství ve
                            VERMONT Clubu Vám nakupování oblíbených značek ještě
                            více zpříjemní.&nbsp;
                          </p>

                          <p>
                            <a
                              class="btn btn-primary"
                              href="https://www.vermont.eu/club"
                            >
                              přidat se do klubu
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-spacer"
                  data-lb="region"
                  data-lb-id="row-1-column-0-region-0"
                >
                  {" "}
                  {/* <div class="block-spacer-element" style="height: 30px;"></div> */}
                </div>
              </div>
            </div>
          </div>
          <div
            class="section-background"
            // style="background-color:rgba(243,243,243,1)"
          ></div>
        </div>
        <div class="section section-height-normal section-align-middle section-color-default section-overlap-row">
          <div class="section-body in-viewport">
            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-inline"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <h2 class="text-large">Inspirace</h2>
                </div>
              </div>
            </div>

            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-entries"
                  data-lb="region"
                  data-lb-id="row-1-column-0-region-0"
                >
                  <div
                    class="entry-list grid entries-articles"
                    data-entries="list"
                  >
                    <div
                      class="entry grid-col-3 entry-articles"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div class="entry-media">
                          <a
                            class="image image-mask ratio-standard"
                            target="_self"
                            href="https://www.vermont.eu/inspirace/4-duvody-proc-si-poridit-svetr-z-dilny-odd-molly"
                          >
                            <img
                              class=" is-loaded"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/dfbhfdbg.jpg 360w, https://www.vermont.eu/files/responsive/640/0/dfbhfdbg.jpg 400w"
                              data-sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/dfbhfdbg.jpg 360w, https://www.vermont.eu/files/responsive/640/0/dfbhfdbg.jpg 400w"
                            />
                          </a>
                        </div>

                        <div class="entry-body align-left">
                          <p class="entry-meta">
                            <span class="">
                              <span class="entry-meta-value">
                                <a href="https://www.vermont.eu/inspirace?category=19">
                                  <span
                                    class="article-category-meta"
                                    data-category-id="19"
                                  >
                                    Trendy
                                  </span>
                                </a>{" "}
                                <a href="https://www.vermont.eu/inspirace?category=21">
                                  <span
                                    class="article-category-meta"
                                    data-category-id="21"
                                  >
                                    Triky a tipy
                                  </span>
                                </a>
                              </span>
                            </span>{" "}
                            <br />
                          </p>

                          <a
                            class="link-block link-plain"
                            href="https://www.vermont.eu/inspirace/4-duvody-proc-si-poridit-svetr-z-dilny-odd-molly"
                          >
                            <p class="">
                              Každý se rád v zimě oblékne do hřejivého svetru.
                              Přemýšleli jste však o tom, že úplet nemusí jen
                              poskytovat pocit tepla, ale může ukázat, kým jste?
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry grid-col-3 entry-articles"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div class="entry-media">
                          <a
                            class="image image-mask ratio-standard"
                            target="_self"
                            href="https://www.vermont.eu/inspirace/na-prirode-nam-zalezi"
                          >
                            <img
                              class=" is-loaded"
                              // style="object-position: 64% 48%;font-family: 'object-fit:cover;object-position:64% 48%';"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 360w, https://www.vermont.eu/files/responsive/640/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 640w, https://www.vermont.eu/files/responsive/980/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 980w, https://www.vermont.eu/files/responsive/1280/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 1280w, https://www.vermont.eu/files/responsive/1920/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 1920w, https://www.vermont.eu/files/responsive/2600/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 2600w"
                              data-sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 360w, https://www.vermont.eu/files/responsive/640/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 640w, https://www.vermont.eu/files/responsive/980/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 980w, https://www.vermont.eu/files/responsive/1280/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 1280w, https://www.vermont.eu/files/responsive/1920/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 1920w, https://www.vermont.eu/files/responsive/2600/0/michael-olsen-vnigkjzbjw0-unsplash.jpg 2600w"
                            />
                          </a>
                        </div>

                        <div class="entry-body align-left">
                          <p class="entry-meta">
                            <span class="">
                              <span class="entry-meta-value">
                                <a href="https://www.vermont.eu/inspirace?category=17">
                                  <span
                                    class="article-category-meta"
                                    data-category-id="17"
                                  >
                                    Příběhy
                                  </span>
                                </a>
                              </span>
                            </span>{" "}
                            <br />
                          </p>

                          <a
                            class="link-block link-plain"
                            href="https://www.vermont.eu/inspirace/na-prirode-nam-zalezi"
                          >
                            <p class="">
                              Značky z našeho portfolia VERMONT dbají na životní
                              prostředí. Od materiálů, přes výrobní proces, po
                              dopravu k vám. Vsaďte na nadčasovost a kvalitu
                              materiálů. Šetříte tím nejen sebe, ale i přírodu.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry grid-col-3 entry-articles"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div class="entry-media">
                          <a
                            class="image image-mask ratio-standard"
                            target="_self"
                            href="https://www.vermont.eu/inspirace/a-tribute-to-karl"
                          >
                            <img
                              class=" is-loaded"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/karl-lagerfeld.png 360w, https://www.vermont.eu/files/responsive/640/0/karl-lagerfeld.png 640w, https://www.vermont.eu/files/responsive/980/0/karl-lagerfeld.png 980w, https://www.vermont.eu/files/responsive/1280/0/karl-lagerfeld.png 1200w"
                              data-sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              sizes="(min-width:1290px) 430px, (min-width:640px) 33vw, (min-width:480px) 50vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/karl-lagerfeld.png 360w, https://www.vermont.eu/files/responsive/640/0/karl-lagerfeld.png 640w, https://www.vermont.eu/files/responsive/980/0/karl-lagerfeld.png 980w, https://www.vermont.eu/files/responsive/1280/0/karl-lagerfeld.png 1200w"
                            />
                          </a>
                        </div>

                        <div class="entry-body align-left">
                          <p class="entry-meta">
                            <span class="">
                              <span class="entry-meta-value">
                                <a href="https://www.vermont.eu/inspirace?category=11">
                                  <span
                                    class="article-category-meta"
                                    data-category-id="11"
                                  >
                                    {" "}
                                    Videa
                                  </span>
                                </a>{" "}
                                <a href="https://www.vermont.eu/inspirace?category=15">
                                  <span
                                    class="article-category-meta"
                                    data-category-id="15"
                                  >
                                    Eventy
                                  </span>
                                </a>
                              </span>
                            </span>{" "}
                            <br />
                          </p>

                          <a
                            class="link-block link-plain"
                            href="https://www.vermont.eu/inspirace/a-tribute-to-karl"
                          >
                            <p class="">
                              Cílem tohoto eventu bylo vzdát poctu zesnulému
                              návrháři Karlu Lagerfeldovi.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-spacer"
                  data-lb="region"
                  data-lb-id="row-2-column-0-region-0"
                >
                  {" "}
                  {/* <div class="block-spacer-element" style="height: 30px;"></div> */}
                </div>
              </div>
            </div>

            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-button"
                  data-lb="region"
                  data-lb-id="row-3-column-0-region-0"
                >
                  {" "}
                  <div class="right">
                    <a
                      class="btn btn-a btn-default"
                      href="https://www.vermont.eu/inspirace"
                    >
                      <span>Více inspirace</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mapa"
          class="section section-height-low section-align-middle section-color-default"
        >
          <div class="section-body in-viewport">
            <div class="row-main in-viewport">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-inline"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <h2 class="center text-large">Obchody</h2>
                  <ul class="tabs-menu">
                    <li class="active">
                      <a class="no-scroll" href="#section-listing">
                        SEZNAM
                      </a>
                    </li>
                    <li>
                      <a class="no-scroll" href="#section-map">
                        Na MAPĚ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-listing"
          class="section section-height-normal section-align-middle section-color-default section-tab shown"
        >
          <div class="section-body">
            <div class="row-main">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-filter_markers"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <form
                    method="GET"
                    action="https://www.vermont.eu/"
                    class=""
                    id="form-filter_markers"
                  >
                    <div class="row">
                      <div class="col col-1-12 grid-3-12">
                        <div class="field field-form_select">
                          <div class="field-wrapper">
                            <label
                              for="field-markers_categories"
                              id="label-markers_categories"
                            >
                              markers_categories{" "}
                            </label>

                            <select
                              name="filter_markers[markers_categories]"
                              class="field-control"
                              id="field-markers_categories"
                            >
                              {" "}
                              <option value="" selected="selected">
                                Vyberte značku
                              </option>
                              <option value="41">BARBOUR</option>
                              <option value="39">BROOKS BROTHERS</option>
                              <option value="37">CAMEL ACTIVE</option>
                              <option value="43">CREMIEUX</option>
                              <option value="19">GANT</option>
                              <option value="33">KARL LAGERFELD</option>
                              <option value="25">LA MARTINA</option>
                              <option value="23">NAUTICA</option>
                              <option value="27">ODD MOLLY</option>
                              <option value="35">PEAK PERFORMANCE</option>
                            </select>

                            <div
                              class="field-control field-control-dropdown"
                              role="combobox"
                              tabindex="0"
                              data-multiple="false"
                              aria-autocomplete="none"
                              aria-owns="list-markers_categories"
                              aria-expanded="false"
                              aria-labelledby="label-markers_categories"
                              aria-activedescendant="default"
                            >
                              <div class="field-control-value">
                                Vyberte značku
                              </div>
                            </div>

                            <ul
                              class="field-list"
                              role="listbox"
                              id="list-markers_categories"
                            >
                              <li
                                class=""
                                role="option"
                                id="li_0_0"
                                aria-selected="true"
                              >
                                Vyberte značku
                              </li>
                              <li class="" role="option" id="li_0_1">
                                BARBOUR
                              </li>
                              <li class="" role="option" id="li_0_2">
                                BROOKS BROTHERS
                              </li>
                              <li class="" role="option" id="li_0_3">
                                CAMEL ACTIVE
                              </li>
                              <li class="" role="option" id="li_0_4">
                                CREMIEUX
                              </li>
                              <li class="" role="option" id="li_0_5">
                                GANT
                              </li>
                              <li class="" role="option" id="li_0_6">
                                KARL LAGERFELD
                              </li>
                              <li class="" role="option" id="li_0_7">
                                LA MARTINA
                              </li>
                              <li class="" role="option" id="li_0_8">
                                NAUTICA
                              </li>
                              <li class="" role="option" id="li_0_9">
                                ODD MOLLY
                              </li>
                              <li class="" role="option" id="li_0_10">
                                PEAK PERFORMANCE
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col col-4-12 grid-3-12">
                        <div class="field field-form_select">
                          <div class="field-wrapper">
                            <label
                              for="field-markers_countries"
                              id="label-markers_countries"
                            >
                              markers_countries{" "}
                            </label>

                            <select
                              name="filter_markers[markers_countries]"
                              class="field-control"
                              id="field-markers_countries"
                            >
                              {" "}
                              <option value="" selected="selected">
                                VYBERTE ZEMI
                              </option>
                              <option value="2">CZECH REPUBLIC</option>
                              <option value="3">HUNGARY</option>
                              <option value="1">SLOVAKIA</option>
                            </select>

                            <div
                              class="field-control field-control-dropdown"
                              role="combobox"
                              tabindex="0"
                              data-multiple="false"
                              aria-autocomplete="none"
                              aria-owns="list-markers_countries"
                              aria-expanded="false"
                              aria-labelledby="label-markers_countries"
                              aria-activedescendant="default"
                            >
                              <div class="field-control-value">
                                VYBERTE ZEMI
                              </div>
                            </div>

                            <ul
                              class="field-list"
                              role="listbox"
                              id="list-markers_countries"
                            >
                              <li
                                class=""
                                role="option"
                                id="li_1_0"
                                aria-selected="true"
                              >
                                VYBERTE ZEMI
                              </li>
                              <li class="" role="option" id="li_1_1">
                                CZECH REPUBLIC
                              </li>
                              <li class="" role="option" id="li_1_2">
                                HUNGARY
                              </li>
                              <li class="" role="option" id="li_1_3">
                                SLOVAKIA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col col-7-12 grid-3-12">
                        <div class="field field-form_select">
                          <div class="field-wrapper">
                            <label
                              for="field-markers_cities"
                              id="label-markers_cities"
                            >
                              markers_cities{" "}
                            </label>

                            <select
                              name="filter_markers[markers_cities]"
                              class="field-control"
                              id="field-markers_cities"
                            >
                              {" "}
                              <option value="" selected="selected">
                                VYBERTE MĚSTO
                              </option>
                              <option value="16">BANSKÁ BYSTRICA</option>
                              <option value="25">BIATORBÁGY</option>
                              <option value="15">BRATISLAVA</option>
                              <option value="5">BRNO</option>
                              <option value="23">BUDAPEST</option>
                              <option value="14">ČESKÉ BUDĚJOVICE</option>
                              <option value="11">HRADEC KRÁLOVÉ</option>
                              <option value="7">CHVALOVICE</option>
                              <option value="13">KARLOVY VARY</option>
                              <option value="18">KOŠICE</option>
                              <option value="9">LIBEREC</option>
                              <option value="6">MODŘICE</option>
                              <option value="19">NITRA</option>
                              <option value="26">OLOMOUC</option>
                              <option value="10">OSTRAVA</option>
                              <option value="8">PARDUBICE</option>
                              <option value="4">PLZEŇ</option>
                              <option value="24">POLGÁR</option>
                              <option value="2">PRAHA</option>
                              <option value="22">PREŠOV</option>
                              <option value="20">TRENČÍN</option>
                              <option value="27">TUCHOMĚŘICE</option>
                              <option value="12">ÚSTÍ NAD LABEM</option>
                              <option value="21">VODERADY</option>
                              <option value="3">ZLÍN</option>
                              <option value="17">ŽILINA</option>
                            </select>

                            <div
                              class="field-control field-control-dropdown"
                              role="combobox"
                              tabindex="0"
                              data-multiple="false"
                              aria-autocomplete="none"
                              aria-owns="list-markers_cities"
                              aria-expanded="false"
                              aria-labelledby="label-markers_cities"
                              aria-activedescendant="default"
                            >
                              <div class="field-control-value">
                                VYBERTE MĚSTO
                              </div>
                            </div>

                            <ul
                              class="field-list"
                              role="listbox"
                              id="list-markers_cities"
                            >
                              <li
                                class=""
                                role="option"
                                id="li_2_0"
                                aria-selected="true"
                              >
                                VYBERTE MĚSTO
                              </li>
                              <li class="" role="option" id="li_2_1">
                                BANSKÁ BYSTRICA
                              </li>
                              <li class="" role="option" id="li_2_2">
                                BIATORBÁGY
                              </li>
                              <li class="" role="option" id="li_2_3">
                                BRATISLAVA
                              </li>
                              <li class="" role="option" id="li_2_4">
                                BRNO
                              </li>
                              <li class="" role="option" id="li_2_5">
                                BUDAPEST
                              </li>
                              <li class="" role="option" id="li_2_6">
                                ČESKÉ BUDĚJOVICE
                              </li>
                              <li class="" role="option" id="li_2_7">
                                HRADEC KRÁLOVÉ
                              </li>
                              <li class="" role="option" id="li_2_8">
                                CHVALOVICE
                              </li>
                              <li class="" role="option" id="li_2_9">
                                KARLOVY VARY
                              </li>
                              <li class="" role="option" id="li_2_10">
                                KOŠICE
                              </li>
                              <li class="" role="option" id="li_2_11">
                                LIBEREC
                              </li>
                              <li class="" role="option" id="li_2_12">
                                MODŘICE
                              </li>
                              <li class="" role="option" id="li_2_13">
                                NITRA
                              </li>
                              <li class="" role="option" id="li_2_14">
                                OLOMOUC
                              </li>
                              <li class="" role="option" id="li_2_15">
                                OSTRAVA
                              </li>
                              <li class="" role="option" id="li_2_16">
                                PARDUBICE
                              </li>
                              <li class="" role="option" id="li_2_17">
                                PLZEŇ
                              </li>
                              <li class="" role="option" id="li_2_18">
                                POLGÁR
                              </li>
                              <li class="" role="option" id="li_2_19">
                                PRAHA
                              </li>
                              <li class="" role="option" id="li_2_20">
                                PREŠOV
                              </li>
                              <li class="" role="option" id="li_2_21">
                                TRENČÍN
                              </li>
                              <li class="" role="option" id="li_2_22">
                                TUCHOMĚŘICE
                              </li>
                              <li class="" role="option" id="li_2_23">
                                ÚSTÍ NAD LABEM
                              </li>
                              <li class="" role="option" id="li_2_24">
                                VODERADY
                              </li>
                              <li class="" role="option" id="li_2_25">
                                ZLÍN
                              </li>
                              <li class="" role="option" id="li_2_26">
                                ŽILINA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="col col-10-12 grid-3-12">
                        <div class="field field-form_submit">
                          <div class="field-wrapper">
                            <button
                              name="submit"
                              value="submit"
                              class="btn btn-a btn-inverse"
                              type="submit"
                            >
                              <span>Zobrazit</span>
                            </button>
                            <a
                              class="markers-filter-reset"
                              href="https://www.vermont.eu/"
                            >
                              <span>Zobrazit vše</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="row-main">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-entries"
                  data-lb="region"
                  data-lb-id="row-1-column-0-region-0"
                >
                  <div
                    class="entry-list  entries-markers"
                    data-entries="list"
                  >
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class=" is-loaded"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/89da9d47d82e6be6ca613048f6fdfa83fe869302.jpe 360w, https://www.vermont.eu/files/responsive/640/0/89da9d47d82e6be6ca613048f6fdfa83fe869302.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/89da9d47d82e6be6ca613048f6fdfa83fe869302.jpe 360w, https://www.vermont.eu/files/responsive/640/0/89da9d47d82e6be6ca613048f6fdfa83fe869302.jpe 500w"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Store Palladium</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Nám. Republiky, 1, 11000 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752201">+420734752201</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    Po(09.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    Út(10.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    St(11.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—22:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—22:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—22:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.089262,14.428895"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class=" is-loaded"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/9fea141de2d1ffbb05b33fbdfac9021dd4ce7c0d.jpe 360w, https://www.vermont.eu/files/responsive/640/0/9fea141de2d1ffbb05b33fbdfac9021dd4ce7c0d.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/9fea141de2d1ffbb05b33fbdfac9021dd4ce7c0d.jpe 360w, https://www.vermont.eu/files/responsive/640/0/9fea141de2d1ffbb05b33fbdfac9021dd4ce7c0d.jpe 500w"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Man Store Myslbek</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Na Příkopě, 19/21, 11719 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752202">+420734752202</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 10:00—19:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—20:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  10:00—19:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.085958,14.425546"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class=" is-loaded"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 360w, https://www.vermont.eu/files/responsive/640/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 640w, https://www.vermont.eu/files/responsive/980/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 980w, https://www.vermont.eu/files/responsive/1280/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 1280w, https://www.vermont.eu/files/responsive/1920/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 1920w, https://www.vermont.eu/files/responsive/2600/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 2600w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                              srcset="https://www.vermont.eu/files/responsive/360/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 360w, https://www.vermont.eu/files/responsive/640/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 640w, https://www.vermont.eu/files/responsive/980/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 980w, https://www.vermont.eu/files/responsive/1280/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 1280w, https://www.vermont.eu/files/responsive/1920/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 1920w, https://www.vermont.eu/files/responsive/2600/0/1cab863869014b1e17efd3d5a3952b7308da7501.jpe 2600w"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">
                            VERMONT Kids Store Myslbek
                          </h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Na Příkopě, 19/21, 11719 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752203">+420734752203</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 10:00—19:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—20:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  10:00—19:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.0857671,14.4253352"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/869df27f784e273e78519f693ed10e46cb72452c.jpe 360w, https://www.vermont.eu/files/responsive/640/0/869df27f784e273e78519f693ed10e46cb72452c.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Woman Store Myslbek</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Na Příkopě, 19/21, 11719 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752210">+420734752210</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 10:00—19:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—20:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—20:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  10:00—19:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.085758,14.425223"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 360w, https://www.vermont.eu/files/responsive/640/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 640w, https://www.vermont.eu/files/responsive/980/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 980w, https://www.vermont.eu/files/responsive/1280/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 1280w, https://www.vermont.eu/files/responsive/1920/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 1920w, https://www.vermont.eu/files/responsive/2600/0/99b8ea4b6ef8ab6fb333188068f96fb1736e6417.jpe 2600w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Outlet Plzeň Olympia</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Písecká, 972/1, 30900 Plzeň</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752211">+420734752211</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—21:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Outlet</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/49.7010596,13.425846"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/ffd1598ce44f56e37560e1b0218043411bd8c588.jpe 360w, https://www.vermont.eu/files/responsive/640/0/ffd1598ce44f56e37560e1b0218043411bd8c588.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Store Brno Vaňkovka</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Ve Vaňkovce, 1, 60200 Brno</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752212">+420734752212</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 10:00—20:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—21:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  10:00—20:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/49.188322,16.6148264"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/ee7aa4b3cc85cafae4ec5ded89f1c989294821c4.jpe 360w, https://www.vermont.eu/files/responsive/640/0/ee7aa4b3cc85cafae4ec5ded89f1c989294821c4.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">NAUTICA Store Černý Most</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Chlumecká, 765/6, 19819 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420734752234">+420734752234</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—21:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.1086485,14.5866234"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/49f70ee6cea3436349f8c7ac6aeeff947993c36f.jpe 360w, https://www.vermont.eu/files/responsive/640/0/49f70ee6cea3436349f8c7ac6aeeff947993c36f.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">
                            LA MARTINA Store Palladium
                          </h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Nám. Republiky, 1, 11000 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420731434941">+420731434941</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    Po(09.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    Út(10.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">
                                    St(11.12.)
                                  </span>
                                  : 09:00—22:00,{" "}
                                  <small class="text-muted">
                                    standardně: 09:00—21:00
                                  </small>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—22:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—22:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—22:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.089321,14.429409"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/d93149d35a2ea12e49d0f9cc953d0661f9ac657f.jpe 360w, https://www.vermont.eu/files/responsive/640/0/d93149d35a2ea12e49d0f9cc953d0661f9ac657f.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Store Chodov</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Roztylská, 2321/19, 14800 Praha</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+420731434950">+420731434950</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  09:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—21:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/50.031163,14.490579"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="entry entry-block entry-markers"
                      data-entries="entry"
                    >
                      <div class="entry-inner">
                        <div
                          class="entry-media entry-media-left"
                          // style="width: 30%;"
                        >
                          <div
                            class="image image-mask ratio-standard"
                            target="_self"
                          >
                            <img
                              class="is-lazy"
                              data-srcset="https://www.vermont.eu/files/responsive/360/0/d1808701bb53f8605a02b018d26f17db5e23962a.jpe 360w, https://www.vermont.eu/files/responsive/640/0/d1808701bb53f8605a02b018d26f17db5e23962a.jpe 500w"
                              data-sizes="(min-width:1290px) 387px, (min-width:640px) 30vw, 100vw"
                            />
                          </div>
                        </div>

                        <div class="entry-body">
                          <h3 class="entry-title">GANT Man Store Aupark</h3>

                          <div class="grid">
                            <div class="grid-col-3">
                              <h4>Adresa</h4>
                              <p>Einsteinova, 18, 85101 Bratislava</p>

                              <h4>Telefon</h4>
                              <p>
                                <a href="tel:+421902999012">+421902999012</a>
                              </p>
                            </div>

                            <div class="grid-col-3">
                              <h4>Otevírací doba</h4>
                              <ul class="reset list-expandable">
                                <li class="list-toggle js-list-toggle">
                                  <span class="u-text-capitalize">Dnes</span>
                                  <span class="list-opening">
                                    : 09:00—21:00
                                  </span>
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Po</span>:
                                  10:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Út</span>:
                                  10:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">St</span>:
                                  10:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Čt</span>:
                                  10:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">Pá</span>:
                                  10:00—21:00
                                </li>
                                <li>
                                  <span class="u-text-capitalize">So</span>:
                                  09:00—21:00
                                </li>
                                <li class="u-fwb">
                                  <span class="u-text-capitalize">Ne</span>:
                                  09:00—21:00
                                </li>
                              </ul>

                              <h4>Typ</h4>
                              <p>Obchod</p>
                            </div>

                            <div class="grid-col-3">
                              <a
                                target="_blank"
                                href="https://www.google.com/maps/dir/Current+Location/48.13278,17.107409"
                                class="btn btn-a btn-inverse js-navigate"
                              >
                                <span>Navigovat</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <nav
                    class="pagination"
                    aria-label="Stránkování"
                    data-pagination="loadmore"
                    data-pagination-id="pagination-339737"
                  >
                    <div class="center">
                      <a
                        class="btn btn-a btn-default"
                        href="/?p339737=2"
                        data-pagination="loadmore-button"
                      >
                        <span>Načíst další</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div class="row-main">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-spacer"
                  data-lb="region"
                  data-lb-id="row-2-column-0-region-0"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-map"
          class="section section-height-low section-align-middle section-color-default section-tab"
        >
          <div class="section-body">
            <div class="row-main">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-map"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <div>
                    <div class="map-filters"></div>
                    <div
                      class="block-map-element embed-container embed-container-high"
                      data-scrollwheel="false"
                      data-scalecontrol="true"
                      data-address="Praha, Česko"
                      data-latitude="50.0755381"
                      data-longitude="14.43780049999998"
                      data-zoom="12"
                      data-showfilters="true"
                      data-showmarkers="true"
                      data-styles='[{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]'
                      data-gmapadvanced="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row-main">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-spacer"
                  data-lb="region"
                  data-lb-id="row-1-column-0-region-0"
                >
                  {" "}
                  <div
                    class="block-spacer-element"
                    // style="height: 130px;"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" class="footer" role="contentinfo">
        <div class="row-main">
          <div class="col col-1-12 grid-12-12"></div>
        </div>

        <div class="row-main">
          <div class="col col-1-12 grid-3-12">
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-1-column-0-region-0"
            >
              {" "}
              <h4>OBJeVUJTE NAŠE ZNAČKY</h4>
              <ul>
                <li>
                  <a href="https://www.vermont.eu/gant">GANT</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/karl-lagerfeld">
                    KARL LAGERFELD
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/nautica">Nautica</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/la-martina">La Martina</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/odd-molly">Odd Molly</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/peak-performance">
                    Peak Performance
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/camel-active">Camel Active</a>
                </li>
                <li>
                  <a href="/brooks-brothers">Brooks Brothers</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-4-12 grid-3-12">
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-1-column-1-region-0"
            >
              {" "}
              <h4>NAKupujte</h4>
              <ul>
                <li>
                  <a href="https://www.gant.cz/" target="_blank">
                    <strong>E-shop</strong>
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu#mapa">
                    <strong>Najdi obchod</strong>
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/barbour-a-cremieux">
                    Barbour a Cremieux
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-1-column-1-region-1"
            >
              {" "}
              <h4>O nás</h4>
              <ul>
                <li>
                  <a href="https://www.vermont.eu/o-nas">My jsme VERMONT</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/o-nas#nas-pribeh">
                    Náš příběh
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/inspirace">Inspirace</a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/kariera">
                    Pracovní příležitosti
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-7-12 grid-3-12">
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-1-column-2-region-0"
            >
              {" "}
              <h4>Chtějte&nbsp;víc</h4>
              <ul>
                <li>
                  <a href="https://www.vermont.eu/club">
                    <strong>VERMONT Club</strong>
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/club#lounge">
                    <strong>VERMONT Lounge</strong>
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/vermont-status">
                    <strong>VERMONT&nbsp;</strong>Status
                  </a>
                </li>
                <li>
                  <a href="https://www.vermont.eu/vermont-vip-voucher">
                    <strong>VERMONT&nbsp;Voucher</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="block block-social_icons"
              data-lb="region"
              data-lb-id="row-1-column-2-region-1"
            >
              {" "}
              <ul class="social-link-list left">
                <li>
                  <a
                    href="https://www.facebook.com/InspiredbyVERMONT/"
                    class="social-link has-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                    aria-label="Přejít na Facebook"
                  >
                    <i class="icon icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/inspiredbyvermont/?hl=cs"
                    class="social-link has-icon social-instagram"
                    title="Instagram"
                    target="_blank"
                    aria-label="Přejít na Instagram"
                  >
                    <i class="icon icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=eGs7IoFLGv4"
                    class="social-link has-icon social-youtube"
                    title="Youtube"
                    target="_blank"
                    aria-label="Přejít na Youtube"
                  >
                    <i class="icon icon-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col col-10-12 grid-3-12">
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-1-column-3-region-0"
            >
              {" "}
              <p class="text-large">
                Inspirujte se s námi! Přihlašte se k odběru našich novinek, akcí
                a příběhů.
              </p>
            </div>

            {/* <form method="post" action="#form-solidpixels-1" class="block block-form form-newsletter" id="form-solidpixels-1" autocomplete="off" novalidate="">
      <div class="row">
              <div class="col col-1-12 grid-6-12">
                                                  <div class="field field-form_input_email">
                <div class="field-wrapper">
                                      



  <input type="email" value="" name="solidpixels_1[email]" class="field-control" placeholder="Váš e-mail" id="field-email"/>

                                  </div>
                              </div>
                              </div>
              <div class="col col-7-12 grid-6-12">
                                                  <div class="field field-form_submit">
                <div class="field-wrapper">
                                      



  <input type="hidden" value="432,827|1259" name="solidpixels_1[solidpixels_1_antispam]" class="inp-text" id="field-solidpixels_1_antispam">
<script type="text/javascript">
				(function () {
					var id = "field-solidpixels_1_antispam";
					var input = document.getElementById(id);

					var res = input.value.split(",");
					var sum = 0;
					for(var i=0; i<res.length; i++){
						sum += parseInt(res[i]);
					}

					input.value += "|" + sum;
				}());
				</script>
                    <div class="left">
                      



  <button name="solidpixels_1[field_1_0_1_0]" value="submit" class="btn btn-a btn-inverse" type="submit" id="field-field_1_0_1_0"><span>Odeslat</span></button>

                    </div>
                                  </div>
                              </div>
                              </div>
          </div>
      <div class="row">
              <div class="col col-1-12 grid-12-12">
                                                  <div class=" field-form_agreement">
                <div class="field-wrapper">
                                      
  <div class="block block-inline">
    <p>Souhlasím se <a href="https://www.vermont.eu/zasady-ochrany-osobnich-udaju">zpracováním osobních údajů a<font color="#b00000"> </font></a>přeji si dostávat informace o novinkách a akčních nabídkách.</p>
  </div></div>
                              </div>
                              </div>
          </div>
  
  <input type="hidden" name="form-action" value="solidpixels_1"/>
  </form> */}
          </div>
        </div>

        <div class="row-main">
          <div class="col col-1-12 grid-3-12">
            <div class="row">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-image"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <div class="flexcard flexcard-icon flexcard-horizontal valign-middle size-sm">
                    <a
                      class="flexcard-media"
                      href="https://www.vermont.eu"
                      title="Barevné logo Vermont."
                    >
                      <div class="image-icon-wrapper">
                        <div class="image-icon">
                          <img
                            alt="Barevné logo Vermont."
                            src="https://www.vermont.eu/files/451-logo-vermont-v1-barva-black-mini.svg"
                            class="is-loaded"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="flexcard-content">
                      <div class="flexcard-content-wrapper">
                        <div>
                          <p>
                            <a href="https://www.vermont.eu">
                              VERMONT Holding a.s.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-4-12 grid-7-12">
            <div
              class="block block-inline"
              data-lb="region"
              data-lb-id="row-2-column-1-region-0"
            >
              {" "}
              <p>
                <a href="https://www.vermont.eu/zasady-ochrany-osobnich-udaju">
                  Zásady zpracování&nbsp;osobních&nbsp;údajů
                </a>{" "}
                |{" "}
                <a href="https://www.vermont.eu/pouzivani-cookies">
                  Používání cookies
                </a>
                &nbsp;&nbsp;&nbsp;| &nbsp;
                <a href="https://www.vermont.eu/darkove-poukazky-vop">
                  Dárkové poukázky VOP
                </a>
              </p>
            </div>
          </div>
          <div class="col col-11-12 grid-2-12">
            <div class="row">
              <div class="col col-1-12 grid-12-12">
                <div
                  class="block block-footer"
                  data-lb="region"
                  data-lb-id="row-0-column-0-region-0"
                >
                  {" "}
                  <p class="right">
                    Runs on{" "}
                    <a
                      class="author"
                      href="https://www.solidpixels.net"
                      target="_blank"
                    >
                      solidpixels.
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row-main">
          <div class="col col-1-12 grid-12-12"></div>
        </div>

        <div class="row-main">
          <div class="col col-1-12 grid-12-12"></div>
        </div>

        <div class="row-main">
          <div class="col col-1-12 grid-12-12"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
