import React from "react";
import Navbar from "../component/Navbar";

export default function Games() {
  return (
    <div>
      <Navbar />
      <div>
        <div class="card-group">
          <div class="card">
            <img src="https://zty.pe/media/ztype-card.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Z - Type</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">
                <a href="https://zty.pe/"></a>
                <i>Go Play..</i>
              </small>
            </div>
          </div>
          <div class="card">
            <img src="https://www.google.com/logos/fnbx/top_ten/coding_thumb_1x.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Google Doddle</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><a href="https://www.google.com/logos/2017/logo17/logo17.html?hl=id"></a>
                <i>Go Play..</i></small>
            </div>
          </div>
          <div class="card">
            <img src="https://lh3.googleusercontent.com/BpZ0gqFBZXaz9VbYan7cc-ON1CJ1xAozSq2Qqedgz9_TJ3q-rBbfcD4lZQMbemCHn5txgp-vYONJafyGMeWXjA7yovPjQHt2skJKP_E=s0" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Google Kriket</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><a href="https://www.google.com/logos/2017/cricket17/cricket17.html"></a>
                <i>Go Play..</i></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
