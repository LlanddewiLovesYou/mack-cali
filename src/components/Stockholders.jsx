import React from 'react';
import Navbar from './Navbar';
import '../assets/stylesheets/Stockholders.css';
import micheal from '../assets/images/micheal.png';
import marshall from '../assets/images/marshall.png';
import uparrow from '../assets/images/uparrow.png';
import seventeen from '../assets/images/seventeen.png';
import fiftyeight from '../assets/images/fiftyeight.png';



class Stockholders extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>

          <summary className='stockholder-container'>
            <div  className='row' id='stockholder-greeting'>
              To Our Stockholders:
            </div>


            <div className='row'>
              <div className='col-md-8 col-xs-8 col-xs-offset-2'>
              <p id='first-paragraph'>
                By executing on our plan to constantly evolve and improve the
                Mack-Cali portfolio, we believe we have established the finest
                office and residential platform in New Jersey. 2017 was a very
                active and productive year, highlighted by the refining of our
                office holdings with the sale of an additional $528 million of
                non-core assets. Despite a challenging market, we began many
                transformative capital improvements at our suburban and waterfront
                office properties, including the creation and renovation of common
                and amenity spaces, the addition of cutting edge food venues;
                as well as the delivery of 1,162 state-of-the-art, luxury multifamily units.
              </p>
              <p>
                While 2017 marked the continued paring of our office holdings,
                we advanced our growth through Roseland Residential Trust (RRT),
                our multifamily subsidiary. Over the year, we converted even
                more of our minority-owned multifamily positions to wholly-owned;
                we now have just 542 remaining units for which Roseland holds a
                minority position (down from 3,026 in 2015). Further, the 1,162
                units we delivered to the market last year leased up well ahead
                of our expectations and are currently more than 95-percent stabilized.
                Additionally, we are currently constructing 1,944 units that are
                projected to add approximately $51.1 million in net operating
                income upon completion and stabilization. Our residential
                pipeline, which now contains approximately 10,960 units, can
                prospectively add incremental revenue and net operating income
                upon completion and stabilization. Our growth in Roseland is
                being financed by cash flow, long-term, low-cost mortgages and
                through an equity contribution from The Rockpoint Group.
              </p>
              <p>
                We have capitalized on our unrivaled location on the Jersey City
                waterfront by creating a hub of excitement and activity through
                the addition of programming which both our office and residential
                tenants and visitors can enjoy. Programming includes concerts,
                a seasonal outdoor beer garden, farmer’s market, food and beverage
                festivals, community fitness classes and much more. Furthermore,
                we’ve made our enviable Jersey City location even more accessible
                with the addition of a new NY Waterway ferry terminal on the
                outdoor promenade at Harborside. Operating seven days per week,
                the ferry can transport our residents, tenants and visitors to
                Hudson Yards or Brookfield Place in less than 10 minutes. This
                activation of the waterfront better positions both our office and
                residential assets as the preferred place to live, work and play
                in Jersey City.
              </p>
              <p>
                As we have evolved our portfolio, we have also restructured our
                operations and streamlined our workforce. This restructuring was
                not an easy task but a necessary one as we initiate a more
                efficient approach to executing our plan and building a team that
                works together seamlessly for the future.
              </p>
              <p>
                For the first time since before 2007, we have a positive mark to
                market in our office portfolio. We achieved our target rents, and
                saw strong cash and GAAP leasing spreads in 2017; realizing a 4.4
                percent spread on a cash basis and a nearly 16.1 percent spread
                on a GAAP basis. These are among the highest leasing spreads
                in Mack-Cali history.
              </p>
              <p>
                Although we have made tremendous progress since joining Mack-Cali
                in June of 2015, we recognize that there is still a lot of work
                to do, particularly as it relates to our office portfolio. After
                a very robust office leasing pace in 2016, activity on the
                waterfront slowed throughout 2017. There are many theories as
                to what has caused the slowdown—the uncertainty around tax reform;
                the concerns around the gubernatorial change in New Jersey; the
                uncertainty around the pace of potential deregulation and impact
                of the Trump presidency. Whatever the reason, there is no denying
                that we need to be more effective with our leasing efforts, as we
                ended the year with 87.6% occupancy throughout our core office
                portfolio. While the loss of occupancy is not acceptable to us,
                we remain positive about our prospects, given the quality of our
                assets and their exceptional locations.
              </p>
              <p>
                The great deal of work we ’ ve completed in the last 33 months
                has made a significant difference in the way we operate, and it
                has positively impacted our results. From the beginning, we took
                an aggressive approach to reaching our objectives. And while we
                have met and exceeded a number of our goals, we have not achieved
                the same level of success across the board.
              </p>
              <p>
                With this in mind, based on today ’ s environment, we have recalibrated
                our short-term expectations for delivery timing and the absorption
                throughout our residential portfolio, and we ’ re taking a more
                deliberate approach to office leasing on the waterfront. We have
                multiple leasing prospects from the technology, advertising media
                and information, financial services and healthcare sectors. Employers
                see the strength of our location in that it provides class A space
                at a competitive price, with excellent transportation options and
                a large residential base for prospective employees, in particular
                the millennial workforce.
              </p>
              <p>
                Our 2018 mantra is, “Leasing, Leasing, Leasing,” and we are cautiously
                optimistic about our ability to attract dynamic office users. After
                two incredibly active and successful years of transformation, we
                are digesting our recent activity, recalibrating our focus on balance
                sheet management, and concentrating operational efforts on leasing.
                We expect our asset sales to be largely complete in 2018 and have
                earmarked proceeds for the repayment of debt.
              </p>
              <p>
                The path to success is not simply a straight line, but a winding
                journey. Sometimes the road takes an unexpected turn, and
                frequently the destination is well worth the navigation. That’s
                where we see ourselves today: taking an unexpected turn, but
                acknowledging that we have, and continue to, make the right
                decisions to position Mack-Cali for NAV growth and stronger cash
                flow-generation in the future.
              </p>
              <p>
                We would like to thank each and every member of our hardworking
                team for their efforts on this journey, we feel compelled to single
                out our talented colleagues Ricardo Cardoso, our CIO who has done
                a truly superb job in transforming our portfolio, and Andrew Marshall,
                our President and EVP of Development at Roseland, who is building
                one of the finest luxury multifamily portfolio in the country. As
                always, we thank you, our investors for all of your continued support.
              </p>
              <br/>

                </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-4 col-xs-offset-2">
              <div className='signature-container'>
                <div className='signature' id='sig-1'>
                  <img src={micheal}/>
                  <div>Micheal J. Demarco</div><br/>Cheif Executive Officer
                  </div>
                  <div className='signature' id='sig-2'>
                    <img src={marshall}/>
                    <div>Marshall B. Tycher</div><br/>Chairman of Roseland<br/>Residential Trust
                    </div>
                  </div>
                  <div className='sig-date'>April 17, 2018</div>
                </div>
            </div>

          </summary>
      </main>
    )
  }

}



export default Stockholders

// <div className='stockholder-stats-container' id='stats-1'>
//   <div className='stat-number'>$58m</div>
//   <div id='by-2018'>by 2018</div>
//   <hr></hr>
//   <div className='stats-title'>Title Here</div>
//   <div className='stats-copy'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//   eiusmod tempor incididunt.</div>
// </div>
// <div className='stockholder-stats-container' id='stats-2'>
//   <div className='stat-number'><img src={uparrow}/>17.5%</div>
//   <hr></hr>
//   <div className='stats-title'>Title Here</div>
//   <div className='stats-copy'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//   eiusmod tempor incididunt.</div>
// </div>


// <div className="col-md-2">
//   <img id='seventeen' src={seventeen}/>
// </div>

// <div className="col-md-2">
//   <img id='fiftyeight' src={fiftyeight}/>
// </div>
