import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

// components
import Footer from './Footer';

// images
import socialLogo from '../../assets/img/vector_blue_flower_logo.png'

// actions
import { getAllClubs } from '../../actions/socialClubActions';

class Jumbotron extends Component {
  componentDidMount() {
    this.props.getAllClubs();
    window.scrollTo(0, 0);
  }
  render() {
    const defaultImageUrl = 'https://www.omnihotels.com/-/media/images/hotels/pueave/hotel/pueave-omni-puerto-aventuras-beach-resort.jpg?h=660&la=en&w=1170';
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="container hero">
            <div className="no-margin j-content container">
              <header>
                <img src={socialLogo} alt='andela socials logo' className='logo'/>
                <h2 className='tagline'> Bringing Andelans Closer </h2>
              </header>
              <br/>
              <div className="container-fluid">
                {
                  this.props.clubs && !!this.props.clubs.length && this.props.clubs.map(club => {
                    return (
                      <div key={club.id} className="col-sm-4 club-card">
                        <Link to={`/home/clubs/${club.id}`}>
                          <div className="club hvr-glow"
                                style={{
                                  backgroundImage: `url(${club.featured_image || defaultImageUrl})`
                                }}>
                            <Link to={`/home/clubs/${club.id}`}>{club.name}</Link>
                          </div>
                          <section className='button-group hvr-glow'>
                            <button><span className="glyphicon glyphicon-eye-open"></span><span>preview</span></button>
                            <button><span className="glyphicon glyphicon-plus"></span><span>join</span></button>
                          </section>
                        </Link>

                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    clubs: state.socialClubs
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    getAllClubs
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron);
