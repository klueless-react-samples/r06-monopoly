import React from 'react'

import './Board.css';

export function Board(props) {
  return (
    <div className='board-wrapper'>
      <main className="board">
        
        <div class="spot bottom right corner"><span>Go</span></div>
        <div class="spot bottom prop" data-group="brown"><span>Mediterranean Avenue</span></div>
        <div class="spot bottom"><span>Community Chest</span></div>
        <div class="spot bottom prop" data-group="brown"><span>Baltic Avenue</span></div>
        <div class="spot bottom"><span>Income Tax</span></div>
        <div class="spot bottom"><span>Reading Railroad</span></div>
        <div class="spot bottom prop" data-group="lightblue"><span>Oriental Avenue</span></div>
        <div class="spot bottom"><span>Chance</span></div>
        <div class="spot bottom prop" data-group="lightblue"><span>Vermont Avenue</span></div>
        <div class="spot bottom prop" data-group="lightblue"><span>Connecticut Avenue</span></div>
        <div class="spot left bottom corner"><span>In Jail / Just Visiting</span></div>
        <div class="spot left prop" data-group="magenta"><span>St. Charles Place</span></div>
        <div class="spot left"><span>Electric Company</span></div>
        <div class="spot left prop" data-group="magenta"><span>States Avenue</span></div>
        <div class="spot left prop" data-group="magenta"><span>Virginia Avenue</span></div>
        <div class="spot left"><span>Pennsylvania Railroad</span></div>
        <div class="spot left prop" data-group="orange"><span>St. James Place</span></div>
        <div class="spot left"><span>Community Chest</span></div>
        <div class="spot left prop" data-group="orange"><span>Tennessee Avenue</span></div>
        <div class="spot left prop" data-group="orange"><span>New York Avenue</span></div>
        <div class="spot top left corner"><span>Free Parking</span></div>
        <div class="spot top prop" data-group="red"><span>Kentucky Avenue</span></div>
        <div class="spot top"><span>Chance</span></div>
        <div class="spot top prop" data-group="red"><span>Indiana Avenue</span></div>
        <div class="spot top prop" data-group="red"><span>Illinois Avenue</span></div>
        <div class="spot top"><span>B.B.Q. Railroad</span></div>
        <div class="spot top prop" data-group="yellow"><span>Atlantic Avenue</span></div>
        <div class="spot top prop" data-group="yellow"><span>Ventnor Avenue</span></div>
        <div class="spot top"><span>Water Works</span></div>
        <div class="spot top prop" data-group="yellow"><span>Marvin Gardens</span></div>
        <div class="spot right top corner"><span>Go To Jail</span></div>
        <div class="spot right prop" data-group="green"><span>Pacific Avenue</span></div>
        <div class="spot right prop" data-group="green"><span>North Carolina Avenue</span></div>
        <div class="spot right"><span>Community Chest</span></div>
        <div class="spot right prop" data-group="green"><span>Pennsylvania Avenue</span></div>
        <div class="spot right"><span>Short Line</span></div>
        <div class="spot right"><span>Chance</span></div>
        <div class="spot right prop" data-group="blue"><span>Park Place</span></div>
        <div class="spot right"><span>Luxury Tax</span></div>
        <div class="spot right prop" data-group="blue"><span>Boardwalk</span></div>
    
      </main>
    </div>
  )
}
