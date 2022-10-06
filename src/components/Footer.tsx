import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div id="footer">
      <div>
        <div className="connect">
          <a href="http://freewebsitetemplates.com/go/twitter/" id="twitter">
            twitter
          </a>
          <a href="http://freewebsitetemplates.com/go/facebook/" id="facebook">
            facebook
          </a>
          <a
            href="http://freewebsitetemplates.com/go/googleplus/"
            id="googleplus"
          >
            googleplus
          </a>
          <a href="http://pinterest.com/fwtemplates/" id="pinterest">
            pinterest
          </a>
        </div>
        <p>© copyright 2023 | all rights reserved.</p>
      </div>
    </div>
  );
}