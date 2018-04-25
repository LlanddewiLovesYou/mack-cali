import React, {PropTypes} from 'react';
import property1 from '../assets/images/property1.png'
import property2 from '../assets/images/property2.png'
import property3 from '../assets/images/property3.png'

export default class MobileProperties extends React.Component {
  render() {
    return (
      <div>
        <img className='prop-img' src={property1}/>
        <div className='mobile-copy'>
          <div className='property-title'>HARBORSIDE</div>
          <div className='property-subtitle'>MACK-CALI'S CORPORATE HEADQUARTERS<br/>JERSEY CITY, NEW JERSEY</div>
          <div className='property-mob-copy'>
            Harborside reshapes the way our work days unfold. With landmark
            destination offices, collaborative lounges, boutique shopping,
            world-class dining and an ever-changing social landscape, it brings
            endless possibilities to every moment, and all against a backdrop
            of New York City views. Spanning 4.3 million square feet of office
            and retail space, and with another 1.1 million square feet planned,
            Harborside and its six state-of-the-art class A buildings underscore
            the distinctive character of the Jersey City Waterfront— an unrivaled
            destination.
          </div>

          <ul className='bubble-list'>
            <li><div id='mob-orange' className='mobile-bubble'></div><div className='mobile-bubble-copy'>The drastically transformed promanade tatsefully combines multiuse communal
            spaces, collaborative lounges and a stylish floating stage designated
            for events on the water.</div></li>

          <li><div id='mob-aqua' className='mobile-bubble'></div><div className='mobile-bubble-copy'>  With all-new infrastructure, superior connectivity comprehensive updates inside
            and out. Harborside represents best-in-class working</div></li>


          <li><div id='mob-purple' className='mobile-bubble'></div><div className='mobile-bubble-copy'>The extended promanade offers waterfront dining and retail options, designated areas
            for events, pop-ups and programming, and mutiple viewing points with spectacular unobstructed views
            of New York City.</div></li>

          <li><div id='mob-green' className='mobile-bubble'></div><div className='mobile-bubble-copy'>Jersey City Ranks 5th for best public transportation in the U.S. --Business Insider</div></li>
          </ul>

        </div>
        <img className='prop-img' src={property2}/>
        <div className='mobile-copy'>
          <div className='property-title'>PORT IMPERIAL</div>
          <div className='property-subtitle'>WEEHAWKEN, NEW JERSEY</div>
          <div className='property-mob-copy'>
            <p>
              2017 ANNUAL REPORT Weehawken Ranked #1 Best Places to Raise
              a Family in Hudson County Source: Niche Media 2018 Best Places
              West New York Earns Walk Score: 94 Source: Walk Score For three
              decades, Roseland, a subsidiary of Mack-Cali, has played an integral
              role in the creation of the Port Imperial neighborhood, and the
              revitalization of the Hudson River waterfront in Weehawken and
              West New York. As part of a $2-billion, 200-acre master-planned
              development, Roseland has brought more than 2,600 apartments to
              market at Port Imperial, and has more than 2,000 apartments in
              the pipeline.
            </p>
            <p>
              Now is the opportunity to elevate Port Imperial’s profile as a
              premier destination for renters who value the rare combination
              of luxury living, dining and retail, world-class views of Manhattan,
              convenient transportation access, and open space that is difficult
              to find in the New York Metropolitan Area.
            </p>
          </div>

          <ul className='bubble-list'>
            <li><div id='mob-orange' className='mobile-bubble'></div><div className='mobile-bubble-copy'>Weehawken Ranked #1 best places to raise a family in Hudson County.
            Source: Niche Media 2018 Best Places</div></li>

          <li><div id='mob-aqua' className='mobile-bubble'></div><div className='mobile-bubble-copy'>West New York Earns Walk Score: 94<br/>Source: Walk Score</div></li>

          <li><div id='mob-purple' className='mobile-bubble'></div><div className='mobile-bubble-copy'>Jersey City Ranks 5th for best public transportation in the U.S. --Business Insider</div></li>
          </ul>

        </div>
        <img className='prop-img' src={property3}/>
        <div className='mobile-copy'>
          <div className='property-title'>SUBURBAN IMPROVEMENTS</div>
          <div className='property-mob-copy'>
            <p>
              Two years ago, we made a commitment to significantly upgrade
              several of our core office properties—ones that we consider
              prime opportunities in transit-oriented markets. We upgraded
              every touchpoint of the tenant experience—from what they see
              when they first walk into the building ’ s lobby, to where
              and what they eat for lunch, and how they work out in the
              afternoon.
            </p>
            <p>
              This capital improvement initiative involved a comprehensive
              renovation of building exteriors, installation of state-of-the-art
              amenities, and modernization of common areas in properties
              throughout Metropark, Short Hills, Red Bank, and Parsippany.
            </p>
          </div>
      </div>
    </div>
    );
  }
}
