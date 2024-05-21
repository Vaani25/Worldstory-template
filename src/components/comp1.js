import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <><section className="bg">
            <div className="rectangle-1"></div>
            <div className="rectangle-1-copy-holder">
                <div className="navigation-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="col-data-wrapper match-height clearfix">
                                    <img className="menu-icon" src="images/menu_icon.png" alt="" title="" />
                                    <Link to={'/'} className="logo">
                                        World<span className="color0e0e0e">Story</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-5 col-xs-12">
                                <nav className="nav-2">
                                    <div className="navbar-header navbar-default">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav-2" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="nav-2">
                                        <ul className="nav navbar-nav nav-list-2 clearfix">
                                            <li><Link to="/newsapp">News</Link></li>
                                            <li><Link to="/fashion">Fashion</Link></li>
                                            <li><Link to="/travel">Travel</Link></li>
                                            <li><Link to="/life">Life</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 clearfix">
                                <img className="text" src="images/image_4.png" alt="               " title="               " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-3 col-xs-12 clearfix">
                            <div className="date clearfix">
                                <img className="text-4" src="images/image_6.png" alt="" title="" />
                                <p className="text-5">03. June 2019</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 clearfix">
                            <div className="city-temp clearfix">
                                <img className="text-2" src="images/image_5.png" alt="" title="" />
                                <p className="text-3">New York &nbsp;55.F</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-md-offset-3">
                            <div className="col-data-wrapper-2 match-height clearfix">
                                <div className="rectangle-3"></div>
                                <div className="wrapper-14">
                                    <ul className="nav navbar-nav nav-list-3 clearfix">
                                        <li><Link to="/newsapp">News</Link></li>
                                        <li><Link to="/fashion">Fashion</Link></li>
                                        <li><Link to="/travel">Travel</Link></li>
                                        <li><Link to="/life">Life</Link></li>
                                    </ul>
                                    <div className="rectangle-3-copy"></div>
                                    <div className="rectangle-3-copy-2"></div>
                                    <div className="rectangle-3-copy-3"></div>
                                </div>
                                <div className="rectangle-3-copy-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default function Header() {
    return (

        <div className="backgrounds">
            <section className="group-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col-data-wrapper-3 match-height no-space-between-inline-blocks">
                                <div className="main-blog-image">
                                    <div className="rectangle-2-holder">
                                        <div className="copy">
                                            <p className="text-6">Latest from the web for you</p>
                                            <div className="row-28 clearfix">
                                                <div className="rounded-rectangle-1-holder">
                                                    FASHION
                                                </div>
                                                <div className="rounded-rectangle-1-copy-holder">
                                                    LIFESTYLE
                                                </div>
                                                <p className="text-7">| &nbsp;&nbsp;&nbsp;&nbsp;03. June 2019</p>
                                            </div>
                                            <p className="text-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
                                        </div>
                                    </div>
                                    <div className="rectangle-2-copy"></div>
                                </div>
                                <div className="right-side">
                                    <div className="group-3">
                                        <div className="copy-2">
                                            <div className="rounded-rectangle-1-copy-2-holder">
                                                FASHION
                                            </div>
                                            <div className="wrapper-28 clearfix">
                                                <p className="text-10">Latest from the web for you</p>
                                                <img className="text-12" src="images/image_3.png" alt="" title="" />
                                                <p className="text-11">03. June 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-4">
                                        <div className="copy-3">
                                            <div className="rounded-rectangle-1-copy-2-holder-2">
                                                FASHION
                                            </div>
                                            <div className="wrapper-27 clearfix">
                                                <p className="text-14">Latest from the web for you</p>
                                                <img className="text-16" src="images/image_2.png" alt="" title="" />
                                                <p className="text-15">03. June 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-5">
                                        <div className="rounded-rectangle-1-copy-2-holder-3">
                                            FASHION
                                        </div>
                                        <div className="wrapper-24 clearfix">
                                            <p className="text-18">Latest from the web for you</p>
                                            <img className="text-20" src="images/image.png" alt="" title="" />
                                            <p className="text-19">03. June 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col-data-wrapper-4">
                                <div className="group-6">
                                    <p className="text-21"><strong className="text-style">Breaking News </strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="rectangle-2-copy-7"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-xs-12">
                                        <div className="group-11">
                                            <div className="heading-3">
                                                <p className="text-48">Latest POST</p>
                                                <div className="row-5-2 clearfix">
                                                    <div className="rectangle-6-copy-8"></div>
                                                    <div className="rectangle-6-copy-8-2"></div>
                                                </div>
                                            </div>
                                            <div className="posts clearfix">
                                                <div className="group-12">
                                                    <div className="row-21 clearfix">
                                                        <img className="rectangle-4" src="images/rectangle_4_7.jpg" alt="" />
                                                        <div className="heading-4">
                                                            <p className="text-49">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                            <div className="row-20 clearfix">
                                                                <div className="tag-6 match-height clearfix">
                                                                    <div className="rounded-rectangle-1-copy-5-holder-3">
                                                                        FASHION
                                                                    </div>
                                                                    <div className="rounded-rectangle-1-copy-5-holder-4">
                                                                        LIFESTYLE
                                                                    </div>
                                                                </div>
                                                                <p className="text-52">03. June 2019</p>
                                                            </div>
                                                            <div className="text-53">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rectangle-2-copy-2"></div>
                                                </div>
                                                <div className="group-13">
                                                    <div className="row-22 clearfix">
                                                        <img className="rectangle-4-2" src="images/rectangle_4_6.jpg" alt="" />
                                                        <div className="heading-5">
                                                            <p className="text-55">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                            <div className="row-19 clearfix">
                                                                <div className="tag-7 match-height clearfix">
                                                                    <div className="rounded-rectangle-1-copy-5-holder-5">FASHION</div>
                                                                    <div className="rounded-rectangle-1-copy-5-holder-6">LIFESTYLE</div>
                                                                </div>
                                                                <p className="text-58">03. June 2019</p>
                                                            </div>
                                                            <div className="text-59">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rectangle-2-copy-2-2"></div>
                                                </div>
                                                <div className="group-14">
                                                    <div className="row-23 clearfix">
                                                        <img className="rectangle-4-3" src="images/rectangle_4_5.jpg" alt="" />
                                                        <div className="heading-6">
                                                            <p className="text-61">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                            <div className="row-18 clearfix">
                                                                <div className="tag-8 match-height clearfix">
                                                                    <div className="rounded-rectangle-1-copy-5-holder-7">FASHION</div>
                                                                    <div className="rounded-rectangle-1-copy-5-holder-8">LIFESTYLE</div>
                                                                </div>
                                                                <p className="text-64">03. June 2019</p>
                                                            </div>
                                                            <div className="text-65">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rectangle-2-copy-2-3"></div>
                                                </div>
                                                <div className="group-15">
                                                    <div className="row-24 clearfix">
                                                        <img className="rectangle-4-4" src="images/rectangle_4_4.jpg" alt="" />
                                                        <div className="heading-7">
                                                            <p className="text-67">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                            <div className="row-17 clearfix">
                                                                <div className="tag-9 match-height clearfix">
                                                                    <div className="rounded-rectangle-1-copy-5-holder-9">FASHION</div>
                                                                    <div className="rounded-rectangle-1-copy-5-holder-10">LIFESTYLE</div>
                                                                </div>
                                                                <p className="text-70">03. June 2019</p>
                                                            </div>
                                                            <div className="text-71">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rectangle-2-copy-2-4"></div>
                                                </div>
                                                <div className="group-16">
                                                    <div className="row-25 clearfix">
                                                        <img className="rectangle-4-5" src="images/rectangle_4_3.jpg" alt="" />
                                                        <div className="heading-8">
                                                            <p className="text-73">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                            <div className="row-16 clearfix">
                                                                <div className="tag-10 match-height clearfix">
                                                                    <div className="rounded-rectangle-1-copy-5-holder-11">FASHION</div>
                                                                    <div className="rounded-rectangle-1-copy-5-holder-12">LIFESTYLE</div>
                                                                </div>
                                                                <p className="text-76">03. June 2019</p>
                                                            </div>
                                                            <div className="text-77">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rectangle-2-copy-2-5"></div>
                                                </div>
                                                <div className="group-17 clearfix">
                                                    <img className="rectangle-4-6" src="images/rectangle_4_2.jpg" alt="" />
                                                    <div className="heading-9">
                                                        <p className="text-79">Sed ut persiciatis de omnis iste<br />natus error sit voluptatem</p>
                                                        <div className="row-15 clearfix">
                                                            <div className="tag-11 match-height clearfix">
                                                                <div className="rounded-rectangle-1-copy-5-holder-13">FASHION</div>
                                                                <div className="rounded-rectangle-1-copy-5-holder-14">LIFESTYLE</div>
                                                            </div>
                                                            <p className="text-82">03. June 2019</p>
                                                        </div>
                                                        <div className="text-83">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12">
                                        <div className="col-19">
                                            <div className="group-7">
                                                <div className="heading">
                                                    <p className="intresting">Interesting</p>
                                                    <div className="row-4-2 clearfix">
                                                        <div className="rectangle-6"></div>
                                                        <div className="rectangle-6-copy"></div>
                                                    </div>
                                                </div>
                                                <div className="blog">
                                                    <div className="group-8">
                                                        <div className="wrapper-32">
                                                        </div>
                                                        <img className="rectangle-4-copy" src="images/rectangle_4_copy_7.jpg" alt="" />
                                                        <div className="rectangle-2-copy-4-5"></div>
                                                        <img className="rectangle-4-copy-2" src="images/rectangle_4_copy_6.jpg" alt="" />
                                                        <div className="rectangle-2-copy-4-6"></div>
                                                        <img className="rectangle-4-copy-3" src="images/rectangle_4_copy_5.jpg" alt="" />
                                                        <div className="rectangle-2-copy-4-7"></div>
                                                        <img className="rectangle-4-copy-4" src="images/rectangle_4_copy_4.jpg" alt="" />
                                                    </div>
                                                    <div className="group-9">
                                                        <div className="row-33 clearfix">
                                                            <img className="rectangle-4-copy-5" src="images/rectangle_4_copy_8.jpg" alt="" />
                                                            <div className="col-27">
                                                                <p className="text-38">Latest from the web for<br />you</p>
                                                                <div className="tag-5">FASHION</div>
                                                                <p className="text-40">03. June 2019</p>
                                                            </div>
                                                        </div>
                                                        <div className="rectangle-2-copy-4-8"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group-10">
                                                <div className="heading-2">
                                                    <p className="text-41">Interesting</p>
                                                    <div className="row-3-2 clearfix">
                                                        <div className="rectangle-6-copy-2"></div>
                                                        <div className="rectangle-6-copy-2-2"></div>
                                                    </div>
                                                </div>
                                                <div className="post clearfix">
                                                    <div className="rectangle-4-holder">
                                                        <div className="rectangle-5"></div>
                                                    </div>
                                                    <div className="text-42">
                                                        <p className="text-43">Upcoming Web Design<br />Conferences</p>
                                                        <div className="row-29 clearfix">
                                                            <div className="rounded-rectangle-1-copy-5-holder">
                                                                FASHION
                                                            </div>
                                                            <div className="rounded-rectangle-1-copy-5-holder-2">
                                                                LIFESTYLE
                                                            </div>
                                                            <p className="text-46">03. June 2019</p>
                                                        </div>
                                                        <p className="text-47">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className="layer-25" src="images/layer_25.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="group-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="group-18">
                                <div className="heading-and-copy">
                                    <p className="text-85">Advices from our dedicated authors</p>
                                    <div className="row-27 clearfix">
                                        <div className="rectangle-6-copy-7"></div>
                                        <div className="rectangle-6-copy-7-2"></div>
                                    </div>
                                    <p className="text-86">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute .</p>
                                </div>
                                <div className="row row-8 auto-clear match-height-bootstrap-row">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="group-21">
                                            <img className="rectangle-7-copy-3" src="images/rectangle_7_copy_3.jpg" alt="" />
                                            <div className="rectangle-7-holder-3">
                                                <div className="copy-6">
                                                    <div className="text-97">
                                                        <p className="text-98">Upcoming Web Design<br />Conferences</p>
                                                        <p className="text-99">03. June 2019</p>
                                                    </div>
                                                    <div className="tag-14 match-height clearfix">
                                                        <div className="rounded-rectangle-1-copy-8-holder-5">
                                                            FASHION
                                                        </div>
                                                        <div className="rounded-rectangle-1-copy-8-holder-6">
                                                            LIFESTYLE
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12">
                                        <div className="group-20">
                                            <img className="rectangle-7-copy-2" src="images/rectangle_7_copy_2.jpg" alt="" />
                                            <div className="rectangle-7-holder-2">
                                                <div className="copy-5">
                                                    <div className="text-92">
                                                        <p className="text-93">Upcoming Web Design<br />Conferences</p>
                                                        <p className="text-94">03. June 2019</p>
                                                    </div>
                                                    <div className="tag-13 match-height clearfix">
                                                        <div className="rounded-rectangle-1-copy-8-holder-3">
                                                            FASHION
                                                        </div>
                                                        <div className="rounded-rectangle-1-copy-8-holder-4">
                                                            LIFESTYLE
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12">
                                        <div className="group-19">
                                            <img className="rectangle-7-copy" src="images/rectangle_7_copy.jpg" alt="" />
                                            <div className="rectangle-7-holder">
                                                <div className="copy-4">
                                                    <div className="text-87">
                                                        <p className="text-88">Upcoming Web Design<br />Conferences</p>
                                                        <p className="text-89">03. June 2019</p>
                                                    </div>
                                                    <div className="tag-12 match-height clearfix">
                                                        <div className="rounded-rectangle-1-copy-8-holder">
                                                            FASHION
                                                        </div>
                                                        <div className="rounded-rectangle-1-copy-8-holder-2">
                                                            LIFESTYLE
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rectangle-8-copy-holder">
                <div className="group-22">
                    <div className="row-2-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-xs-12">
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="about-and-contact-info">
                                                    <div className="heading-and-copy-2">
                                                        <p className="text-107">About us</p>
                                                        <div className="row-32 clearfix">
                                                            <div className="rectangle-6-copy-3"></div>
                                                            <div className="rectangle-6-copy-3-2"></div>
                                                        </div>
                                                        <p className="text-108">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore
                                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                            exercitation ullamco laboris nisi
                                                        </p>
                                                    </div>
                                                    <div className="contact-info">
                                                        <div className="row-14 clearfix">
                                                            <img className="location" src="images/location.png" alt="" />
                                                            <p className="text-109">
                                                                123, Main Street, Your City,
                                                                <br />
                                                                New York 789456
                                                            </p>
                                                        </div>
                                                        <div className="row-31 clearfix">
                                                            <div className="col-24">
                                                                <img className="phone" src="images/phone.png" alt="" />
                                                                <img className="mail" src="images/mail.png" alt="" />
                                                            </div>
                                                            <div className="col-25">
                                                                <p className="text-110">
                                                                    +01 2345 67890
                                                                    <br />
                                                                    +01 2345 67890
                                                                </p>
                                                                <p className="text-111">
                                                                    free@psdfreebies.com
                                                                    <br />
                                                                    www.psdfreebies.com
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="col-5">
                                                    <div className="heading-10">
                                                        <p className="text-102">Popular Post</p>
                                                        <div className="row-11 clearfix">
                                                            <div className="rectangle-6-copy-4"></div>
                                                            <div className="rectangle-6-copy-4-2"></div>
                                                        </div>
                                                    </div>
                                                    <div className="group-23 clearfix">
                                                        <div className="row-13 clearfix">
                                                            <img
                                                                className="rectangle-4-copy-6"
                                                                src="images/rectangle_4_copy_3.jpg"
                                                                alt=""
                                                            />
                                                            <div className="col-11">
                                                                <p className="text-103">
                                                                    Latest from the web for
                                                                    <br />
                                                                    you
                                                                </p>
                                                                <div className="rounded-rectangle-1-copy-6-holder">FASHION</div>
                                                                <p className="text-104">03. June 2019</p>
                                                            </div>
                                                        </div>
                                                        <div className="rectangle-2-copy-4-9"></div>
                                                    </div>
                                                    <div className="group-24">
                                                        <div className="row-12 clearfix">
                                                            <img
                                                                className="rectangle-4-copy-7"
                                                                src="images/rectangle_4_copy_2.jpg"
                                                                alt=""
                                                            />
                                                            <div className="col-10">
                                                                <p className="text-105">
                                                                    Latest from the web for
                                                                    <br />
                                                                    you
                                                                </p>
                                                                <div className="rounded-rectangle-1-copy-6-holder-2">FASHION</div>
                                                                <p className="text-106">03. June 2019</p>
                                                            </div>
                                                        </div>
                                                        <div className="rectangle-2-copy-4-10"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-26">
                                            <div className="col-sm-6 col-xs-12 clearfix">
                                                <div className="rectangle-2-copy-5"></div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="col-data-wrapper-5 clearfix">
                                                    <img
                                                        className="rectangle-4-copy-8"
                                                        src="images/rectangle_4_copy.jpg"
                                                        alt=""
                                                    />
                                                    <div className="col-9">
                                                        <p className="text-112">
                                                            Latest from the web for
                                                            <br />
                                                            you
                                                        </p>
                                                        <div className="rounded-rectangle-1-copy-6-holder-3">FASHION</div>
                                                        <p className="text-113">03. June 2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            className="text-114"
                                            src="images/copy.png"
                                            alt="     "
                                            title="     "
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <div className="col-3">
                                        <div className="newsletter">
                                            <p className="newletter">Newsletter</p>
                                            <div className="row-9-2 clearfix">
                                                <div className="rectangle-6-copy-5"></div>
                                                <div className="rectangle-6-copy-5-2"></div>
                                            </div>
                                            <div className="rounded-rectangle-2-copy-holder">
                                                Enter Your Email Address
                                            </div>
                                            <div className="rounded-rectangle-2-holder">Subscribe</div>
                                        </div>
                                        <div className="categories">
                                            <div className="rectangle-2-copy-6"></div>
                                            <p className="categories-2">Categories</p>
                                            <div className="row-30 clearfix">
                                                <div className="rectangle-6-copy-6"></div>
                                                <div className="rectangle-6-copy-6-2"></div>
                                            </div>
                                            <div className="row-10-2 clearfix">
                                                <p className="text-116">
                                                    BUSINESS
                                                    <br />
                                                    ENTERTAINMENT
                                                    <br />
                                                    FOOD &amp; CUISINE
                                                    <br />
                                                    LIFESTYLE
                                                </p>
                                                <p className="text-117">
                                                    &nbsp;SPORT
                                                    <br />
                                                    TECH
                                                    <br />
                                                    &nbsp;TRAVEL
                                                    <br />
                                                    URBAN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-links">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5 col-xs-12">
                                            <p className="text-118">
                                                © Copyright by PSDFreebies.com &nbsp;2017. All rights reserved.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-12 col-md-offset-4">
                                            <nav className="nav-3">
                                                <div className="navbar-header navbar-default">
                                                    <button
                                                        type="button"
                                                        className="navbar-toggle"
                                                        data-toggle="collapse"
                                                        data-target="#nav-3"
                                                        aria-expanded="false"
                                                    >
                                                        <span className="sr-only">Toggle navigation</span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                    </button>
                                                </div>
                                                <div className="collapse navbar-collapse" id="nav-3">
                                                    <ul className="nav navbar-nav nav-list clearfix">
                                                        <li>
                                                            <p className="nav-item-1">
                                                                <a href="/">News</a>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="nav-item-1-2">
                                                                <a href="/">Fashion</a>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="nav-item-1-3">
                                                                <a href="/">Life</a>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className="nav-item-1-4">
                                                                <a href="/">Travel</a>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}
