import React, { Component } from 'react';
import './stats_style.css'

export default class Item extends Component {
  render() {
    return (
      <div>
        <h1 id="statsheader">Stats</h1>
        <h2 id="positionheader">Strikers</h2>
        <table id="statstable">
          <tbody>
            <tr id="headerrow">
              <td>Player</td>
              <td>Games</td>
              <td>Wins</td>
              <td>Win %</td>
              <td>TiP</td>
              <td>G</td>
              <td>G/Gm</td>
              <td>OG</td>
            </tr>
            <tr>
              <td id="namecell">Lacey</td>
              <td id="statcell">3</td>
              <td id="statcell">1</td>
              <td id="statcell">0.333</td>
              <td id="statcell">26</td>
              <td id="statcell">18</td>
              <td id="statcell">6.00</td>
              <td id="statcell">1</td>
            </tr>
            <tr>
              <td id="namecell">Bear</td>
              <td id="statcell">3</td>
              <td id="statcell">3</td>
              <td id="statcell">1.000</td>
              <td id="statcell">30</td>
              <td id="statcell">17</td>
              <td id="statcell">5.67</td>
              <td id="statcell">0</td>
            </tr>
            <tr>
              <td id="namecell">Woodsy</td>
              <td id="statcell">4</td>
              <td id="statcell">2</td>
              <td id="statcell">0.500</td>
              <td id="statcell">31</td>
              <td id="statcell">16</td>
              <td id="statcell">4.00</td>
              <td id="statcell">0</td>
            </tr>
            <tr>
              <td id="namecell">Kevin</td>
              <td id="statcell">2</td>
              <td id="statcell">0</td>
              <td id="statcell">0.000</td>
              <td id="statcell">6</td>
              <td id="statcell">3</td>
              <td id="statcell">1.50</td>
              <td id="statcell">0</td>
            </tr>
          </tbody>
        </table>
        <h2 id="positionheader">Goalkeepers</h2>
        <table id="statstable">
          <tbody>
            <tr id="headerrow">
              <td>Player</td>
              <td>Games</td>
              <td>Wins</td>
              <td>Win %</td>
              <td>TiP</td>
              <td>G</td>
              <td>G/Gm</td>
              <td>OG</td>
              <td>GA</td>
              <td>GA/Gm</td>
            </tr>
            <tr>
              <td id="namecell">Lep</td>
              <td id="statcell">3</td>
              <td id="statcell">3</td>
              <td id="statcell">1.000</td>
              <td id="statcell">30</td>
              <td id="statcell">13</td>
              <td id="statcell">4.33</td>
              <td id="statcell">0</td>
              <td id="statcell">14</td>
              <td id="statcell">4.67</td>
            </tr>
            <tr>
              <td id="namecell">Marissa</td>
              <td id="statcell">3</td>
              <td id="statcell">1</td>
              <td id="statcell">0.333</td>
              <td id="statcell">26</td>
              <td id="statcell">8</td>
              <td id="statcell">2.67</td>
              <td id="statcell">1</td>
              <td id="statcell">23</td>
              <td id="statcell">7.67</td>
            </tr>
            <tr>
              <td id="namecell">Rev</td>
              <td id="statcell">4</td>
              <td id="statcell">2</td>
              <td id="statcell">0.500</td>
              <td id="statcell">31</td>
              <td id="statcell">15</td>
              <td id="statcell">3.75</td>
              <td id="statcell">0</td>
              <td id="statcell">36</td>
              <td id="statcell">9.00</td>
            </tr>
            <tr>
              <td id="namecell">Katelyn</td>
              <td id="statcell">2</td>
              <td id="statcell">0</td>
              <td id="statcell">0.000</td>
              <td id="statcell">6</td>
              <td id="statcell">3</td>
              <td id="statcell">1.50</td>
              <td id="statcell">0</td>
              <td id="statcell">20</td>
              <td id="statcell">10.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
