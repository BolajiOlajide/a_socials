import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import featuredImage from '../../../assets/img/img_1.jpg'

class HomePage extends Component {
  render() {
    return (
      <div className="events-page">
        <div className="header mini">
          <div className="title">
            Swimming Meetups
            <small>For those who no matter what, stay afloat...</small>
          </div>
          <a href="#" className="btn btn-primary btn-lg">Join</a>
        </div>

        <content>
          <div className="row main-wrapper">
            <div className="col-lg-9">
              <div className="header-title">
                <h2>Hotel Ibis, Ikeja</h2>
              </div>
              <div className="header-meta">
                Created by Samuel James on 17th August, 2017
              </div>

              <img src={featuredImage} className="banner-image" />

              <div className="main-cta">
                <a href="#" className="btn btn-lg btn-primary cta">
                  I am attending
                </a>
              </div>

              <div className="event-details bordered">
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

                <p className="description">
                  We should visit the new EPIC Towers Hotel and enjoy its amazing swimming pool located 50 metres from the ground.
                </p>

                <h3>Who is attending?</h3>

                <ul>
                  <li>@ignatius</li>
                  <li>@heavy_water</li>
                  <li>@fortune</li>
                  <li>@tams</li>
                  <li>@gentlefella</li>
                  <li>@bolaji</li>
                </ul>
              </div>
            </div>



            <div className="col-lg-3 bordered">
              <div className="heading">
                Recommendations
              </div>

              <div className="preview-card">
                <div>Reserve a space</div>
              </div>

              <content>
                <p><b>Venue: </b>Sheraton Hotel, VI</p>
                <p><b>Date: </b>Oct 21st, 2017</p>
                <p>@ignatius, @heavy_water, @fortune, @tams have already indicated interest.</p>
              </content>
            </div>
          </div>
        </content>

      </div>
    );
  }
}

export default HomePage;