import React, { Component } from 'react';
import Styles from './App.scss';

class App extends Component {
	render() {
		return (
			<div className={Styles.Main}>
				<header className={Styles.Header}>
					<div className={Styles.Header1}>
						1
					</div>
					<div className={Styles.Header2}>
						2
					</div>
					<div className={Styles.Header3}>
						3
					</div>
				</header>
				<div className={Styles.ContentHolder}>
					<div className={Styles.SideBar}>
						4
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						5
					</div>
					<div className={Styles.Content}>
						6
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						7
					</div>
				</div>
			</div>
		);
	}
}

export default App;
