import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import featuredImage from '../../../assets/img/img_1.jpg'

class HomePage extends Component {
  render() {
    const defaultImageUrl = 'https://www.omnihotels.com/-/media/images/hotels/pueave/hotel/pueave-omni-puerto-aventuras-beach-resort.jpg?h=660&la=en&w=1170';
    return (
      <div className="events-page">
        <div className="click-bait">
          <div className="container">
            <div className="mini-header">
              <div className="title">
                Swimming Meetups
                <small>For those who no matter what, stay afloat...</small>
              </div>
              <a href="#" className="btn btn-primary btn-lg">Join</a>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner"
                   style={{backgroundImage: `url(${defaultImageUrl})`}}>

                <div className="info-tag">
                  <div className="header-title">
                    <h2>Hotel Ibis, Ikeja</h2>
                  </div>
                  <div className="header-meta">
                    Created by Samuel James on 17th August, 2017
                  </div>

                  <div className="main-cta">
                    <a href="#" className="btn btn-lg btn-primary cta">
                      I am attending
                    </a>
                  </div>
                </div>

              </div>



              <div className="container">
                <div className="row">
                  <div className="col-lg-9 main-content">

                    <div className="content">
                    <div className="event-details bordered">

                      <p className="description">
                        We should visit the new EPIC Towers Hotel and enjoy its amazing swimming pool located 50 metres from the ground.
                      </p>

                      <table className="table borderless">
                        <tr>
                          <td>Venue:</td>
                          <td>EPIC Towers, 235 Ilupeju, Lagos</td>
                        </tr>
                        <tr>
                          <td>Date:</td>
                          <td>September 10, 2017</td>
                        </tr>
                        <tr>
                          <td>Time:</td>
                          <td>01:00pm WAT</td>
                        </tr>
                      </table>


                      <h3>Who is attending?</h3>

                      <ul className="member-list">
                        <li>@ignatius</li>
                        <li>@heavy_water</li>
                        <li>@fortune</li>
                        <li>@tams</li>
                        <li>@gentlefella</li>
                        <li>@bolaji</li>
                      </ul>

                      <div className="main-cta">
                        <a href="#" className="btn btn-lg btn-primary cta">
                          Join this event
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>


                  <div className="col-lg-3 bordered sidebar">
                    <div className="heading">
                      Recommendations
                    </div>

                    <div className="preview-card"
                         style={{backgroundImage: `url(${defaultImageUrl})`}}>
                      <div>Reserve a space</div>
                    </div>

                    <div className="content">
                      <p><b>Venue: </b>Sheraton Hotel, VI</p>
                      <p><b>Date: </b>Oct 21st, 2017</p>
                      <p>@ignatius, @heavy_water, @fortune, @tams have already indicated interest.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default HomePage;