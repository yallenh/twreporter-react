import React, { Component, PropTypes } from 'react'
import _ from 'lodash';
if (process.env.BROWSER) {
    require("./Daily.css");
}

export default class Daily extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { daily } = this.props
        let daily_top = []
        if ( daily ) { daily_top = daily.slice(0, 6); }
	return daily_top ? (
	    <div className="daily">
		<h2 className="daily-news">
		    <div className="what">What&#39;s</div>
		    <div className="new"> New</div>
		</h2>
		<div className="daily-line"></div>

		<div className="daily-itemlistwrapprt">
		<ul className="daily-itemlist">
		    { _.map(daily_top, (a, index) => {
			var re = /^[\w\d]/;
			let img_existing = re.exec(a.firstImage);
			var t = new Date(a.lastPublish * 1000).toString().split(' ');
			if (a.isPublishedVersion) {
			    let thumbnail = (a.firstImage) ? "https://www.twreporter.org/data/files/organization/60826/image/derivative/scale~600x0~" + a.firstImage : a.preview_image
			    let url = (a.story_link) ? a.story_link : "https://www.twreporter.org/a/" + a.slug 
			    return (
				<li key={a.id} className="daily-item">
				    <a href={url}>
					<img className="daily-image" src={thumbnail}/>
				    </a>
				    <div className="daily_lastpublish">{[t[1], t[2], t[3]].join('.')}</div>
				    <div className="daily-title">{a.title}</div>
				</li>
			    );}
			})
		    }
		</ul>
		</div>
	    </div>
	) : null;
    }
}

export { Daily };

