import React, {Component} from 'react';

export default function FancyButton ({id}){

    return (
      <div id={id} className="container">
      <h3>Fixed Navbar</h3>
      <div className="row">
        <div className="col-md-4">
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>    
        </div>
        <div className="col-md-4"> 
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
        </div>
        <div className="col-md-4"> 
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p>
          <p>A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.</p> 
        </div>
      </div>
      <h1>Scroll this page to see the effect</h1>
      <h1>Scroll this page to see the effect</h1>
      <h1>Scroll this page to see the effect</h1>
      <h1>Scroll this page to see the effect</h1>
    </div>
    );
  }